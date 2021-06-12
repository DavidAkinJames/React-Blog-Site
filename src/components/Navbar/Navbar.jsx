import { Link } from 'react-router-dom';
import './navbar.css'


export default function Navbar() {
   const user = false;


  return (
    <div className="top">
       <div className="topLeft">
       <i className='topIcon  bx bxl-facebook-circle'></i>
       <i className='topIcon bx bxl-twitter'></i>
       <i className='topIcon bx bxl-instagram'></i>
       <i className='topIcon bx bxl-linkedin'></i>

       </div>
       <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
          <Link className="link"   to="/">Home</Link>

          </li>
          <li className="topListItem">
          <Link className="link"   to="/">About</Link>
          </li>
          <li className="topListItem">
          <Link className="link"   to="/">Contact</Link>
          </li>
          <li className="topListItem">
          <Link className="link"   to="/write">Write</Link>
        
          </li>
          <li className="topListItem">
            {user && "Logout"}
          </li>
        </ul>
   

       </div>
       <div className="topRight">
        {user ? (

          <Link className="link" to="/settings">
             <img className="topImg" src="/images/profile.jpg_medium" alt="profile-pic"/>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>

























 
    </div>
  )
}
