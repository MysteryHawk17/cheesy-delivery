import Navbar from "./components/Navbar/Navbar";
import './app.css'
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import { BrowserRouter, Navigate, redirect, useNavigate  } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";

function App() {
  
  const logininfo=localStorage.getItem('logininfo')
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/cart"  element={logininfo ? <Cart/> :<Navigate to='/login'/>}/>
      <Route path='/login' element={logininfo ? <Navigate to="/" /> : <Login />} />
      <Route path='/register' element={logininfo ? <Navigate to="/" /> : <Register />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
