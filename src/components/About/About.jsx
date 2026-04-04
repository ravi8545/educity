import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div 
        className="about-left"
        onClick={() => setPlayState(true)} // ✅ open video
      >
        <img src={about_img} alt="About" className='about-img' />
        <img src={play_icon} alt="Play" className='play-icon' />
      </div>
    </div>
  )
}

export default About