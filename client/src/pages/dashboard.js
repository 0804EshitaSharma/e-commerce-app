import React from "react";
import CategoryContainer from "../components/Dashboard/Categories/CategoryContainer";
import ContentContainer from "../components/Dashboard/ContentContainer";
import Navbar from "../components/Navbar/Navbar";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <CategoryContainer />
            <ContentContainer />
        </div>
    )
}

export default Dashboard
