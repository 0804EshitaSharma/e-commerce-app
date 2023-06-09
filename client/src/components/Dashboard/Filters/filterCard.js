import { FilterCardContainer } from "../../Styles/FilterCard.styled"
import Filter from "./filter"

export default function FilterCard(props) {
    return (
        <FilterCardContainer key={props.filter.name}>
            <h3>{props.filter.name}</h3>
            {props.filter.category.map((cat) => (<Filter key={cat} name={cat} />))}
        </FilterCardContainer>
    )
}