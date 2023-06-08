import { ProdCard } from "../../Styles/ProdCard.styled"

export default function ProductCard(props) {
    return (
        <ProdCard key={props.item.description}>
            <div><img style={{ width: "100%" }} src={props.item.image} alt='Product'/></div>
            <div style={{ margin: '20px' }}>
                <div>
                    <span style={{ fontWeight: 'bold' }}>Description</span>: {props.item.description} 
                </div>
                <div>
                    <span style={{ fontWeight: 'bold' }}>Price</span>: ${props.item.price} 
                </div>
                <div>
                    <span style={{ fontWeight: 'bold' }}>Rating</span>: {props.item.rating} 
                </div>
            </div>
        </ProdCard>
    )
}