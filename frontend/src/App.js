import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/*pagina principal */}
        <Route path="/Login" element={<Login />} /> {/* Login */}
        <Route path="/Register" element={<Register />} /> {/* Register */}
        <Route path="/Products" element={ <Products />} /> {/* Products */}
      </Routes>
    </Router>
  ) 
}

export default App;
