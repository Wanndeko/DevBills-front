import { zodResolver } from "@hookform/resolvers/zod"
import { X } from "@phosphor-icons/react"
import { InputMask } from "@react-input/mask"
import dayjs from "dayjs"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { ButtonICon } from "../components/button-icon"
import { Card } from "../components/card"
import {
  CategoriesPieChart,
  CategoryProps
} from "../components/categories-pie-chart"
import { CreateCategoryDialog } from "../components/create-category-dialog"
import { CreateTransactionDialog } from "../components/create-transaction-dialog"
import { FinancialEvolutionBarChart } from "../components/financial-evolution-bar-chart"
import { Input } from "../components/input"
import { Logo } from "../components/Logo"
import { Titile } from "../components/title"
import { Transaction } from "../components/transaction"
import { useFetchAPI } from "../hooks/useFetchAPI"
import { filterTransactionSchema } from "../validators/schema"
import {
  FinancialEvolutionFilterData,
  TransctionFilterData
} from "../validators/types"
import {
  Aside,
  Balance,
  CategoryBadge,
  ChartAction,
  ChartContainer,
  ChartContent,
  Filters,
  Header,
  InputGroup,
  Main,
  SearchTransaction,
  Section,
  TransactionGroup
} from "./style"

export function Home() {
  const transactionsFilterForm = useForm<TransctionFilterData>({
    defaultValues: {
      title: "",
      categoryId: "",
      beginDate: dayjs().startOf("month").format("DD/MM/YYYY"),
      endDate: dayjs().endOf("month").format("DD/MM/YYYY")
    },
    resolver: zodResolver(filterTransactionSchema)
  })

  const financialEvolutionFilterForm = useForm<FinancialEvolutionFilterData>({
    defaultValues: {
      year: dayjs().get("year").toString()
    }
  })

  const {
    transactions,
    fetchTransactions,
    fetchDashboard,
    fetchFinancialEvolution,
    financialEvolution,
    dashboard
  } = useFetchAPI()

  useEffect(() => {
    const { beginDate, endDate } = transactionsFilterForm.getValues()
    fetchFinancialEvolution(financialEvolutionFilterForm.getValues())
    fetchDashboard({ beginDate, endDate })
    fetchTransactions(transactionsFilterForm.getValues())
  }, [fetchTransactions, transactionsFilterForm, fetchDashboard, fetchFinancialEvolution, financialEvolutionFilterForm])

  const [selectedCategory, setSelectedCategory] =
    useState<CategoryProps | null>(null)

  const handleSelectedCategory = useCallback(
    async ({ id, title, color }: CategoryProps) => {
      setSelectedCategory({
        id,
        title,
        color
      })
      transactionsFilterForm.setValue("categoryId", id)

      await fetchTransactions(transactionsFilterForm.getValues())
    },
    [transactionsFilterForm, fetchTransactions]
  )
  const handleDeSelectedCategory = useCallback(async () => {
    setSelectedCategory(null)
    transactionsFilterForm.setValue("categoryId", "")
    await fetchTransactions(transactionsFilterForm.getValues())
  }, [transactionsFilterForm, fetchTransactions])

  const onSubmitTransactions = useCallback(
    async (data: TransctionFilterData) => {
      await fetchTransactions(data)
    },
    [fetchTransactions]
  )

  const onSubmitDashboard = useCallback(
    async (data: TransctionFilterData) => {
      const { beginDate, endDate } = data
      await fetchDashboard({ beginDate, endDate })
      await fetchTransactions(data)
    },
    [fetchDashboard, fetchTransactions]
  )

  const onSubmitFinancialEvolution = useCallback(
    async (data: FinancialEvolutionFilterData) => {
      await fetchFinancialEvolution(data)
    },
    [fetchFinancialEvolution]
  )

  return (
    <>
      <Header>
        <Logo />
        <div>
          <CreateCategoryDialog />
          <CreateTransactionDialog />
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Titile Titile="Saldo" subtitle="Receitas e despesas no periodo" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="DD/MM/AAAA"
                error={
                  transactionsFilterForm.formState.errors.beginDate?.message
                }
                {...transactionsFilterForm.register("beginDate")}
              />
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="fim"
                placeholder="DD/MM/AAAA"
                error={transactionsFilterForm.formState.errors.endDate?.message}
                {...transactionsFilterForm.register("endDate")}
              />
              <ButtonICon
                onClick={transactionsFilterForm.handleSubmit(onSubmitDashboard)}
              />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={dashboard?.balance?.balance || 0} />
            <Card
              title="Receitas"
              amount={dashboard?.balance?.incomes || 0}
              variant="incomes"
            />
            <Card
              title="Gastos"
              amount={dashboard?.balance?.expenses * -1 || 0}
              variant="expenses"
            />
          </Balance>
          <ChartContainer>
            <header>
              <Titile
                Titile="Gastos"
                subtitle="Despesas por categoria no período"
              />
              {selectedCategory && (
                <CategoryBadge
                  $color={selectedCategory.color}
                  onClick={handleDeSelectedCategory}
                >
                  <X />
                  {selectedCategory.title.toLocaleUpperCase()}
                </CategoryBadge>
              )}
            </header>
            <ChartContent>
              <CategoriesPieChart
                expenses={dashboard.expenses}
                onClick={handleSelectedCategory}
              />
            </ChartContent>
          </ChartContainer>
          <ChartContainer>
            <header>
              <Titile
                Titile="Evolução Financeira"
                subtitle="Saldo, Receitas e Gastos no ano"
              />
              <ChartAction>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ a: /\d/ }}
                  variant="black"
                  label="Inicio"
                  placeholder="aaaa"
                  {...financialEvolutionFilterForm.register("year")}
                />
                <ButtonICon
                  onClick={financialEvolutionFilterForm.handleSubmit(
                    onSubmitFinancialEvolution
                  )}
                />
              </ChartAction>
            </header>
            <ChartContent>
              <FinancialEvolutionBarChart
                financialEvolution={financialEvolution}
              />
            </ChartContent>
          </ChartContainer>
        </Section>
        <Aside>
          <header>
            <Titile
              Titile="Transações"
              subtitle="Receitas e Gastos no Periodo"
            />
            <SearchTransaction>
              <Input
                variant="black"
                placeholder="Procurar Transação..."
                {...transactionsFilterForm.register("title")}
              />
              <ButtonICon
                onClick={transactionsFilterForm.handleSubmit(
                  onSubmitTransactions
                )}
              />
            </SearchTransaction>
          </header>
          <TransactionGroup>
            {transactions?.length &&
              transactions?.map((item, index) => (
                <Transaction
                  key={item._id}
                  id={index + 1}
                  amount={
                    item.type === "expense" ? item.amount * -1 : item.amount
                  }
                  date={dayjs(item.date).add(3, "hours").format("DD/MM/YYYY")}
                  category={{
                    title: item.category.title,
                    color: item.category.color
                  }}
                  title={item.title}
                  variant={item.type}
                />
              ))}
          </TransactionGroup>
        </Aside>
      </Main>
    </>
  )
}
