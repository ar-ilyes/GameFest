import naruto from "./images/naruto.gif"
import luffy from "./images/luffy.gif"
import itachi from "./images/itachi.gif"
import sasuke from "./images/sasuke.gif"
import yoshi from "./images/yoshi.gif"
import luigimario from "./images/mario_luigi.gif"
import amongus2 from "./images/amongus2.gif"
import streetfighter1 from "./images/streetfighter.gif"
import streetfighter2 from "./images/streetfighter2.gif"
import streetfighter3 from "./images/streetfighter3.gif"
import zelda from "./images/zelda.gif"
import megaman from "./images/megman.gif"
import enemy from "./images/metalslugenemyfly.gif"
import amongusrb from "./images/amongusrb.gif"
import metalslugarab from "./images/metalslugarab.gif"
import marco from "./images/marco-metalslug-walker.gif"
import helic from "./images/metalslughelic2.gif"
import tails from "./images/tails.gif"
import sonic from "./images/sonic.gif"
import tailsplane from "./images/tailsplane.gif"
import eggman from "./images/eggman.gif"
import mario from "./images/mario.png"
import luigi from "./images/luigi.png"

function Characters(){
    return <div>
        <img src={tails}v alt="" className="tails" style={{height:"80px",position:"absolute", top:"400px"}}/>
    <div className="chasing" style={{position:"absolute" , top:"100px",display:"flex"}}>
    <img src={tailsplane}v alt="" className="tailsplane" style={{height:"60px",opacity:"0.9"}}/>
    <img src={eggman} alt="" className="eggman" style={{height:"150px",opacity:"0.9"}}/>
    </div>
    <img src={helic} alt="" className="helic" />
    <img src={enemy} alt="" className="enemy" />
    <img src={sonic} alt="" className="sonic"/>
    <img src={amongus2} alt="" className="amongus2"/>
    <img src={amongusrb} alt="" className="amongusrb"/>
    <img src={mario} alt="mario" className="mario"/>
    <img src={luigi} alt="luigi" className="luigi"/>
    <img src={metalslugarab} alt="metalslugarab" className="metalslugarab"/>
    <img src={marco} alt="" className="marco"/>
    <img src={megaman} alt="" className="megaman" />
    <img src={streetfighter1} alt="" className="streetfighter1" />
    <img src={streetfighter2} alt="" className="streetfighter2" />
    <img src={streetfighter3} alt="" className="streetfighter3" />
    <img src={yoshi} alt="" className="yoshi" />
    <img src={luigimario} alt="" className="luigimario" />
    <img src={zelda} alt="" className="zelda" />
    <img src={naruto} alt="" className="naruto" />
    <img src={luffy} alt="" className="luffy" />
    <img src={itachi} alt="" className="itachi" />
    <img src={sasuke} alt="" className="sasuke" />
    {/*<img src={lamppost} alt="" style={{height:"200px",position:"absolute",bottom:"25px",right:"50px",zIndex:"-1"}} />
    <img src={tree} alt="" style={{height:"450px",position:"absolute",bottom:"-7em",left:"-4em", zIndex:"-1"}} />*/}
    {/*<img src={grass} alt="" className="grass" />*/}
    </div>
}
export default Characters