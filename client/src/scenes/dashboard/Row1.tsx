import { useMemo } from 'react'
import DashboardBox from '@/components/DashboardBox'
import { useTheme } from "@mui/material"
import { useGetKpisQuery } from '@/state/api'
import BoxHeader from '@/components/BoxHeader'
import { 
  AreaChart, 
  Area, XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Line,
  Legend,
  LineChart,
  BarChart,
  Bar
} from 'recharts';

const Row1 = () => {
  const { data } = useGetKpisQuery();
  const { palette } = useTheme()

  const revenue = useMemo(() => {
    return (
      data && 
      data[0].monthlyData.map(({ month, revenue }) => {
        return {
          name: month.substring(0,3),
          revenue: revenue,
        }
      })
    )
  }, [data])
  
  const revenueExpenses = useMemo(() => {
    return (
      data && 
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0,3),
          revenue: revenue,
          expenses: expenses,
        }
      })
    )
  }, [data])

  const revenueProfit = useMemo(() => {
    return (
      data && 
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0,3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        }
      })
    )
  }, [data])

  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader 
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 25,
            left: -10,
            bottom: 60,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs> 
            <linearGradient id="colorRevenue" x1="0" y="0" x2="0" y2="1">  
              <stop 
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity={0.5}
              />
              <stop 
                offset="95%"
                stopColor={palette.primary[300]}
                stopOpacity={0}
              />
            </linearGradient>
           <linearGradient id="colorExpenses" x1="0" y="0" x2="0" y2="1">  
              <stop 
                offset="5%"
                stopColor={palette.primary[300]}
                stopOpacity={0.5}
              />
              <stop 
                offset="95%"
                stopColor={palette.primary[300]}
                stopOpacity={0}
              />
           </linearGradient>
          </defs>
          {/* //linear gradient verticaly */}
          <XAxis 
            dataKey="name" 
            tickLine={false} 
            style={{fontSize: "10px"}}
          />
          <YAxis 
            tickLine={false} 
            axisLine={{ strokeWidth: "0"}}
            style={{ fontSize: "10px"}}
            domain={[8000, 23000]}
          />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="revenue" 
            dot={true}
            stroke={palette.primary.main} 
            fillOpacity={1}
            fill="url(#colorExpenses)" 
          />
           <Area 
            type="monotone" 
            dataKey="expenses" 
            stroke={palette.primary.main} 
            fillOpacity={1}
            fill="url(#colorRevenue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="b">
      <BoxHeader 
          title="Revenue and Expeses"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
           width={500}
           height={400}
          data={revenueProfit}
          margin={{
            top: 20,
            right: 0,
            left: -10,
            bottom: 55,
          }}
        >
          <CartesianGrid vertical={false} stroke={palette.grey[800]} />
  
          {/* //linear gradient verticaly */}
          <XAxis 
            dataKey="name" 
            tickLine={false} 
            style={{fontSize: "10px"}}
          />
          <YAxis 
            yAxisId="left"
            tickLine={false} 
            axisLine={false}
            style={{ fontSize: "10px"}}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            tickLine={false} 
            axisLine={false}
            style={{ fontSize: "10px"}}
          />
          <Tooltip />
          <Legend 
            height={20} 
            wrapperStyle={{
              margin: "0 0 10px 0"
            }} 
          />
          <Line 
            yAxisId="left"
            type="monotone"
            dataKey="profit"
            stroke={palette.tertiary[500]}
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="revenue" 
            stroke={palette.primary.main} 
          />
        </LineChart>
      </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="c">
          <BoxHeader 
            title="Revenue Month by Month"
            subtitle="graph representing the revenue Month by Month"
            sideText="+4%"
          />
         <ResponsiveContainer>
            <BarChart 
              width={730} 
              height={250} 
              data={revenue}
              margin={{
                top: 17,
                right: 15,
                left: -5,
                bottom: 58,
              }}
            >
              <linearGradient id="colorRevenue" x1="0" y="0" x2="0" y2="1">  
                <stop 
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop 
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <CartesianGrid 
                vertical={false} 
                stroke={palette.grey[800]} 
              />
              <XAxis 
                dataKey="name"
                axisLine={false}
                tickLine={false} 
                style={{ fontSize: "10px"}}
              />
              <YAxis
                axisLine={false}
                tickLine={false} 
                style={{ fontSize: "10px"}}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="url(#colorRevenue)" />
            </BarChart>
         </ResponsiveContainer>
      </DashboardBox>
    </>
  )
}

export default Row1
