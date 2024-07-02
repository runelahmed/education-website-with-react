import  './Navbar.css'
import logo from '../../assets/images/logo.jpg'
const Navbar = () => {
  return (
    <nav className='container'>
      <img className='logo' src={logo} alt="logo" />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Programs</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Campus</a></li>
        <li><a href="#">Testimonial</a></li>
        <li><a href="#" className='btn'>Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
