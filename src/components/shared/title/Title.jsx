import './Title.css'

const Title = ({title, sub_title}) => {
  return (
    <div className='title'>
      <p>{title}</p>
      <h2>{sub_title}</h2>
      <div className="title-border"></div>
    </div>
  )
}

export default Title
