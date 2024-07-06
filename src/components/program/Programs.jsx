
import { Link } from 'react-router-dom';
import program_1 from '../../assets/images/program_1.jpg'
import program_2 from '../../assets/images/program_2.jpg'
import program_3 from '../../assets/images/program_3.jpg'
import program_4 from '../../assets/images/program_4.jpg'
import program_5 from '../../assets/images/program_5.jpg'
import program_icon_1 from '../../assets/images/program-icon-1.png'
import program_icon_2 from '../../assets/images/program-icon-2.png'
import program_icon_3 from '../../assets/images/program-icon-3.png'
import dark_arrow from '../../assets/images/dark-arrow.png'

const Programs = () => {
  return (
    <>
    <section className='programs container'>
    <h2 className="sub_title_programs">Undergraduate Programs</h2> 
    <div className="programs_container">
    <div className="program_card">
        <Link to="#">
        <div className='program_card_img'>
          <img src={program_1} alt="" className="program_img" />
          <div className="caption">
              <img src={program_icon_1} alt="" className="caption_img" />
              <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program_card_text">
        <h2 className="sub_title_programs">Creativity and Business Innovation</h2>
        <div className=''>
          <p>Bachelor’s Degree (BA) <br /> Field of study: Business and Administration<br />Tallinn<br />3 Years, full-time <br />Credits: 180 ECTS <br />Tuition fee per year: 7120 € (EU) /<br /> 7520 € (non-EU)<br /> </p>   
        </div>
        <div className='read_more_button'>
        <a to="#" className='btn_primary'>Read more and apply <img className='dark_arrow' src={dark_arrow} alt="" /></a>
        </div>
        </div>
        </Link>
      </div>
      <div className="program_card">
        <a to="#">
        <div className='program_card_img'>
          <img src={program_2} alt="" className="program_img" />
          <div className="caption">
              <img src={program_icon_1} alt="" className="caption_img" />
              <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program_card_text">
        <h2 className="sub_title_programs">Creativity and Business Innovation</h2>
        <div className=''>
          <p>Bachelor’s Degree (BA) <br /> Field of study: Business and Administration<br />Tallinn<br />3 Years, full-time <br />Credits: 180 ECTS <br />Tuition fee per year: 7120 € (EU) /<br /> 7520 € (non-EU)<br /> </p>   
        </div>
        <div className='read_more_button'>
        <a to="#" className='btn_primary'>Read more and apply <img className='dark_arrow' src={dark_arrow} alt="" /></a>
        </div>
        </div>
        </a>
      </div>
      <div className="program_card">
        <a to="#">
        <div className='program_card_img'>
          <img src={program_3} alt="" className="program_img" />
          <div className="caption">
              <img src={program_icon_3} alt="" className="caption_img" />
              <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program_card_text">
        <h2 className="sub_title_programs">Software Development</h2>
        <div className=''>
          <p>Bachelor’s Degree (BA) <br /> Field of study: Business and Administration<br />Tallinn<br />3 Years, full-time <br />Credits: 180 ECTS <br />Tuition fee per year: 7120 € (EU) /<br /> 7520 € (non-EU)<br /> </p>   
        </div>
        <div className='read_more_button'>
        <a to="#" className='btn_primary'>Read more and apply <img className='dark_arrow' src={dark_arrow} alt="" /></a>
        </div>
        </div>
        </a>
      </div>
      <div className="program_card">
        <a to="#">
        <div className='program_card_img'>
          <img src={program_4} alt="" className="program_img" />
          <div className="caption">
              <img src={program_icon_2} alt="" className="caption_img" />
              <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program_card_text">
        <h2 className="sub_title_programs">Game Design and Development</h2>
        <div className=''>
          <p>Bachelor’s Degree (BA) <br /> Field of study: Business and Administration<br />Tallinn<br />3 Years, full-time <br />Credits: 180 ECTS <br />Tuition fee per year: 7120 € (EU) /<br /> 7520 € (non-EU)<br /> </p>   
        </div>
        <div className='read_more_button'>
        <a to="#" className='btn_primary'>Read more and apply <img className='dark_arrow' src={dark_arrow} alt="" /></a>
        </div>
        </div>
        </a>
      </div>
      
    </div>
  </section>
    <section className='programs container'>
      <h2 className="sub_title">Master&apos;s Programs</h2> 
      <div className="programs_container masters">
      <div className="program_card">
          <a to="#">
          <div className='program_card_img'>
            <img src={program_5} alt="" className="program_img" />
            <div className="caption">
                <img src={program_icon_1} alt="" className="caption_img" />
                <p>Master&apos; Degree</p>
            </div>
          </div>
          <div className="program_card_text">
          <h2 className="sub_title_programs">International Business Administration</h2>
          <div className=''>
            <p>Master&apos;s Degree (MBA) <br /> Field of study: Business and Administration<br />Tallinn<br />2 Years, full-time <br />Credits: 120 ECTS <br />Tuition fee per year: 7120 € (EU) /<br /> 7520 € (non-EU)<br /> </p>   
          </div>
          <div className='read_more_button'>
          <a to="#" className='btn_primary'>Read more and apply <img className='dark_arrow' src={dark_arrow} alt="" /></a>
          </div>
          </div>
          </a>
        </div>        
      </div>
    </section>
    </>
  )
}

export default Programs
