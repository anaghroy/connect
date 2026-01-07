import logo from "../assets/images/logo.png"
import NavbarToggle from "./NavbarToggle"

const Navbar = () => {
  return (
    <nav className='main-navbar'>
      {/** LOGO */}
      <div className="svg-logo">
        <img src={logo} alt="logo" />
        <h1>Connect</h1>
      </div>
      {/** sections */}
      <div className="hero-section">
        <a href="#">Find freelancers</a>
        <a href="#">Find jobs</a>
        <a href="#">About</a>
        <a href="#">Solutions</a>
      </div>
      <NavbarToggle/> {/*Buttons*/}
    </nav>
  )
}

export default Navbar
