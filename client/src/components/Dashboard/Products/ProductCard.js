import { ProdCard } from "../../Styles/ProdCard.styled"
import { ProdTextContainer } from "../../Styles/ProdTextContainer.styled"

export default function ProductCard(props) {
    return (
        <ProdCard key={props.item.description}>
            <div><img style={{ width: "100%" }} src={props.item.image} alt='Product'/></div>
            <div style={{ margin: '20px' }}>
                <ProdTextContainer>
                    <div>
                        <span style={{ fontWeight: 'bold' }}> {props.item.description} </span>
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>Price</span>: ${props.item.price} 
                    </div>
                    <div>
                        <span style={{ fontWeight: 'bold' }}>Rating</span>: {props.item.rating} 
                    </div>
                </ProdTextContainer>
            </div>
        </ProdCard>
    )
}