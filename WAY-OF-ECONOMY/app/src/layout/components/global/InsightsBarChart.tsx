import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { ChartProps } from './InsightsLineChart';

export const InsightBarChart = ({ DataChart, Attributes }: ChartProps) => {
    return (
        <div style={{ ...Attributes }}>
            <ResponsiveContainer>
                <BarChart
                    style={{
                        background: '#20a85efd',
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
                    <XAxis dataKey="name" stroke='#f5f4f5' />
                    <YAxis width="auto" stroke='#efebf0' />
                    <Tooltip
                        wrapperStyle={{
                            zIndex: 9999,
                        }}
                        formatter={(value) => (value as number).toLocaleString("pt-br", {
                            style: "decimal",
                        })}
                    />
                    <Legend />
                    <Bar
                        name="Produtos Vendidos(UN)"
                        dataKey="value"
                        fill="#124135"
                        radius={[15, 15, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};