import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import './Agenda.css';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import diamond from "./images/diamond.svg"
import star from "./images/star.svg"
import sword from "./images/sword.svg"
import controller from "./images/controlleer1.png"
import pokemon from "./images/pokemon.gif"
import pacman from "./images/pacman.gif"
import pacghost from "./images/pacghost.gif"
const Agenda = () => {
    const [day, setDay] = useState(0);
    const events = [
      [
        { day: "Thursday, february 8th", time: "17:00", title: "Check-in and Registration"},
        { day: "Thursday, february 8th", time: "18:00", title: "Opening Ceremony"},
        { day: "Thursday, february 8th", time: "21:00", title: "The Power of Gamification"},
        { day: "Thursday, february 8th", time: "21:30", title: "Hacking Sessions" },
      ],
      [
        { day: "Friday, february 9th", time: "09:00", title: "Hacking Sessions"},
        { day: "Friday, february 9th", time: "11:00", title: "Bring AR and VR inside your gaming world"},
        { day: "Friday, february 9th", time: "21:00", title: "Game dev industry in Africa, what future?"},
        { day: "Friday, february 9th", time: "22:00", title: "Hacking Sessions"},
      ],
      [
        { day: "Saturday, february 10th", time: "11:00", title: "Deep Look into the Algerian Dev Ecosystem"},
        { day: "Saturday, february 10th", time: "14:00", title: "Presentations of Solutions"},
        { day: "Saturday, february 10th", time: "16:00", title: "Winner announcement and Prizes"},
        { day: "Saturday, february 10th", time: "17:00", title: "Closing Ceremony and Wrap-Up"},
      ],
    ];
    return( 
      <>
      <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="nav-btn right" onClick={() => setDay(day === 2 ? 0 : day + 1)}><AiFillCaretRight/></motion.button>
      <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="nav-btn left" onClick={() => setDay(day === 0 ? 2 : day - 1)}><AiFillCaretLeft/></motion.button>
      <div className="day-bloc">
      <h3 className="content-bloc">{events[day][0].day}</h3>
      <AnimatePresence initial={false}>
       <div className="list-container">
       <AnimatePresence initial={false}>
        <motion.ul key={day} className="agenda-list" initial="hidden" animate="visible" exit="hidden">
          {events[day].map((event) => (
            <motion.p key={event.title} className="agenda-item" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <div className="item time-item">{event.time}</div>
              <div className="item title-item">{event.title}</div>
            </motion.p>
          ))}
        </motion.ul>
      </AnimatePresence>
       </div>
      </AnimatePresence>
      </div>
      <img src={star} alt="" style={{
            height:"39em",
            position:"absolute",
            bottom:"10em",
            right:"-12em"
        }} className="star" />
        <img src={diamond} alt="" style={{
            height:"10em",
            position:"absolute",
            top:"4em",
            left:"6em"
        }} className="diamond" />
        <img src={sword} alt="" style={{
            height:"34em",
            position:"absolute",
            top:"11em",
            left:"-9em"
        }} className="sword"/>
        <img src={controller} alt="" style={{
            height:"50px",
            position:"absolute",
            right:"10em",
            bottom:"6em"
        }} className="diamond"/>
        <img src={pacghost} alt="" style={{
          position:"fixed",
          top:"110px",
          height:"50px",
          scale:"-1 1"
        }} className="pacghost" />
        <img src={pacman} alt="" style={{
          position:"fixed",
          top:"100px",
          height:"70px",
        }} className="pacman" />
        <img src={pokemon} alt="" style={{
          position:"fixed",
          bottom:"25px",
          height:"80px",
        }} className="pokemon"/>
      </>
     )
}
export default Agenda;