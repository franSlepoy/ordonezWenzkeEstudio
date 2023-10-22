import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Descripcion from "./components/pages/descripcion/Descripcion";
import NavBar from "./components/commond/navBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/description' element={<Descripcion/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
