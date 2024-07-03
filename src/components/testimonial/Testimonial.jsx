import './Testimonial.css'
import { useRef } from 'react'
import Title from "../shared/title/Title"
import next_btn from '../../assets/images/next-icon.png'
import back_btn from '../../assets/images/back-icon.png'
import user_1 from '../../assets/images/user-1.png'
import user_2 from '../../assets/images/user-2.png'
import user_3 from '../../assets/images/user-3.png'
import user_4 from '../../assets/images/user-4.png'

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
        if(tx > -50){
            tx -= 25;   
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if(tx < 0){
            tx += 25;   
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <>
    <Title title='testimonial' sub_title="What students says about Us"/>
    <section className='container'> 
        <div className='testimonial'>  
              <img src={next_btn} alt="" className="next_btn" onClick={slideForward} />
              <img src={back_btn} alt="" className="back_btn" onClick={slideBackward} />
              <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jakub</h3>
                                    <span>Madrid, Spain</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit am adipisicing elit. Rerum hic laboriosam a velit odio expedita porro ut architecto. Vero, non! laboriosam a velit odio expedita porro ut architecto. Vero, non!
                            </p>
                        </div>
                     </li>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Davib William</h3>
                                    <span>Lisbon, Portugal</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic laboriosam a velit odio expedita porro ut architecto. Vero, non! adipisicing elit. Rerum hic laboriosam a velit odio expedita porro ut architecto. Vero, non!
                            </p>
                        </div>
                     </li>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Alexandera</h3>
                                    <span>Tallinn, Estonia</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic laboriosam ctetur adipisicing elit. Rerum hic laboriosam a velit odio expedita porro ut architecto. Vero, non!
                            </p>
                        </div>
                     </li>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Argo Juandus</h3>
                                    <span>New York, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic laboriosam a velit odio expedita porro ut architecto. Vero, non! Rerum hic laboriosam a velit odio expedita porro ut architecto. Vero, non!
                            </p>
                        </div>
                     </li>
                </ul>
              </div>
              </div> 
    </section>
    </>
  )
}

export default Testimonial
