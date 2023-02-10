

function CardSpeaker(props){
return <div  className="speakercard">
 <div  className="flexspeaker">
<img src={props.image} alt="" style={{
    height:"9em",
    margin:"1em",
    borderRadius:"10%"
}}/>
<div>
    <p className="speakername">{props.name}</p>
    <p className="speakeroccupation">{props.occupation}</p>
</div>
</div>
    <p className="workshoptitle">workshop details</p>
    <p className="workshopdesc">{props.desc}</p>
</div>
}
export default CardSpeaker;