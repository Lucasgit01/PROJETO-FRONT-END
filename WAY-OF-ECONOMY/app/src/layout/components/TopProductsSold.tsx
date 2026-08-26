import type { OrderItems } from "../../@types/orders";
import "../assets/css/TopProductsSold.css"

type Props = {
    products: OrderItems[]
}
export const TopProductsCard = ({ products }: Props) => {
    return (
        <div className="top3-container">
            <div className="top3-header">
                <h2>🔥 Top Produtos</h2>
                <span>Os mais procurados</span>
            </div>

            <div className="top3-grid">
                {products.map((product, index) => (
                    <div
                        className={`top3-card rank-${index + 1}`}
                        key={product.id}
                    >
                        <strong>#{index + 1}</strong><br />
                        <img className="medal" src={product.images[0]}>

                        </img>

                        <h3>{product.label}</h3>
                    
                        <p>{product.origin} - {product.quantity} vendas</p>

                    </div>
                ))}
            </div>
        </div>
    )
}