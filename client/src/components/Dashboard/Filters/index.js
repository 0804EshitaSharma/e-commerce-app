import FilterCard from "./filterCard"
import { filters } from "./filterLists";

export default function Filters(props) {
    const categories= props.categories // [{ id, checked, label }]

    return (
        <div className="flexbox-container">
            <div>
                {/* {filters.list.map((filter) => <FilterCard key={filter.name} filter={filter}/>)
                } */}
                <FilterCard name='Categories' filter={categories} changeChecked={props.changeChecked}/>
            </div>

        </div>
    )
}