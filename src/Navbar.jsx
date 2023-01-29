import { Link } from "react-router-dom";
import gdg from "./images/GDGlogo.svg"
function Navbar(){
    return <nav>
    <img src={gdg} alt="" className="gdglogo"/>
    <ul>
    <Link to="/" className="link"> Home </Link>
    <Link to="/about" className="link"> about </Link>
    <Link to="/club" className="link"> club </Link>
    <Link to="/" className="link"> speakers </Link>
    <Link to="/" className="link"> agenda </Link>
    </ul>
</nav>
}
export default Navbar;
