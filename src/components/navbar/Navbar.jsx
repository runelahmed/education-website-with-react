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
      <div className="navbar-container">
        <div className="logo">
          <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/" onClick={() => showSubMenu('admissions')}>Admissions</Link>
              <div className="sub-menu" ref={admissionSubMenu} style={{ display: 'none' }}>
                <div className="sub-menu-icon-wrapper">
                  <div><img src={arrowup} alt="" className='up-arrow' /></div>
                  <div><img src={close} onClick={() => hideSubMenu('admissions')} alt="" /></div>
                </div>
                <div className='sub-menu-wrapper'>
                  <ul>
                    <li><Link to="/programs">Bachelor&apos;s Programs</Link></li>
                    <li><Link to="/">Master&apos;s Programs</Link></li>
                    <li><Link to="/">How to apply?</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" onClick={() => showSubMenu('research')}>Research</Link>
              <div className="sub-menu" ref={researchSubMenu} style={{ display: 'none' }}>
                <div className="sub-menu-icon-wrapper">
                  <div><img src={arrowup} alt="" className='up-arrow' /></div>
                  <div><img src={close} onClick={() => hideSubMenu('research')} alt="" /></div>
                </div>
                <div className='sub-menu-wrapper'>
                  <ul>
                    <li><Link to="/">Research</Link></li>
                    <li><Link to="/">Overview of research</Link></li>
                    <li><Link to="/">innovation conference</Link></li>
                    <li><Link to="/">Completed project</Link></li>
                    <li><Link to="/">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" onClick={() => showSubMenu('openUniversity')}>Open University</Link>
              <div className="sub-menu" ref={openUniversitySubMenu} style={{ display: 'none' }}>
                <div className="sub-menu-icon-wrapper">
                  <div><img src={arrowup} alt="" className='up-arrow' /></div>
                  <div><img src={close} onClick={() => hideSubMenu('openUniversity')} alt="" /></div>
                </div>
                <div className='sub-menu-wrapper'>
                  <ul>
                    <li><Link to="/">Courses</Link></li>
                    <li><Link to="/">Microcredentials</Link></li>
                    
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" onClick={() => showSubMenu('university')}>University</Link>
              <div className="sub-menu" ref={universitySubMenu} style={{ display: 'none' }}>
                <div className="sub-menu-icon-wrapper">
                  <div><img src={arrowup} alt="" className='up-arrow' /></div>
                  <div><img src={close} onClick={() => hideSubMenu('university')} alt="" /></div>
                </div>
                <div className='sub-menu-wrapper'>
                  <ul>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">News</Link></li>
                    <li><Link to="/">Team</Link></li>
                    <li><Link to="/">Student Hostel</Link></li>
                    <li><Link to="/">Library</Link></li>
                    <li><Link to="/">Campus</Link></li>
                    <li><Link to="/">Room rent</Link></li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" onClick={() => showSubMenu('student')}>Student</Link>
              <div className="sub-menu" ref={studentSubMenu} style={{ display: 'none' }}>
                <div className="sub-menu-icon-wrapper">
                  <div><img src={arrowup} alt="" className='up-arrow' /></div>
                  <div><img src={close} onClick={() => hideSubMenu('student')} alt="" /></div>
                </div>
                <div className='sub-menu-wrapper'>
                  <ul>
                    <li><Link to="/">Lecture Plan</Link></li>
                    <li><Link to="/">RULES OF STUDY</Link></li>
                    <li><Link to="/">Academic calender</Link></li>
                    <li><Link to="/">Study sessions</Link></li>
                    <li><Link to="/">scholarships</Link></li>
                    <li><Link to="/">Erasmus+</Link></li>
                    <li><Link to="/">RPL</Link></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="user-icon">
          <div className="search-bar"></div>
          <FaUser onClick={() => showSubMenu('user')} />
          <div className="sub-menu user-sub-menu" ref={userSubMenu} style={{ display: 'none', top: '59px' }}>
            <div className="sub-menu-icon-wrapper" style={{justifyContent:'flex-end'}}>
              <div><img src={arrowup} alt="" className='up-arrow' /></div>
              <div><img src={close} onClick={() => hideSubMenu('user')} alt="" /></div>
            </div>
            <div className='sub-menu-wrapper'>
              <ul>
                <li><Link to="/">Student&apos;s Sign In</Link></li>
                <li><Link to="/">Moodle</Link></li>
                <li><Link to="/">MailBox</Link></li>
                <li><Link to="/">Employee Sign in</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
