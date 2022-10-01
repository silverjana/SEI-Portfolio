import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Interests from "./Interests"
import profilePic from "../images/profilePic.png"

const Main = () => {
  
  return (
    <>
      <section id="hero" className=" card intro">
        <div id="hero-text">
        <h1>Hi! I'm Arianna Giordano, <br /> <span>Junior Full Stack Developer</span></h1>
        <p>I just completed the General Assembly <strong>Software Engineering Intensive bootcamp</strong> in London and am looking for my first role in this industry!</p>
        </div>
        <img src={profilePic} alt="profile" id="profile-pic"/>        
      </section>
      <About />
      <Skills />
      <Projects />
      <Interests />
    </>
  )
}
export default Main