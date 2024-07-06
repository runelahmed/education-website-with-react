import { Link } from 'react-router-dom';
import logo_1 from '../../assets/images/logo_1.png';
import logo_2 from '../../assets/images/logo_2.png';
import logo_3 from '../../assets/images/logo_3.png';
import logo_4 from '../../assets/images/logo_4.png';
import logo_5 from '../../assets/images/logo_5.svg';
import logo_6 from '../../assets/images/logo_6.png';


const Partner = () => {
  return (
    <>
    <section className="partner container-xl">
    <h1 className='text-3xl' style={{paddingBottom: '30px'}}>We collaborate with top talent</h1>
    <div className="partner-wrapper">
        <div className="partner-img-container"><Link to="https://www.ulemistecity.ee/en/"  target='_blank'><img src={logo_1} alt="" /></Link></div>
        <div className="partner-img-container"><Link to="https://en.viko.lt/" target='_blank'><img src={logo_2} alt="" /></Link></div>
        <div className="partner-img-container"><Link to="https://www.ericsson.com/en/about-us/company-facts/ericsson-worldwide/estonia" target='_blank'><img src={logo_3} alt="" /></Link></div>
        <div className="partner-img-container"><Link to="https://levellab.ee/en/" target='_blank'><img src={logo_4} alt="" /></Link></div>
        <div className="partner-img-container"><Link to="https://new.abb.com/ee" target='_blank'><img src={logo_5} alt="" /></Link></div>
        <div className="partner-img-container"><Link to="https://magneticmro.com/" target='_blank'><img src={logo_6} alt="" /></Link></div>
    </div>
    </section>
      
    </>
  )
}

export default Partner
