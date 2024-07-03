import './About.css';
import about from '../../assets/images/about.png';

const About = () => {
  return (
    <section className='about container'>
        
        <div className="about_left_side">
            <div className="preview__video-wrapper">
              <img src={about} alt="preview" />
              <button className="preview__video-button">
                <span className="preview__video-play-button">
                  <span></span>
                </span>
              </button>
            </div>
        </div>

       <div className="about_right_side">
        <h5>
            About University
        </h5>
        <h2>
            Education is the backbone of Nation
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima ex aliquam. Cum cupiditate, eum architecto itaque aliquam illum dolorem asperiores fugiat quis.abore earum minima doloribus animi quasi atque tenetur consectetur repudiandae doloremque impedit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, deserunt!</p><br></br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore minima ex aliquam. Cum cupiditate, eum architecto itaque aliquam illum dolorem asperiores fugiat quis. soluta odio, doloribus blanditiis similique! Labore earum minima doloribus animiillum dolorem asperiores fugiat quis. soluta odio, doloribus blanditiis similique! Labore earum minima doloribus animi quasi atque tenetur consectetur repudiandae doloremque impedit? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, deserunt!</p>
       </div>
    </section>
  )
}

export default About
