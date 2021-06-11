import './login.css'

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        
        <label>Email</label>
        <input type="text" placeholder="Enter your email" className="loginInput" />


        <label>Password</label>
        <input  className="loginInput" type="password" placeholder="Enter your password..." i />


     <button className="loginButton">Login</button>

      </form>

      <button className="loginRegisterBtn">Register</button>
    </div>
  )
}
