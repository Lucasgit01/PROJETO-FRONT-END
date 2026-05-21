import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';
import type { ChartData } from 'recharts/types/state/chartDataSlice';

export type DataChart = {
    name: string,
    value: string | number
}

type Props = {
    DataChart: ChartData<DataChart>
}

export const LineInsight = ({ DataChart }: Props) => {
    return (
        <div>
            <LineChart
                style={{ width: '60%', maxWidth: '700px', maxHeight: '60vh', aspectRatio: 1.618 }}
                responsive={true}
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
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Mes" stroke="#203372" isAnimationActive={true} />
            </LineChart>
        </div>
    )
}