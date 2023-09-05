import { useSelector } from "react-redux";
import "./App.css";
import Homepage from "./Homepage";
import Authentication from "./authentication/Authentication";

function App() {
  

  return (
    <div className="app">
      {/*<Homepage />*/}

      <Authentication />
    </div>
  );
}

export default App;
