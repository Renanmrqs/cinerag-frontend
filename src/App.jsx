import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Favorites from "./pages/Favorites"
import SearchFilms from "./pages/SearchFilms"
import LandingPage from "./pages/LandingPage"
import Register from "./pages/Register"
import User from "./pages/User"
import Button from "./components/Button/Button"
import Login from "./pages/Login"
import GoogleCallback from "./pages/GoogleCallback"
import GoogleComplete from "./pages/GoogleComplete"
import ProtectedRouter from "./routes/ProtectedRouter"
import { useApiService } from "./hooks/useApiService"

function App() {
  
  const {apiLoad, apiOn} = useApiService()
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<ProtectedRouter/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/home" element={<SearchFilms/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/user" element={<User/>}/>
        </Route>
        
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/auth/google/callback" element={<GoogleCallback/>}/>
        <Route path="/auth/google/complete" element={<GoogleComplete/>} />
      
      </Routes>
      {apiLoad? <div className="api-verify status-api">verifying API status <span></span> </div> : apiOn ? <div className="api-on status-api">API On <span></span> </div> : <div className="api-off status-api">Api Off <span></span> </div>}
    </BrowserRouter>
  )
}

export default App
