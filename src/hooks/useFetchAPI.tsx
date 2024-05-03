import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState
} from "react"

import { APIservice } from "../services/api"
import {
  Category,
  DashBoard,
  FinancialEvoluiton,
  Transaction
} from "../services/api-types"
import { formatDate } from "../utils/formart-date"
import {
  CreateCategoryData,
  CreateTransactionData,
  FinancialEvolutionFilterData,
  TransctionFilterData
} from "../validators/types"

interface FetchAPIProps {
  dashboard: DashBoard
  financialEvolution: FinancialEvoluiton[]
  createCategory: (data: CreateCategoryData) => Promise<void>
  createTransaction: (data: CreateTransactionData) => Promise<void>
  fetchCategories: () => Promise<void>
  fetchTransactions: (filters: TransctionFilterData) => Promise<void>
  fetchDashboard: (
    filters: Pick<TransctionFilterData, "beginDate" | "endDate">
  ) => Promise<void>
  fetchFinancialEvolution: (
    filters: FinancialEvolutionFilterData
  ) => Promise<void>
  categories: Category[]
  transactions: Transaction[]
}

const FetchAPIContext = createContext<FetchAPIProps>({} as FetchAPIProps)

type FetchAPIProviderProps = {
  children: ReactNode
}

export function FetchAPIProvider({ children }: FetchAPIProviderProps) {
  const [dashboard, setDashboard] = useState<DashBoard>({} as DashBoard)
  const [categories, setCategories] = useState<Category[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [financialEvolution, setFinancialEvolution] = useState<
    FinancialEvoluiton[]
  >([])
  const createTransaction = useCallback(async (data: CreateTransactionData) => {
    await APIservice.createTransaction({
      ...data,
      date: formatDate(data.date),
      amount: Number(data.amount.replace(/[^0-9]/g, ""))
    })
  }, [])

  const createCategory = useCallback(async (data: CreateCategoryData) => {
    await APIservice.createCategory(data)
  }, [])

  const fetchCategories = useCallback(async () => {
    const data = await APIservice.getCategories()

    setCategories(data)
  }, [])

  const fetchTransactions = useCallback(
    async (filters: TransctionFilterData) => {
      const dataTransactions = await APIservice.getTransaction({
        ...filters,
        beginDate: formatDate(filters.beginDate),
        endDate: formatDate(filters.endDate)
      })

      setTransactions(dataTransactions)
    },
    []
  )

  const fetchDashboard = useCallback(
    async ({
      beginDate,
      endDate
    }: Pick<TransctionFilterData, "beginDate" | "endDate">) => {
      const dashboard = await APIservice.getDashBoard({
        beginDate: formatDate(beginDate),
        endDate: formatDate(endDate)
      })
      setDashboard(dashboard)
    },
    []
  )

  const fetchFinancialEvolution = useCallback(
    async ({ year }: FinancialEvolutionFilterData) => {
      const financialEvolution = await APIservice.getFinancialEvolution({
        year: year.padStart(4, "0")
      })
      setFinancialEvolution(financialEvolution)
    },
    []
  )

  return (
    <FetchAPIContext.Provider
      value={{
        financialEvolution,
        categories,
        createCategory,
        fetchCategories,
        fetchFinancialEvolution,
        createTransaction,
        transactions,
        fetchTransactions,
        dashboard,
        fetchDashboard
      }}
    >
      {children}
    </FetchAPIContext.Provider>
  )
}

export function useFetchAPI(): FetchAPIProps {
  return useContext(FetchAPIContext)
}
