
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
 const navigate= useNavigate()
  let auth=localStorage.getItem("user");
  let logout=()=>{
    localStorage.clear();
    navigate("/signup");
  }
  return (
    <nav>
      {auth?<ul className="list">
<li><Link to="/">Products</Link></li>
<li><Link to="/add">Add Products</Link></li>
<li><Link to="/signup" onClick={logout}>Logout</Link></li>
</ul>:<ul class="list">
<li><Link to="/signup">Signup</Link></li>
<li><Link to="/signin">Signin</Link></li>
</ul>
}
    </nav>
  )
}

export default Navbar
