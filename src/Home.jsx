import img from "./images/sds.png"
import { motion } from "framer-motion"
// import animationData from './lotties/mario';
import Characters from "./Characters";
/* import diamond from "./images/diamond.svg"
import thunder from "./images/thunder.svg"
import star from "./images/star.svg"
import sword from "./images/sword.svg" */
function Home(){
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //     preserveAspectRatio: "xMidYMid slice"
    //     }
    // };
        return<div> 
        <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
        },
        scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
        }
        }}> 
    <img src={img} alt="hero" className="gamefest"></img>
    {/*<img src={sword} alt="" className="sword"/>
    <img src={star} alt="" className="star"/>
    <img src={diamond} alt="" className="diamond"/>*/}
    </motion.div>
    <motion.div
    className="button"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
    <p style={{fontSize:20}}>register</p>
    </motion.div>
    <Characters/>
    </div>
}
export default Home;