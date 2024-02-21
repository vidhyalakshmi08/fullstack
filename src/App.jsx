import {Navigate, Route,Routes} from "react-router-dom"
import { lazy } from "react"
import LazyLayout from "./components/ui/LazyLayout"
import UserLayout from "./pages/user/UserLayout"
import Navbar from "./components/ui/Navbar"
const LazyLogin=lazy(()=>import("./pages/auth/Login"))
const LazyReg=lazy(()=>import("./pages/auth/SignUp"))
const LazyHome=lazy(()=>import("./pages/user/Home"))
const LazyAbout=lazy(()=>import("./pages/user/About"))

const Userroutes=()=>{
  return(
    <UserLayout>
    <Routes>
    <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
    <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
    </Routes>
    </UserLayout>
  )
}
function App() {
  return (
    <div>
    {/* <Navbar/> */}
    <Routes>
      <Route exact path="/" element={<Navigate to="/app-project/login"/>}/>
      <Route path="/app-project/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path="/app-project/signup" element={<LazyLayout component={LazyReg}/>}/>
      <Route path="/app-project/user/*" element={<Userroutes/>}/>
    </Routes>

    </div>
  )
}

export default App
