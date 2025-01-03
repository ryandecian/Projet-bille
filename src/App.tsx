import { Outlet } from "react-router-dom";
import NavRoot from "./components/NavRoot/NavRoot";
import "./App.css"

function App() {
  return (
    <div className="App">
    <NavRoot />
    <Outlet />
    </div>
  )
}

export default App;
