import FilterCard from "./filterCard"

const filters = {
    list: [
        {
            name: "Category",
            category: [
                "Home",
                "Electronics",
                "Books",
                "Fashion"
            ]
        },
        {
            name: "Price",
            category: [
                "Under $25",
                "$25 ~ $50",
                "$50 ~ $100",
                "$100 ~ $200",
                "Above $200"
            ]
        },
        {
            name: "Rating",
            category: [
                "Above 4",
                "3 ~ 4",
                "2 ~ 3",
                "1 ~ 2",
                "Below 1"
            ]
        }
    ]
}

export default function Filters() {
    return (
        <div className="flexbox-container">
            <h2>Filters</h2>
            <div>
                {filters.list.map((filter) => <FilterCard filter={filter}/>)
                }
            </div>

        </div>
    )
}