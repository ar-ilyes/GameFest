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
    return <div>
        <div className="detailsBloc">
            <p style={{
                fontSize: "30px",
                color: "#000083",
                textDecoration:"underline"
            }}>{props.title}</p>
            <p
            style={{
                width:"500px",
                margin:"20px 50px"
            }}
            >{show}</p>
        </div>
    </div>
}
export default DetailsBloc