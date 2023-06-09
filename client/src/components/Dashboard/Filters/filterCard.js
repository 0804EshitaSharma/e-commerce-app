import { FilterCardContainer } from "../../Styles/FilterCard.styled"
import Filter from "./filter"

export default function FilterCard(props) {
    return (
        <FilterCardContainer key={props.name}>
            <h4 style={{ fontWeight: 'bold' }}>{props.name}</h4>
            {/* cat = { id, checked, label } */}
            {props.filter.map((cat) => (<Filter key={cat.id} category={cat} changeChecked={props.changeChecked}/>))}
        </FilterCardContainer>
    )
}