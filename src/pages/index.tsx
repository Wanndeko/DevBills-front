import { InputMask } from "@react-input/mask"

import { Button } from "../components/button"
import { ButtonICon } from "../components/button-icon"
import { Card } from "../components/card"
import { CreateCategoryDialog } from "../components/create-category-dialog"
import { Input } from "../components/input"
import { Logo } from "../components/Logo"
import { Titile } from "../components/title"
import { Transaction } from "../components/transaction"
import {
  Aside,
  Balance,
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
  return (
    <>
      <Header>
        <Logo />
        <div>
          <CreateCategoryDialog />
          <Button>Nova Categoria</Button>
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
              />
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
                variant="dark"
                label="Inicio"
                placeholder="DD/MM/AAAA"
              />
              <ButtonICon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={1000000} />
            <Card title="Saldo" amount={1000000} variant="incomes" />
            <Card title="Saldo" amount={1000000} variant="expenses" />
          </Balance>
          <ChartContainer>
            <header>
              <Titile
                Titile="Gastos"
                subtitle="Despesas por categoria no período"
              />
            </header>
            <ChartContent></ChartContent>
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
                />
                <ButtonICon />
              </ChartAction>
            </header>
            <ChartContent></ChartContent>
          </ChartContainer>
        </Section>
        <Aside>
          <header>
            <Titile
              Titile="Transações"
              subtitle="Receitas e Gastos no Periodo"
            />
            <SearchTransaction>
              <Input variant="black" placeholder="Procurar Transação..." />
              <ButtonICon />
            </SearchTransaction>
          </header>
          <TransactionGroup>
            <Transaction
              id={1}
              amount={10000}
              date="25/04/2024"
              category={{ title: "alimentação", color: "#ff33bb" }}
              title="Mercado"
            />
            <Transaction
              id={1}
              amount={10000}
              date="25/04/2024"
              category={{ title: "alimentação", color: "#ff33bb" }}
              title="Mercado"
            />
            <Transaction
              id={1}
              amount={10000}
              date="25/04/2024"
              category={{ title: "alimentação", color: "#ff33bb" }}
              title="Mercado"
            />
            <Transaction
              id={1}
              amount={10000}
              date="25/04/2024"
              category={{ title: "alimentação", color: "#ff33bb" }}
              title="Mercado"
            />
            <Transaction
              id={1}
              amount={10000}
              date="25/04/2024"
              category={{ title: "alimentação", color: "#ff33bb" }}
              title="Mercado"
            />
            <Transaction
              id={1}
              amount={10000}
              date="25/04/2024"
              category={{ title: "alimentação", color: "#ff33bb" }}
              title="Mercado"
            />
          </TransactionGroup>
        </Aside>
      </Main>
    </>
  )
}
