import react from "react";
import './Dashboard.css'
import Filters from "./Filters";

export default function ContentContainer() {
    return (
        <div className="content-container">
            <div className="filter-container">
                <div><Filters /></div>
            </div>
            <div>Item Images</div>
        </div>   
    )
}