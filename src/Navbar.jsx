import { useState } from "react";
import { Link } from "react-router-dom";
import gdg from "./images/GDGlogo.svg";
import menu from "./images/liste.png";
import { motion } from "framer-motion";
function Navbar(){
    let [show,setshow]=useState(false);
    function handleclick(){
        setshow(!show);
    }
    return <> <nav>
    <img src={gdg} alt="" className="gdglogo"/>
    <ul>
    <Link to="/" className="link"> Home </Link>
    <Link to="/about" className="link"> about </Link>
    <Link to="/club" className="link"> club </Link>
    <Link to="/speakers" className="link"> speakers </Link>
    <Link to="/agenda" className="link"> agenda </Link>
    </ul>
    <img src={menu} className="menu" alt="" onClick={()=>{handleclick()}} />
</nav>
{show &&  <motion.div
    className="box"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
    }}
    style={{
        position:"absolute",
        zIndex:"3"
    }}
    ><div style={{
    height:"730px",
    width:"350px",
    margin:"auto",
    background:"#FFC500",
    position:"absolute",
    zIndex:"4",
    left:"20px",
    borderRadius:"20px",
}}>
    <Link to="/" className="link2" onClick={()=>{handleclick()}}> Home </Link>
    <Link to="/about" className="link2" onClick={()=>{handleclick()}}> about </Link>
    <Link to="/club" className="link2" onClick={()=>{handleclick()}}> club </Link>
    <Link to="/speakers" className="link2" onClick={()=>{handleclick()}}> speakers </Link>
    <Link to="/agenda" className="link2" onClick={()=>{handleclick()}}> agenda </Link>
</div></motion.div>}
</>
}
export default Navbar;
