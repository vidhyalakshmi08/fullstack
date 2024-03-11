import { Navigate,useNavigate, Route, Routes } from "react-router-dom"
import { lazy,useState,useEffect } from "react"
import LazyLayout from "./components/ui/LazyLayout"
import UserLayout from "./pages/user/UserLayout"
import AdminLayout from "./pages/admin/AdminLayout"
import Mainhome from "./pages/auth/Mainhome"
const LazyCheckout =lazy(()=> import("./pages/user/Checkout"))
const LazyLogin = lazy(() => import("./pages/auth/Login"))
const LazyReg = lazy(() => import("./pages/auth/SignUp"))
const LazyHome = lazy(() => import("./pages/user/Home"))
const LazyAbout = lazy(() => import("./pages/user/About"))
const Lazyprofile = lazy(() => import("./pages/user/Profile"))
const Lazydashb = lazy(() => import("./pages/admin/Dashboard"))
const Lazyadd = lazy(() => import("./pages/admin/Theme"))
const Lazyuser = lazy(() => import("./pages/admin/UserInfo"))
const Lazypage=lazy(()=>import("./pages/user/Placed"));
import Shop from "./pages/user/Shop"; // Import Shop component
import CartPage from "./pages/user/CartPage";
const Adminroutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<LazyLayout component={Lazydashb} />} />
        <Route path="/add" element={<LazyLayout component={Lazyadd} />} />
        <Route path="/userinfo" element={<LazyLayout component={Lazyuser} />} />
      </Routes>
    </AdminLayout>
  )
}
function App() {
  
  // const navigate = useNavigate();
  // //create an usestate called as login_status
  // const [loginStatus, setLoginStatus] = useState(true);
  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   if (!token) {
  //     // No token found,set the setLoginStatus to false
  //     setLoginStatus(false);
  //   } else {
  //     // Token found, check if it's expired
  //     const tokenExpiration = sessionStorage.getItem("tokenExpiration");
  //     if (tokenExpiration && Date.now() > tokenExpiration) {
  //       setLoginStatus(false);
  //     } else {
  //       setLoginStatus(true);
  //     }
  //   }
  // }, [navigate]);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/mainhome" />} />
        <Route path="/mainhome" element={<Mainhome/>}/>
        <Route path="/app-project/login" element={<LazyLayout component={LazyLogin} />} />
        <Route path="/app-project/signup" element={<LazyLayout component={LazyReg} />} />
        <Route path="/app-project/user/*" element={<Userroutes/>} />
        <Route path="/app-project/admin/*" element={<Adminroutes/>} />
      </Routes>

    </div>
  )
}
const Userroutes = () => {
 
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/about" element={<LazyLayout component={LazyAbout} />} />
        <Route path="/shop" element={<Shop/>} />
        <Route
          path="/cart"
          element={<CartPage/>}
        />
        <Route path="/checkout" element={<LazyLayout component={LazyCheckout}/>} />
        <Route path="/success" element={<LazyLayout component={Lazypage}/>} />
        <Route path="/profile" element={<LazyLayout component={Lazyprofile} />} />
      </Routes>
    </UserLayout>
  );


}

export default App