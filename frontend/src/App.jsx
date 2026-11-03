import { Routes,Route } from "react-router-dom"
import Products from "./pages/Products"
import AddProducts from "./pages/AddProducts"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import {ToastContainer} from 'react-toastify'
import PrivateComponent from "./components/PrivateComponent"
import UpdateProduct from "./pages/UpdateProduct"
import VerifyEmail from "./pages/VerifyEmail"
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Products/>}/>
        <Route path="/add" element={<AddProducts/>}/>
        <Route path="/edit/:id" element={<UpdateProduct/>}/>
        </Route>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/verifyemail" element={<VerifyEmail/>}/>
      </Routes>
      <ToastContainer position="top-right"/>
    </div>
  )
}

export default App
