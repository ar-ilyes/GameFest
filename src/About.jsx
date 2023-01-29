import DetailsBloc from "./DetailsBloc"
import img from "./images/sds.png"
import diamond from "./images/diamond.svg"
import star from "./images/star.svg"
import arcade from "./images/gamearcade.png"
import sword from "./images/sword.svg"
import Characters from "./Characters"
function About(){
    return<div style={{
        display:"flex",
    }}>
        <DetailsBloc title="What's GameFest ?" text="GameFest is an annual game development hackathon, hosted by GDG algiers (in collaboration with WTM algiers).
Throughout the 3 days of the hackathon, Participants who came from different corners on the national scope, will explore the excellent experience of working hardly and efficiently in teams in order to improveme in their development performance." />
        <img src={img} alt="" style={{
            height:"200px",
            marginTop:"110px"

        }}
        className="gamefestdetails"/>
        <img src={diamond} alt="" className="diamond" style={{
            height:"100px",
            position:"absolute",
            right:"150px",
            bottom:"100px",
        }}/>
        <img src={diamond} alt="" className="diamond" style={{
            height:"100px",
            position:"absolute",
            right:"350px",
            top:"100px",
        }}/>
        <img src={star} alt="" className="star" style={{
            scale:"3",
            position:"absolute",
            right:"350px",
            bottom:"100px",
        }}/>
        <img src={arcade} alt="" style={{
            height:"150px",
            position:"absolute",
            bottom:"28px",
            right:"450px"
        }}/>
        
    </div>
}
export default About