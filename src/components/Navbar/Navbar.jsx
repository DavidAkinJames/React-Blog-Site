import './navbar.css'


export default function Navbar() {
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
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
   

       </div>
       <div className="topRight">
         <img className="topImg" src="/images/profile.jpg_medium" alt="profile-pic"/>
         <i className='topSearchIcon bx bx-search'></i>
       </div>
    </div>
  )
}
