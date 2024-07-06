import { Link } from "react-router-dom"
import leftArrow from '../../assets/images/left-arrowrdark.svg'
const HomePageHero = () => {
  return (
    <>
    <header className="hero container">
      <div className="hero-content">
        <h1 className='hero-title text-5xl'>
        Applications <br /> now open
        </h1>
        <p className="text-2xl" style={{margin: '10px 0px 20px 0px'}}>
        Start your future career in one of Europe’s TOP tech <br /> hubs
        </p>
        <Link to="/programs" className="btn">Apply now <img src={leftArrow} style={{width: '20px', marginLeft: '15px'}} /></Link>
      </div>
    </header>
    <section className='container-lg'>
      

      <div className="application-deadline">
      <div>  
        <p className='text-xl'>Cambridge Assessment International Education (informally known as Cambridge International or simply Cambridge and formerly known as CIE, Cambridge International Examinations) is a provider of international qualifications, offering examinations and qualifications to 10,000 schools in more than 160 countries.</p>
      </div>
      <div>
        <p className='text-xl'>Welcome to the University! You will embark on a journey to acquire practical skills, study at the largest business campus in the Baltic, and ensure valuable connections for your future career. Our university curricula are accredited nationally, ensuring top quality and recognition.</p>
      </div>
      </div>
    </section>
    </>
  )
}

export default HomePageHero
