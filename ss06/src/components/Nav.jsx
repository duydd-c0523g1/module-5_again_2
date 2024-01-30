import {Link, NavLink} from "react-router-dom";
export default function NavBar() {
    return (
        <>
        <nav>
            <NavLink to="/" className="navItem">Home </NavLink>
            <NavLink to="/add" className="navItem">Add book</NavLink>
        </nav>
        </>
    )
}