import React from "react";
import { Nav, NavLink, NavMenu }
    from "./CatNavElements";
 
const CatNavbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Home" >
                        Home
                    </NavLink>
                    <NavLink to="/Electronics">
                        Electronics 
                    </NavLink>
                    <NavLink to="/Books">
                        Books
                    </NavLink>
                    <NavLink to="/Fashion">
                        Fashion 
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default CatNavbar;