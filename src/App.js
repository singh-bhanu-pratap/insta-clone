import { useSelector } from "react-redux";
import "./App.css";
import Homepage from "./Homepage";
import Authentication from "./authentication/Authentication";

function App() {
  const user = useSelector(state => state.data.user)
  console.log(user);
  

  return (
    <div className="app">
      {/*<Homepage />*/}

      <Authentication />
    </div>
  );
}

export default App;
