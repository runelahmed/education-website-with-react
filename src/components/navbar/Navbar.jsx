import './Navbar.css';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/cambridge.png';
import close from '../../assets/images/close.svg';
import arrowup from '../../assets/images/arrowup-s.svg';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const studentSubMenu = useRef();
  const admissionSubMenu = useRef();
  const researchSubMenu = useRef();
  const openUniversitySubMenu = useRef();
  const universitySubMenu = useRef();
  const userSubMenu = useRef();

  const subMenus = {
    student: studentSubMenu,
    admissions: admissionSubMenu,
    research: researchSubMenu,
    openUniversity: openUniversitySubMenu,
    university: universitySubMenu,
    user: userSubMenu
  };

  const showSubMenu = (menu) => {
    if (openSubMenu && openSubMenu !== menu) {
      subMenus[openSubMenu].current.style.display = 'none';
    }
    subMenus[menu].current.style.display = 'block';
    setOpenSubMenu(menu);
  }

  const hideSubMenu = (menu) => {
    subMenus[menu].current.style.display = 'none';
    setOpenSubMenu(null);
  }

  return (
    <nav className='navbar'>
      <div className="navbar_container">
        <div className="logo">
          <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#" onClick={() => showSubMenu('student')}>Student</a>
              <div className="sub_menu" ref={studentSubMenu} style={{ display: 'none' }}>
                <div className="sub_menu_icon_wrapper">
                  <div><img src={arrowup} alt="" className='up_arrow' /></div>
                  <div><img src={close} onClick={() => hideSubMenu('student')} alt="" /></div>
                </div>
                <div className='sub_menu_wrapper'>
                  <ul>
                    <li><a href="#">Lecture Plan</a></li>
                    <li><a href="#">RULES OF STUDY</a></li>
                    <li><a href="#">Academic calender</a></li>
                    <li><a href="#">Study sessions</a></li>
                    <li><a href="#">scholarships</a></li>
                    <li><a href="#">Erasmus+</a></li>
                    <li><a href="#">RPL</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#" onClick={() => showSubMenu('admissions')}>Admissions</a>
              <div className="sub_menu" ref={admissionSubMenu} style={{ display: 'none' }}>
                <div className="sub_menu_icon_wrapper">
                  <div><img src={arrowup} alt="" className='up_arrow' /></div>
                  <div><img src={close} onClick={() => hideSubMenu('admissions')} alt="" /></div>
                </div>
                <div className='sub_menu_wrapper'>
                  <ul>
                    <li><a href="#">Bachelor&apos;s Programs</a></li>
                    <li><a href="#">Master&apos;s Programs</a></li>
                    <li><a href="#">How to apply?</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#" onClick={() => showSubMenu('research')}>Research</a>
              <div className="sub_menu" ref={researchSubMenu} style={{ display: 'none' }}>
                <div className="sub_menu_icon_wrapper">
                  <div><img src={arrowup} alt="" className='up_arrow' /></div>
                  <div><img src={close} onClick={() => hideSubMenu('research')} alt="" /></div>
                </div>
                <div className='sub_menu_wrapper'>
                  <ul>
                    <li><a href="#">Research</a></li>
                    <li><a href="#">Overview of research</a></li>
                    <li><a href="#">innovation conference</a></li>
                    <li><a href="#">Completed project</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#" onClick={() => showSubMenu('openUniversity')}>Open University</a>
              <div className="sub_menu" ref={openUniversitySubMenu} style={{ display: 'none' }}>
                <div className="sub_menu_icon_wrapper">
                  <div><img src={arrowup} alt="" className='up_arrow' /></div>
                  <div><img src={close} onClick={() => hideSubMenu('openUniversity')} alt="" /></div>
                </div>
                <div className='sub_menu_wrapper'>
                  <ul>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Microcredentials</a></li>
                    
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#" onClick={() => showSubMenu('university')}>University</a>
              <div className="sub_menu" ref={universitySubMenu} style={{ display: 'none' }}>
                <div className="sub_menu_icon_wrapper">
                  <div><img src={arrowup} alt="" className='up_arrow' /></div>
                  <div><img src={close} onClick={() => hideSubMenu('university')} alt="" /></div>
                </div>
                <div className='sub_menu_wrapper'>
                  <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Student Hostel</a></li>
                    <li><a href="#">Library</a></li>
                    <li><a href="#">Campus</a></li>
                    <li><a href="#">Room rent</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="user_icon">
          <div className="search_bar"></div>
          <FaUser onClick={() => showSubMenu('user')} />
          <div className="sub_menu user_sub_menu" ref={userSubMenu} style={{ display: 'none', top: '61px' }}>
            <div className="sub_menu_icon_wrapper" style={{justifyContent:'flex-end'}}>
              <div><img src={arrowup} alt="" className='up_arrow' /></div>
              <div><img src={close} onClick={() => hideSubMenu('user')} alt="" /></div>
            </div>
            <div className='sub_menu_wrapper'>
              <ul>
                <li><a href="#">Student&apos;s Sign In</a></li>
                <li><a href="#">Moodle</a></li>
                <li><a href="#">MailBox</a></li>
                <li><a href="#">Employee Sign in</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
