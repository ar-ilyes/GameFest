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
    let classnom1="detailsbloc"+props.class;
    let classnom2="detailsblocp"+props.class;
    return <div>
        <div className={`detailsbloc + ${classnom1}`} >
            <p className="detailsbloctitle">{props.title}</p>
            <p className={classnom2}>{show}</p>
        </div>
    </div>
}
export default DetailsBloc