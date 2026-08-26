import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';
import type { ChartData } from 'recharts/types/state/chartDataSlice';

export type DataChart = {
    name: string,
    value: number
}

export type ChartProps = {
    DataChart: ChartData<DataChart>,
    Attributes?: React.CSSProperties
}

export const LineInsight = ({ DataChart, Attributes }: ChartProps) => {
    return (
        <div style={{ ...Attributes }}>
            <ResponsiveContainer>
                <LineChart
                    style={{
                        background: '#a0154a',
                        padding: 25,
                        borderRadius: 15,
                        boxShadow: "0px 0px 13px grey",
                    }}
                    data={DataChart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 10
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke='#f3f8e9' />
                    <YAxis stroke='#eaebe2' />
                    <Tooltip
                        labelStyle={{ color: "#0d6921" }}
                        itemStyle={{ color: "#1bb857" }}
                        formatter={(value) => (value as number).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                            maximumFractionDigits: 2
                        })} />
                    <Legend style={{ color: "red" }} />
                    <Line type="monotone" name='Total Vendido' activeDot={true} dataKey="value" stroke="#fdf690" isAnimationActive={true} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}