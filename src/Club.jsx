import DetailsBloc from "./DetailsBloc"
import monument from "./images/monumentmartyrs.png"
import gdgchar1 from "./images/gdgchar.png"
import gdgchar2 from "./images/gdgchar2.png"
import octocat from "./images/octocatwalk.gif"
import android from "./images/FINALandroid.gif"
import { useState, useEffect } from 'react';
function Club(){
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
useEffect(() => {
    const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
    window.removeEventListener('resize', handleWindowResize);
    };
});
    return <div>
        <div style={{
            display:"flex",
        }}>
        {windowWidth>500 && <DetailsBloc title="GDG Algiers" class="club" text="GDG Algiers is a local community located at the National Higher School of Computer Science, Algiers, Algeria.It is part of the big global community of developers 'Google Developers Group' (960 communities worldwide)"/>}
        {windowWidth>500 && <DetailsBloc title="WTM Algiers" class="club" fullwidth="500" textwidth="400" text="WTM is a program aimed at increasing female representation in STEM fields.WTM Algiers provides resources and support for women in technology through its ambassadors based at the Higher School of Computer Science Algiers"/>}
        </div>
        {windowWidth<=500 && <DetailsBloc title="GDG&WTM Algiers" class="club" fullwidth="500" textwidth="400" text="GDG Algiers is a local community located at the National Higher School of Computer Science, Algiers, Algeria.It is part of the big global community of developers 'Google Developers Group' (960 communities worldwide)"/> }
        <img src={monument} className="monument" alt="" />
        <img src={gdgchar1} className="gdgchar1" alt="" />
        <img src={gdgchar2} className="gdgchar2" alt="" />
        {/*<img src={gdg} alt="" 
        style={{
            position:"absolute",
            bottom:"190px",
            scale:"1.4",
            right:"200px"
        }} className="gdglogopxl"/>*/}
        <img src={octocat} alt="" className="octocat"/>
        <img src={android} alt="" className="android" style={{
            position:"absolute",
            top:"130px",
            height:"120px",
            rotate:"90deg"
        }}/>
    </div>
}
export default Club