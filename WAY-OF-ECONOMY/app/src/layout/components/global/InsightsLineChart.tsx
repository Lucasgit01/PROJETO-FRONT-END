import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';
import type { ChartData } from 'recharts/types/state/chartDataSlice';

export type DataChart = {
    name: string,
    value: string | number
}

type Props = {
    DataChart: ChartData<DataChart>,
    Attributes: React.CSSProperties
}

export const LineInsight = ({ DataChart, Attributes }: Props) => {
    return (
        <div style={{ ...Attributes }}>
            <ResponsiveContainer>
                <LineChart
                    style={{
                        borderRadius: 10,
                        background: '#e3e6e7',
                        padding: 15,
                        boxShadow: "0px 0px 4px black",
                    }}
                    data={DataChart}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" name='Total Vendido - R$' activeDot={true} dataKey="value" stroke="#203372" isAnimationActive={true} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}