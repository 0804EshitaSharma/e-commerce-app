import FilterCard from "./filterCard"
import { filters } from "./filterLists";

export default function Filters(props) {
    // props.categories: [{ id, checked, label }]
    return (
        <div className="flexbox-container">
            <div>
                {/* {filters.list.map((filter) => <FilterCard key={filter.name} filter={filter}/>)
                } */}
                <FilterCard key='Categories' name='Categories' filter={props.categories} changeChecked={props.changeCategory}/>
                <FilterCard key='Prices' name='Prices' filter={props.prices} changeChecked={props.changePrice}/>
                <FilterCard key='Ratings' name='Ratings' filter={props.ratings} changeChecked={props.changeRating}/>
            </div>

        </div>
    )
}