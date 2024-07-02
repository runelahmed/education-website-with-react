import Title from '../shared/title/Title';
import './Programs.css';
import program_1 from '../../assets/images/program-1.png'
import program_2 from '../../assets/images/program-2.png'
import program_3 from '../../assets/images/program-3.png'
import program_icon_1 from '../../assets/images/program-icon-1.png'
import program_icon_2 from '../../assets/images/program-icon-2.png'
import program_icon_3 from '../../assets/images/program-icon-3.png'

const Programs = () => {
  return (
    <section className='container'>
        <Title/>
      <div className="programs_container">
        <div className="program_card">
            <img src={program_1} alt="" className="program_img" />
            <div className="caption">
                <img src={program_icon_1} alt="" className="caption_img" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program_card">
            <img src={program_2} alt="" className="program_img" />
            <div className="caption">
                <img src={program_icon_2} alt="" className="caption_img" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program_card">
            <img src={program_3} alt="" className="program_img" />
            <div className="caption">
                <img src={program_icon_3} alt="" className="caption_img" />
                <p>Post Graduation Degree</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Programs
