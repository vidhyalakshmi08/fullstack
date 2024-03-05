import { Navigate, Route, Routes } from "react-router-dom"
import { lazy,useState } from "react"
import LazyLayout from "./components/ui/LazyLayout"
import UserLayout from "./pages/user/UserLayout"
import AdminLayout from "./pages/admin/AdminLayout"
import Mainhome from "./pages/auth/Mainhome"
const LazyLogin = lazy(() => import("./pages/auth/Login"))
const LazyReg = lazy(() => import("./pages/auth/SignUp"))
const LazyHome = lazy(() => import("./pages/user/Home"))
const LazyAbout = lazy(() => import("./pages/user/About"))
// const Lazyshop = lazy(() => import("./pages/user/Shop"))
// const Lazycart = lazy(() => import("./pages/user/CartPage"))
const Lazywish = lazy(() => import("./pages/user/WishlistPage"))
const Lazyprofile = lazy(() => import("./pages/user/Profile"))
const Lazycontact = lazy(() => import("./pages/user/Contact"))
const Lazydashb = lazy(() => import("./pages/admin/Dashboard"))
const Lazyadd = lazy(() => import("./pages/admin/Theme"))
const Lazyuser = lazy(() => import("./pages/admin/UserInfo"))
const LazyInbox = lazy(() => import("./pages/admin/Inbox"))
import Shop from "./pages/user/Shop"; // Import Shop component
import CartPage from "./pages/user/CartPage";
const Adminroutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<LazyLayout component={Lazydashb} />} />
        <Route path="/add" element={<LazyLayout component={Lazyadd} />} />
        <Route path="/inbox" element={<LazyLayout component={LazyInbox} />} />
        <Route path="/userinfo" element={<LazyLayout component={Lazyuser} />} />
      </Routes>
    </AdminLayout>
  )
}
function App() {
  const [cart, setCart] = useState([]);
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(product => product.id !== productToRemove.id);
    setCart(updatedCart);
  };
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/mainhome" />} />
        <Route path="/mainhome" element={<Mainhome/>}/>
        <Route path="/app-project/login" element={<LazyLayout component={LazyLogin} />} />
        <Route path="/app-project/signup" element={<LazyLayout component={LazyReg} />} />
        <Route path="/app-project/user/*" element={<Userroutes cart={cart} setCart={setCart} removeFromCart={removeFromCart} />} />
        <Route path="/app-project/admin/*" element={<Adminroutes/>} />
      </Routes>

    </div>
  )
}
const Userroutes = ({cart,setCart,removeFromCart}) => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/about" element={<LazyLayout component={LazyAbout} />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart}/>}/>
        <Route path="/wishlist" element={<LazyLayout component={Lazywish} />} />
        <Route path="/profile" element={<LazyLayout component={Lazyprofile} />} />
        <Route path="/contact" element={<LazyLayout component={Lazycontact} />} />
      </Routes>
    </UserLayout>
  )
}

export default App