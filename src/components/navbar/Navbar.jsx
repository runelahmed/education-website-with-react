import  './Navbar.css'
import logo from '../../assets/images/cambridge.png';
import {FaUser} from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='navbar container'>
      <div className="navbar_container">
        <div className="logo">
          <a href="#"><img className='logo' src={logo} alt="logo" /></a>
        </div>
        <div className="menu">
      <ul>
        <li><a href="#">Student</a></li>
        <li><a href="#">Admissions</a></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">Open University</a></li>
        <li><a href="#">University</a></li>
      </ul>
        </div>
        <div className="user_icon">
          <div className="search_bar"></div>
        <FaUser/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
