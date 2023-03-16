import Navbar from "./components/Navbar/Navbar";
import './app.css'
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter  } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/cart"  element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
