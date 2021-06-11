import './header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React and Node</span>
        <span className="headerTitleLg">Dave's Blog</span>
      </div>
      <img src="/images/home.jpg" alt="" className="headerImg" />
    </div>
  )
}
