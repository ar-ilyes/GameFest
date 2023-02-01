import { useState } from "react";
function DetailsBloc(props) {
    let [show, setshow] = useState("");
    let [end, setend] = useState(false);
    let i = 0;
    var txt = props.text;
    var speed = 50;
    function typeWriter() {
    if (i < txt.length) {
        setshow((show += txt.charAt(i)));
        i++;
        setTimeout(typeWriter, speed);
    }
    setend(true);
    }
    if (!end) {
    typeWriter();
    }
    let textwidth=props.textwidth + "px";
    let fullwidth=props.fullwidth + "px";
    return <div>
        <div style={{
            height: "450px",
            width: fullwidth,
            backgroundColor: "#FFC500",
            opacity: "0.8",
            margin: "-20px 80px",
            borderRadius:"30px" ,
            fontFamily:"'Bungee Inline', cursive" ,
            position: "relative",
        }}>
            <p style={{
                fontSize: "30px",
                color: "#000083",
                textDecoration:"underline"
            }}>{props.title}</p>
            <p
            style={{
                width:textwidth,
                margin:"10px 30px"
            }}
            >{show}</p>
        </div>
    </div>
}
export default DetailsBloc