import DetailsBloc from "./DetailsBloc"
import monument from "./images/monumentmartyrs.png"
import gdgchar1 from "./images/gdgchar.png"
import gdgchar2 from "./images/gdgchar2.png"
import gdg from "./images/gdgpixel.png"
import octocat from "./images/octocatwalk.gif"
function Club(){
    return <div>
        <div style={{
            display:"flex",
        }}>
        <DetailsBloc title="GDG Algiers" fullwidth="500" textwidth="400" text="GDG Algiers is a local community located at the National Higher School of Computer Science, Algiers, Algeria.It is part of the big global community of developers 'Google Developers Group' (960 communities worldwide)"/>
        <DetailsBloc title="WTM Algiers" fullwidth="500" textwidth="400" text="GDG Algiers is a local community located at the National Higher School of Computer Science, Algiers, Algeria.It is part of the big global community of developers 'Google Developers Group' (960 communities worldwide)"/>
        </div>
        <img src={monument} alt="" style={{
            position:"absolute",
            bottom:"60px",
            scale:"1.8",
            zIndex:"-2",
            left:"567px"
        }} />
        <img src={gdgchar1} alt="" style={{
            position:"absolute",
            bottom:"-5px",
            left:"210px",
            scale:"0.7"
        }} />
        <img src={gdgchar2} alt="" style={{
            position:"absolute",
            bottom:"-5px",
            right:"190px",
            scale:"0.85"
        }} />
        {/*<img src={gdg} alt="" 
        style={{
            position:"absolute",
            bottom:"190px",
            scale:"1.4",
            right:"200px"
        }} className="gdglogopxl"/>*/}
        <img src={octocat} alt="" className="octocat"/>
    </div>
}
export default Club