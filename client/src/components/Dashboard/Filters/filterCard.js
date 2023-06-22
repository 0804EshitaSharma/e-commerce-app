import { FilterCardContainer } from "../../Styles/FilterCard.styled"
import Filter from "./filter"

export default function FilterCard(props) {
    return (
        <FilterCardContainer key={props.filter.name}>
            <h4 style={{ fontWeight: 'bold' }}>{props.filter.name}</h4>
            {props.filter.category.map((cat) => (<Filter key={cat} name={cat} />))}
        </FilterCardContainer>
    )
}