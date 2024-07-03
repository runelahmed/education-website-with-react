import './Gallery.css';
import Title from '../shared/title/Title';
import gallery_1 from '../../assets/images/gallery-1.png';
import gallery_2 from '../../assets/images/gallery-2.png';
import gallery_3 from '../../assets/images/gallery-3.png';
import gallery_4 from '../../assets/images/gallery-4.png';
const Gallery = () => {
  return (
    <section className='gallery container'>
        <Title title='Gallery' sub_title="Campus Photo's"/>
        <div className="gallery-container">
            <div className="gallery-item">
                <a href="#">
                    <img src={gallery_1} alt="" />
                </a>
            </div>
            <div className="gallery-item">
                <a href="#">
                    <img src={gallery_2} alt="" />
                </a>
            </div>
            <div className="gallery-item">
                <a href="#">
                    <img src={gallery_3} alt="" />
                </a>
            </div>
            <div className="gallery-item">
                <a href="#">
                    <img src={gallery_4} alt="" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Gallery
