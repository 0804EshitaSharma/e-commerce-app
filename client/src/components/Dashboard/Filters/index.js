import react from "react";

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

const renderFilter = (filter) => {
    return (
        <div key={filter.name}>
            <h3>{filter.name}</h3>
            {filter.category.map((cat) => (<h4 key={cat}>{cat}</h4>))}
        </div>
    )
    
}

export default function Filters() {
    return (
        <div className="flexbox-container">
            <h2>Filters</h2>
            <div>
                {filters.list.map((filter) => renderFilter(filter))
                }

            {/* {for ( let i = 0; i < filters.list.length; i++) {
                let obj = filters.sparkData[i];
                console.log(obj);
                var crunchifyName;
                var crunchifyValue;
                document.writeln("<td>");
                document.writeln("<table border='0'  width=100 >");
                for ( var key in obj) {
                    crunchifyName = key;
                    crunchifyValue = obj[key].toString();
                    +document.writeln("<tr><td><B>" + crunchifyName
                            + ":  </B></td><td width=50>" + crunchifyValue
                            + "</td></tr>");
                    document.writeln("</table>");
                    document.writeln("</td>");
            }} */}
            </div>

        </div>
    )
}