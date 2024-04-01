import { ResponsiveBar } from "@nivo/bar"
import dayjs from "dayjs"
import ptBRLocale from "dayjs/locale/pt-br"
import { useMemo } from "react"

import { theme } from "../../styles/themes"
import { formatCurrency } from "../../utils/format-currency"

dayjs.locale(ptBRLocale)

const apiData = [
  {
    _id: {
      year: 2024,
      month: 1
    },
    balance: 80597,
    incomes: 90545,
    expenses: 50814
  },
  {
    _id: {
      year: 2024,
      month: 2
    },
    balance: 80597,
    incomes: 90545,
    expenses: 50814
  },
  {
    _id: {
      year: 2024,
      month: 3
    },
    balance: 80597,
    incomes: 90545,
    expenses: 50814
  },
  {
    _id: {
      year: 2024,
      month: 4
    },
    balance: 80597,
    incomes: 90545,
    expenses: 50814
  }
]
type ChartData = {
  month: string
  Saldo: number
  Receitas: number
  Gastos: number
}

export function FinancialEvolutionBarChart() {
  const data = useMemo<ChartData[]>(() => {
    const chartData: ChartData[] = apiData.map((item) => ({
      month: dayjs(`${item._id.year}-${item._id.month}-01`).format("MMM"),
      Saldo: item.balance,
      Receitas: item.incomes,
      Gastos: item.expenses
    }))
    return chartData
  }, [])

  return (
    <ResponsiveBar
      data={data}
      keys={["Saldo", "Receitas", "Gastos"]}
      colors={[theme.color.info, theme.color.primary, theme.color.error]}
      indexBy={"month"}
      groupMode="grouped"
      enableLabel={false}
      enableGridY={false}
      padding={0.2}
      axisLeft={{
        tickSize: 0,
        format: formatCurrency
      }}
      margin={{ left: 80, bottom: 28 }}
      theme={{
        text: {
          fontFamily: "Lexend",
          fontSize: 10,
          color: theme.color.white
        },
        axis: {
          ticks: {
            text: {
              fill: theme.color.white
            }
          }
        },
        tooltip: {
          container: {
            backgroundColor: theme.color.black,
            padding: 16,
            color: theme.color.white,
            fontFamily: "Lexend",
            fontSize: 12,
            borderRadius: 4
          }
        }
      }}
      valueFormat={formatCurrency}
    />
  )
}
