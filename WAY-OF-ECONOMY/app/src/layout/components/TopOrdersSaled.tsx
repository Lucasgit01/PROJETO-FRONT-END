import "../assets/css/TopOrdersSaled.css";
import { ChessQueenIcon, Receipt, Trophy } from "lucide-react";
import { convertNumberToBrl } from "../../utils/brlValueLabel";
import type { OrdersType } from "../../@types/orders";
import { reduceName } from "../../utils/reduceName";

type Props = {
    topOrders: Pick<OrdersType, "id" | "buyer" | "amount">[]
};

export const TopOrdersSaled = ({ topOrders }: Props) => {
    return (
        <div className="rank-container">
            <div className="rank-title">
                <p><Trophy style={{ scale: 0.8 }} />Top Vendas</p>
                <p>Impacto Lucrativo</p>
            </div>
            <div className="topic">
                {topOrders.map((m, i) => (
                    <>
                        <div className="rank">
                            <div className="rank-id">
                                {i === 0 && <p><ChessQueenIcon style={{ color: "yellow" }}/></p>}
                                <p style={i === 0 ? { color: "yellow" } : {}}>#{m.id}</p>
                            </div>
                            <div className="rank-infos">
                                <p>{convertNumberToBrl(m.amount)}</p>
                                <p><Receipt style={{ scale: 0.7 }} /> {reduceName(m.buyer, false)}</p>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}