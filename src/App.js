import "./App.css";
import Headernav from "./component/Headernav";
import Tailnav from "./component/Tailnav";
import Picslider from "./component/Picslider";
import Slider from "./component/Slider";
import Scrollslidefirst from "./component/Scrollslidefirst";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Headernav /> 
      <Tailnav />
      <Picslider />
      <Slider />
      <Scrollslidefirst />
    </Fragment>
      
  
  );
}

export default App;
