
import { Link } from 'react-router-dom';
import program_1 from '../../assets/images/home-page-program-1.jpg'
import program_2 from '../../assets/images/home-page-program-2.jpg'
import program_3 from '../../assets/images/home-page-program-3.jpg'
import program_4 from '../../assets/images/home-page-program-4.jpg'
import program_icon_1 from '../../assets/images/program-icon-1.png'
import program_icon_2 from '../../assets/images/program-icon-2.png'
import program_icon_3 from '../../assets/images/program-icon-3.png'
import dark_arrow from '../../assets/images/dark-arrow.png'

const HomePagePrograms = () => {
  return (
    <>
    <section className='programs container'>
    <div className="programs-container">
    <div className="program-card">
        <Link to="/">
        <div className='program-card-img'>
          <img src={program_1} alt="" className="program-img" />
          <div className="caption">
              <img src={program_icon_1} alt="" className="caption-img" />
              <p>Bachelor&apos;s Program</p>
          </div>
        </div>
        <div className="program-card-text">
        <h2 className="sub-title-home-page-programs">Bachelor’s Studies</h2>
        <div className=''>
          <p>Acquire practical knowledge and entrepreneurial skills</p>   
        </div>
        <div className='read-more-button'>
        <a to="/" className='btn-secondary'>See Programs <img className='dark-arrow' src={dark_arrow} alt="" /></a>
        </div>
        </div>
        </Link>
      </div>
      <div className="program-card">
        <a to="/">
        <div className='program-card-img'>
          <img src={program_2} alt="" className="program-img" />
          <div className="caption">
              <img src={program_icon_1} alt="" className="caption-img" />
              <p>Master&apos;s Program</p>
          </div>
        </div>
        <div className="program-card-text">
        <h2 className="sub-title-home-page-programs">Master’s Studies</h2>
        <div className=''>
          <p>Join our MBA program and position yourself among future leaders.</p>   
        </div>
        <div className='read-more-button'>
        <a to="/" className='btn-secondary'>See Programs <img className='dark-arrow' src={dark_arrow} alt="" /></a>
        </div>
        </div>
        </a>
      </div>
      <div className="program-card">
        <a to="/">
        <div className='program-card-img'>
          <img src={program_3} alt="" className="program-img" />
          <div className="caption">
              <img src={program_icon_3} alt="" className="caption-img" />
              <p>Open University</p>
          </div>
        </div>
        <div className="program-card-text">
        <h2 className="sub-title-home-page-programs">Open University</h2>
        <div className=''>
          <p>Enroll in flexible short courses to acquire new skills.</p>   
        </div>
        <div className='read-more-button'>
        <a to="/" className='btn-secondary'>See Programs <img className='dark-arrow' src={dark_arrow} alt="" /></a>
        </div>
        </div>
        </a>
      </div>
      <div className="program-card">
        <a to="/">
        <div className='program-card-img'>
          <img src={program_4} alt="" className="program-img" />
          <div className="caption">
              <img src={program_icon_2} alt="" className="caption-img" />
              <p>Micro-credentials</p>
          </div>
        </div>
        <div className="program-card-text">
        <h2 className="sub-title-home-page-programs">Micro-Credentials</h2>
        <div className=''>
          <p>Build your dream career in a rapidly changing world.</p>   
        </div>
        <div className='read-more-button'>
        <a to="/" className='btn-secondary'>See Programs <img className='dark-arrow' src={dark_arrow} alt="" /></a>
        </div>
        </div>
        </a>
      </div>
      
    </div>
  </section>
    </>
  )
}

export default HomePagePrograms
