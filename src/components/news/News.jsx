
import { useRef } from 'react'
import Title from "../shared/title/Title"
import next_btn from '../../assets/images/next-icon.png'
import back_btn from '../../assets/images/back-icon.png'
import news_1 from '../../assets/images/news_1.jpg'
import news_2 from '../../assets/images/news_2.jpg'
import news_4 from '../../assets/images/news_4.jpg'
import news_5 from '../../assets/images/news_5.jpg'
import leftArrow from '../../assets/images/left-arrowrdark.svg'
import { Link } from 'react-router-dom'

const News = () => {
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
    <Title title='news' sub_title=""/>
    <section className='container-xl'> 
        <div className='news'>  
              <img src={next_btn} alt="" className="next_btn" onClick={slideForward} />
              <img src={back_btn} alt="" className="back_btn" onClick={slideBackward} />
              <div className="news-slider">
                <ul ref={slider}>
                    <li>
                        <Link to="/">
                        <div className="news-slide">
                            <div className="news-user-info">
                                <img src={news_1} alt="" />
                            </div>
                            <div className="news-content">
                            <p className='text-2xl' style={{color: '#FFBA00'}}>09.05.2024</p>
                            <p className='text-2xl'>
                                Lorem ipsum dolor sit am adipisicing elit. Rerum hic laboriosam a velit odio expedita porro ut architecto. Vero, non! laboriosam a velit odio expedita porro ut architecto. Vero, non!
                            </p>
                            <p className="text-lg" style={{color: '#FFBA00',  marginTop: '10px'}}>Read more <img src={leftArrow} style={{width: '20px', marginLeft: '10px'}} /></p>

                            </div>
                        </div>
                        </Link>
                     </li>
                    <li>
                        <Link to="/">
                        <div className="news-slide">
                            <div className="news-user-info">
                                <img src={news_2} alt="" />
                            </div>
                            <div className="news-content">
                            <p className='text-2xl' style={{color: '#FFBA00'}}>09.05.2024</p>
                            <p className='text-2xl'>
                                Lorem ipsum dolor sit am adipisicing elit. Rerum hic laboriosam a velit odio expedita porro ut architecto. Vero, non! laboriosam a velit odio expedita porro ut architecto. Vero, non!
                            </p>
                            <p className="text-lg" style={{color: '#FFBA00',  marginTop: '10px'}}>Read more <img src={leftArrow} style={{width: '20px', marginLeft: '10px'}} /></p>

                            </div>
                        </div>
                        </Link>
                     </li>
                    <li>
                        <Link to="/">
                        <div className="news-slide">
                            <div className="news-user-info">
                                <img src={news_4} alt="" />
                            </div>
                            <div className="news-content">
                            <p className='text-2xl' style={{color: '#FFBA00'}}>09.05.2024</p>
                            <p className='text-2xl'>
                                Lorem ipsum dolor sit am adipisicing elit. Rerum hic laboriosam a velit odio expedita porro ut architecto. Vero, non! laboriosam a velit odio expedita porro ut architecto. Vero, non!
                            </p>
                            <p className="text-lg" style={{color: '#FFBA00',  marginTop: '10px'}}>Read more <img src={leftArrow} style={{width: '20px', marginLeft: '10px'}} /></p>

                            </div>
                        </div>
                        </Link>
                     </li>
                    <li>
                        <Link to="/">
                        <div className="news-slide">
                            <div className="news-user-info">
                                <img src={news_5} alt="" />
                            </div>
                            <div className="news-content">
                            <p className='text-2xl' style={{color: '#FFBA00'}}>09.05.2024</p>
                            <p className='text-2xl'>
                                Lorem ipsum dolor sit am adipisicing elit. Rerum hic laboriosam a velit odio expedita porro ut architecto. Vero, non! laboriosam a velit odio expedita porro ut architecto. Vero, non!
                            </p>
                            <p className="text-lg" style={{color: '#FFBA00',  marginTop: '10px'}}>Read more <img src={leftArrow} style={{width: '20px', marginLeft: '10px'}} /></p>

                            </div>
                        </div>
                        </Link>
                     </li>
                   
                  
                </ul>
              </div>
              </div> 
    </section>
    </>
  )
}

export default News
