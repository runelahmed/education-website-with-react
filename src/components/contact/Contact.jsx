import Title from "../shared/title/Title";
import './Contact.css'
import {FaMapMarker, FaPhone, FaEnvelope, FaEnvelopeOpen, FaArrowRight} from 'react-icons/fa'
const Contact = () => {
  return (
    <section className="container">
        <Title title='Contact US' sub_title='Get In Touch'/>
        <div className="contact">
      <div className="contact_left_side">
        <h3>Send us  a  message<FaEnvelopeOpen/></h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel minima nobis omnis, nihil modi placeat nemo assumenda sint non voluptatem!</p>
        <ul>
            <li><FaEnvelope/>test@gmail.com</li>
            <li><FaPhone/>+0803749897</li>
            <li><FaMapMarker/>80 New York, America</li>
        </ul>
      </div>
      <div className="contact_right_side">
        <form action="">
            <div className="form_group">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" required/>
            </div>
            <div className="form_group">
                <label htmlFor="phone_number">Your number</label>
                <input type="number" name="number" id="number" placeholder="Enter your phone number" required/>
            </div>
            <div className="form_group">
                <label htmlFor="name">Write your message</label>
                <textarea name="message" id="message" rows="6" placeholder="message" required></textarea>
            </div>
            <button className="btn_dark">Explore more<FaArrowRight className='right_arrow'/></button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default Contact
