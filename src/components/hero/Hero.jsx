import './Hero.css'
import {FaArrowRight} from 'react-icons/fa'

const Hero = () => {
  return (
    <header className="hero container">
      <div className="hero_content">
        <h1 className='hero_title'>
        “An investment in knowledge pays the best interest.” 
        </h1>
        <p className="hero_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus in, est accusamus nobis aspernatur eos exercitationem possimus at debitis?
        </p>
        <button className="btn">Explore more<FaArrowRight className='right_arrow'/></button>
      </div>
    </header>
  )
}

export default Hero
