import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ResponsiveContainer, } from 'recharts';
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
                        background: '#208199',
                        padding: 25,
                        borderRadius: 15,
                        boxShadow: "0px 0px 15px grey",
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
                    <XAxis dataKey="name" stroke='#dfe2ee' />
                    <YAxis stroke='#dfe2ee' />
                    <Tooltip labelStyle={{ color: "red" }} itemStyle={{ color: "red" }} />
                    <Legend style={{ color: "red" }} />
                    <Line type="monotone" name='Total Vendido - R$' activeDot={true} dataKey="value" stroke="#e7e9f1" isAnimationActive={true} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}