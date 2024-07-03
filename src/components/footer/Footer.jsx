import './Footer.css'
import logo from '../../assets/images/cambridge_footer.svg'
import {FaFacebook, FaInstagram, FaYoutube, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className=" footer_container container_lg">
            <div className="footer_content">
                <img src={logo} alt="" />

                <div className="social_media_container">
                    <a href="#"><FaFacebook className='social_media_icon'/></a>
                    <a href="#"><FaInstagram className='social_media_icon'/></a>
                    <a href="#"><FaYoutube className='social_media_icon'/></a>
                    <a href="#"><FaLinkedinIn className='social_media_icon'/></a>
                </div>
            </div>
            <div className="group_container">
            <div className="group_content">
                <h5>Join Us</h5>
                <ul className="group_items">
                    <li><a href="#">Bachelor &apos;s Programs</a></li>
                    <li><a href="#">Master &apos;s Programs</a></li>
                    <li><a href="#">How to apply?</a></li>
                    <li><a href="#">Scholarships</a></li>
                    <li><a href="#">Open University</a></li>
                </ul>
            </div>
            <div className="group_content">
                <h5>About Us</h5>
                <ul className="group_items">
                    <li><a href="#">Research</a></li>
                    <li><a href="#">Student Hostel</a></li>
                    <li><a href="#">Library</a></li>
                    <li><a href="#">Scholarships</a></li>
                    <li><a href="#">Campus</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>
            <div className="group_content">
                <h5>Join Us</h5>
                <ul className="group_items">
                    <li><a href="#">Bachelor &apos;s Programs</a></li>
                    <li><a href="#">Master &apos;s Programs</a></li>
                    <li><a href="#">How to apply?</a></li>
                    <li><a href="#">Scholarships</a></li>
                    <li><a href="#">Open University</a></li>
                </ul>
            </div>
            </div>

           

            </div>
    </footer>
  )
}

export default Footer
