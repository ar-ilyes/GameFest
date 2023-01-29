import DetailsBloc from "./DetailsBloc"
import monument from "./images/monument.png"
import gdgchar1 from "./images/gdgchar.png"
import gdgchar2 from "./images/gdgchar2.png"
import gdg from "./images/gdgpixel.png"
import octocat from "./images/octocatwalk.gif"
function Club(){
    return <div>
        <DetailsBloc title="GDG & WTM Algiers" text="GDG Algiers is a local community located at the National Higher School of Computer Science, Algiers, Algeria.It is part of the big global community of developers 'Google Developers Group' (960 communities worldwide) Our community is made up of passionate developers and motivated young students."/>
        <img src={monument} alt="" style={{
            position:"absolute",
            bottom:"50px",
            scale:"1.4"
        }} />
        <img src={gdgchar1} alt="" style={{
            position:"absolute",
            bottom:"-5px",
            right:"250px",
            scale:"0.7"
        }} />
        <img src={gdgchar2} alt="" style={{
            position:"absolute",
            bottom:"-5px",
            right:"100px",
            scale:"0.85"
        }} />
        <img src={gdg} alt="" 
        style={{
            position:"absolute",
            bottom:"200px",
            scale:"1.3",
            right:"200px"
        }} className="gdglogopxl"/>
        <img src={octocat} alt="" className="octocat"/>
    </div>
}
export default Club