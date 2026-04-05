import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
  return (
    <div className='about'>

      {/* LEFT SIDE */}
      <div 
        className="about-left"
        onClick={() => setPlayState(true)} 
      >
        <img src={about_img} alt="About" className='about-img' />
        <img src={play_icon} alt="Play" className='play-icon' />
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Learn Anywhere Anytime</h2>
        <p>
          About lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Aspernatur recusandae dolore laudantium maiores ipsa, quod nulla.
        </p>
        <p>
          Nemo quos obcaecati quam? Aliquid doloremque rem fugit consectetur.
        </p>
      </div>

    </div>
  )
}

export default About