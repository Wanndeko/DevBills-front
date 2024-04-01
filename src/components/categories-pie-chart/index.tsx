import { ResponsivePie } from "@nivo/pie"
import { useMemo } from "react"

import { theme } from "../../styles/themes"
import { formatCurrency } from "../../utils/format-currency"

const apiData = [
  {
    _id: "1",
    title: "Compras",
    amount: 30000,
    color: "#ffbb33"
  },
  {
    _id: "2",
    title: "Agua",
    amount: 16000,
    color: "#ff0000"
  },
  {
    _id: "3",
    title: "Luz",
    amount: 20000,
    color: "#00bb33"
  },
  {
    _id: "4",
    title: "Lazer",
    amount: 45000,
    color: "#ff33bb"
  }
]

type ChartData = {
  id: string
  label: string
  externalId: string
  value: number
  color: string
}

export function CategoriesPieChart() {
  const data = useMemo<ChartData[]>(() => {
    const chartData: ChartData[] = apiData.map((item) => ({
      id: item.title,
      label: item.title,
      externalId: item._id,
      value: item.amount,
      color: item.color
    }))

    return chartData
  }, [])

  return (
    <ResponsivePie
      data={data}
      enableArcLabels={false}
      enableArcLinkLabels={false}
      colors={({ data }) => data.color}
      margin={{ top: 20 }}
      valueFormat={formatCurrency}
      theme={{
        text: {
          fontFamily: "Lexend",
          fontSize: 10
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
      legends={[
        {
          anchor: "top",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: -20,
          itemWidth: 120,
          itemHeight: 16,
          itemTextColor: theme.color.neutral,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 10,
          symbolShape: "circle"
        }
      ]}
    />
  )
}
