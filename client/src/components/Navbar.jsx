import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return <>
    <header>
        <div className="container">
            <div className="logo">
                <NavLink to="/">LOGO</NavLink>
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/"> HOME </NavLink></li>
                    <li><NavLink to="/about"> ABOUT </NavLink></li>
                    <li><NavLink to="/contact"> CONTACT </NavLink></li>
                    <li><NavLink to="/login"> LOGIN </NavLink></li>
                    <li><NavLink to="/registration"> SIGN UP </NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
  </>;
};

export {Navbar};