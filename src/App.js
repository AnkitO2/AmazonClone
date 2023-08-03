import "./App.css";
import Headernav from "./component/Headernav";
import Tailnav from "./component/Tailnav";
import Picslider from "./component/Picslider";
import Slider from "./component/Slider";
import Scrollslidefirst from "./component/Scrollslidefirst";
import Scrollslidesecond from "./component/Scrollslidesecond";
import Tempnav from "./component/Tempnav";

function App() {
  return (
    <div>
      <Headernav />
      <Tailnav />
      <Picslider />
      <Slider />
      <Scrollslidefirst />
      <Scrollslidesecond/>
      <Tempnav/>
   </div>
  );
}

export default App;
