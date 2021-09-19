import { useState } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";

const s1 = {
border: "1px solid violet ",
width: "800px",
boxShadow: "2px 3px 5px black",
color: "green",
margin: "auto",
textAlign: "center",
textShadow: "1px 1px 2px blue, 1px 2px 1px yellow",
boxsizing: "borderbox",
};
const s2 = {
margin: 20,
variant: "outlined",
color: "purple",border: '1px solid violet'
};
const agentstyle={
display: 'inline-block',padding: 20
}
const weaponstyle={
display:'inline-block',padding:20
}
const dsty={
float: 'left',marginLeft: 15,backgroundColor: 'lightgray',padding: 20
}
const Disp_Agent = ({ agents }) => {
if (agents !== null) {
return (
<div style={agentstyle}>
<div style={dsty}><img src={agents.data[1].displayIcon} alt="Avator" width="100"
/>
<p> {agents.data[1].displayName} </p></div>
<div style={dsty}><img src={agents.data[2].displayIcon} alt="Avator" width="100"
/>
<p> {agents.data[2].displayName} </p></div>
<div style={dsty}><img src={agents.data[3].displayIcon} alt="Avator" width="100"
/>
<p> {agents.data[3].displayName} </p></div>
<div style={dsty}><img src={agents.data[4].displayIcon} alt="Avator" width="100"
/>
<p> {agents.data[4].displayName} </p></div>
</div>
);
} else {
return (
<div>
<p>click Agent button to fetch the data and display </p>
</div>
);
}
};
const Disp_Weapons = ({ weapons }) => {
if (weapons !== null) {
return (
<div style={weaponstyle}>
<div style={dsty}><img src={weapons.data[1].displayIcon} alt="Weapons" width="100"/>
<p> {weapons.data[1].displayName} </p></div>
<div style={dsty}><img src={weapons.data[2].displayIcon} alt="Weapons" width="100"/>
<p> {weapons.data[2].displayName} </p></div>
<div style={dsty}><img src={weapons.data[3].displayIcon} alt="Weapons" width="100"/>
<p> {weapons.data[3].displayName} </p></div>
<div style={dsty}><img src={weapons.data[4].displayIcon} alt="Weapons" width="100"/>
<p> {weapons.data[4].displayName} </p></div>
</div>
);
} else {
return (
<div>
<p>click Weapon button to fetch the data and display </p>
</div>
);
}
};
const Skill4=()=> {
const [nav, setNav] = useState("");
const [agents, setAgents] = useState(null);
const [weapons, setWeapons] = useState(null);
const changeView = (val) => {
setNav(val);
};
const getAgents = () => {
axios.get('https://valorant-api.com/v1/agents').then((res) => {
setAgents(res.data)
})
};
const getWeapons = () => {
axios.get('https://valorant-api.com/v1/weapons').then((res) => {
setWeapons(res.data);
});
};
if (nav === "Agents") {
getAgents();
} else if (nav === "Wepones") {
getWeapons();
}
return (
<div style={s1}>
<div>
<Button style={s2} onClick={() => changeView("Agents")}>
Agents
</Button>
<Button style={s2} onClick={() => changeView("Wepones")}>
Weapones
</Button>
</div>
<p> welcome to API Data Fetching </p>
<Disp_Agent agents={agents} />
<Disp_Weapons weapons={weapons} />
</div>
);
};           
export default Skill4