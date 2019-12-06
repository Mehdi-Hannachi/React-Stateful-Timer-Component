import React from "react";
import "./App.css";
import "./Components/Time.css";
import Timer from "./Components/Time";
import Icon from "./Components/icon.JPG"
import Ic from "./Components/ic.JPG"

function App() {
  return (

    <div className="telephone">
<img src={Ic} className="ic"  alt="icon"/>

<Timer/>
<img src={Icon} className="icon" alt="ic"/>

    </div>
  
   
  );
}
export default App;
