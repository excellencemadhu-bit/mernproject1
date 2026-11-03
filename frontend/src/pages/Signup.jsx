import { useState } from "react"
import {api} from "../components/api"
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
function Signup() {
 let [name,setName]= useState("")
 let [email,setEmail]= useState("")
 let [password,setPassword]= useState("")

 let navigate=useNavigate();
 let handleSignup=async(e)=>{
  e.preventDefault();
  try{
 let {data,status}=await api.post("/user/signup",{name,email,password})
// console.log(res)
toast.success(data.message,{autoClose:1000})
if(status==200)
{
//   setTimeout(()=>{
// navigate("/signin")
//   },1500)

 setTimeout(()=>{
navigate("/verifyemail")
  },1500)
}

  }
  catch(err)
  {
    // console.log(err.response)
   toast.error(err.response?.data?.message||"server error")
  }
 }
  return (
    <div>
   <h1>Signup page</h1> 
   <form onSubmit={handleSignup}>
    <input type="text" name="" id="" placeholder="Enter name"  value={name} onChange={(e)=>setName(e.target.value)}/>
    <br /><br />
    <input type="email" name="" id="" placeholder="Enter Email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br /><br />
    <input type="password" name="" id="" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <br /><br />
<input type="submit" value="Signup" />
    </form>  
    </div>
  )
}

export default Signup
