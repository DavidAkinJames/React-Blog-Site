import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
         <div className="sidebarItem">
           <span className="sidebarTitle">ABOUT ME</span>
           <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt=""  />
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni quam iure veniam suscipit illo odit porro commodi eaque impedit quo.</p>
         </div>
         <div className="sidebarItem">
         <span className="sidebarTitle">CATEGORIES</span>
         <ul className="sidebarList">
           <li className="sidebarListItem">
             Life
           </li>
           <li className="sidebarListItem">
             Music
           </li>
           <li className="sidebarListItem">
             Style
           </li>
           <li className="sidebarListItem">
             Sports
           </li>
           <li className="sidebarListItem">
             Tech
           </li>
         </ul>
         </div>
         <div className="sidebarItem">
           <span className="sidebarTitle">FOLLOW US</span>
           <div className="sidebarSocial">
           <i className='sidebarIcon  bx bxl-facebook-circle'></i>
       <i className='sidebarIcon bx bxl-twitter'></i>
       <i className='sidebarIcon bx bxl-instagram'></i>
       <i className='sidebarIcon bx bxl-linkedin'></i>
           </div>
         </div>
    </div>
  )
}
