import DetailsBloc from "./DetailsBloc"
import img from "./images/sds.png"
import diamond from "./images/diamond.svg"
import star from "./images/star.svg"
import arcade from "./images/gamearcade.png"
import sword from "./images/sword.svg"
import dash from "./images/FINALdash.gif"
import flame from "./images/FINALflame.gif"
function About(){
    return<div className="aboutdiv">
        <DetailsBloc title="What's GameFest ?" class="about" fullwidth="600" textwidth="500" text="GameFest is an annual game development hackathon, hosted by GDG algiers (in collaboration with WTM algiers).
Throughout the 3 days of the hackathon, Participants who came from different corners on the national scope, will explore the excellent experience of working hardly and efficiently in teams in order to improveme in their development performance." />
        <img src={img} alt=""
        className="gamefestdetails"/>
        <img src={diamond} alt="" className="diamond" style={{
            height:"100px",
            position:"absolute",
            right:"150px",
            bottom:"120px",
        }}/>
        <img src={diamond} alt="" className="diamond" style={{
            height:"100px",
            position:"absolute",
            right:"350px",
            top:"120px",
        }}/>
        <img src={star} alt="" className="star" style={{
            scale:"3",
            position:"absolute",
            right:"300px",
            bottom:"80px",
        }}/>
        <img src={arcade} className="arcade" alt="" style={{
            height:"150px",
            position:"absolute",
            bottom:"28px",
            right:"450px"
        }}/>
        <img src={sword} className="sword" alt="" style={{
            height:"100px",
            position:"absolute",
            right:"150px",
            top:"120px",
            scale:"4",
            rotate:"260deg"
        }}/>
        <img src={dash} className="dash" alt=""/>
        <img className="flame" src={flame} alt=""/>
    </div>
}
export default About