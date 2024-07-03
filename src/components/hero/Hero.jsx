import './Hero.css'


const Hero = () => {
  return (
    <>
    <header className="hero container">
      <div className="hero_content">
        <h1 className='hero_title'>
        Position yourself among <br /> future leaders
        </h1>
      </div>
    </header>
    <section className='container_lg'>
      

      <div className="application_deadline">

      
      <div>
        <h1 className="sub_title">
        Application deadlines
        </h1>
        <p className='text_regular'>Non-EU citizens: <span className='text_bold'>now until 31.07.2024</span></p>
        <p className='text_regular'>EU citizens (except Estonia): <span className='text_bold'>now until 31.07.2024</span></p>
        <p className='text_regular'>Estonian citizens: <span className='text_bold'>now until 15.09.2024</span></p>
      </div>
      <div>
        <p className='text_regular'>Welcome to the University! You will embark on a journey to acquire practical skills, study at the largest business campus in the Baltics, and ensure valuable connections for your future career. Our university curricula are accredited nationally, ensuring top quality and recognition.</p>
      </div>
      </div>
    </section>
    </>
  )
}

export default Hero
