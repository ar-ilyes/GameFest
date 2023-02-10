import { useState } from "react"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { motion , AnimatePresence } from "framer-motion";
import CardSpeaker from "./CardSpeaker"
import speaker1 from "./images/speaker1.jpg"
import speaker2 from "./images/speaker2.jpg"
import speaker3 from "./images/speaker3.png"
import speaker4 from "./images/speaker4.png"
import diamond from "./images/diamond.svg"
import star from "./images/star.svg"
import sword from "./images/sword.svg"
import controller from "./images/controlleer1.png"
import linux from "./images/linux.gif"
import './Speakers.css';

function Speakers(){
    let [index,setindex]=useState(0);
    let listofspeakers=[
        {
            key:"0",
            image:speaker1,
            name:"Tutaleni longa",
            occupation:"events Founder of tura life entertainement And co-founder of Edu-game namibia",
            desc:"Explore the current state and future potential of the game development industry in Africa, examining challenges and opportunities"
        },
        {
            key:"1",
            image:speaker2,
            name:"Siffedine haddar",
            occupation:"Jana games founder an algerian game dev studio ",
            desc:"Understand the complexities and potential of the Algerian game development industry and identifying growth opportunities."
        },
        {
            key:"2",
            image:speaker3,
            name:"Lyes belhocine",
            occupation:"General Manager and Producer, Theme Parks Unit at Moment Factory ",
            desc:"Discover how to engage and motivate people through play, unlocking the potential of gamification in various industries and fields"
        },
        {
            key:"3",
            image:speaker4,
            name:"Sidahmed rekik",
            occupation:"VR/AR engineer at V-cult Co-founder of green side studio",
            desc:"Learn how to integrate augmented and virtual reality into your game design, creating immersive experiences and advancing the industry."
        },
    ]
    function handleclick1(){
        let newindex=index-1;
        if(newindex<0){
            newindex=3;
        }
        setindex(newindex);
    }
    function handleclick2(){
        let newindex=index+1;
        if(newindex>3){
            newindex=0;
        }
        setindex(newindex);
    }
    return <div>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="nav-btn right" onClick={() =>{handleclick1()}}><AiFillCaretRight/></motion.button>
        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="nav-btn left" onClick={() =>{handleclick2()}}><AiFillCaretLeft/></motion.button>
        <AnimatePresence initial={false}>
        <CardSpeaker image={listofspeakers[index].image} name={listofspeakers[index].name} occupation={listofspeakers[index].occupation} desc={listofspeakers[index].desc} />
        </AnimatePresence>
        {/*<div className="sliderbtn" onClick={()=>{handleclick1()}}></div>
        <div className="sliderbtn" onClick={()=>{handleclick2()}}></div>*/}
        <img src={star} alt="" style={{
            height:"38em",
            position:"absolute",
            bottom:"10em",
        }} className="star" />
        <img src={diamond} alt="" style={{
            height:"10em",
            position:"absolute",
            top:"3em",
            left:"6em"
        }} className="diamond" />
        <img src={sword} alt="" style={{
            height:"34em",
            position:"absolute",
            top:"11em",
            left:"-7em"
        }} className="sword"/>
        <img src={controller} alt="" style={{
            height:"50px",
            position:"absolute",
            right:"12em",
            bottom:"6em"
        }} className="diamond"/>
        <img src={linux} alt="" style={{
            position:"fixed",
            height:"70px",
            bottom:"25px",
            left:"300px"
        }} />
    </div>
}
export default Speakers