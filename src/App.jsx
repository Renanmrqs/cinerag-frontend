import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import Register from "./pages/Register"
import User from "./pages/User"
import Button from "./components/Button/Button"
import Login from "./pages/Login"
import GoogleCallback from "./pages/GoogleCallback"
import GoogleComplete from "./pages/GoogleComplete"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/auth/google/callback" element={<GoogleCallback/>}/>
        <Route path="/auth/google/complete" element={<GoogleComplete/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
