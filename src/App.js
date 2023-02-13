// import logo from "./logo.svg";
import "./App.css";
import { Top } from "./components/Top";
import { GardenC } from "./components/GardenC";
import { Blackjack } from "./components/Blackjack";
import { MyTunes } from "./components/MyTunes";
import { Journeyal } from "./components/Journeyal";
// import { Middle } from "./components/Middle";
// import { Bottom } from "./components/Bottom";

function App() {
  return (
    <div className="main">
      <Top />
      <div className="projects">
        <h1>Projects</h1>
      </div>
      <Journeyal />
      <Blackjack />
      <MyTunes />
      <GardenC />

      {/* <Middle /> */}
      {/* <Bottom /> */}
    </div>
  );
}

export default App;
