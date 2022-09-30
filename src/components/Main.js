import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Interests from "./Interests"
import profilePic from "../styles/images/profilePic.png"

const Main = () => {
  return (
    <>
      <section className="block card">
        <div className="intro">
        <h1>Hi! I'm Arianna Giordano <br /> <span>Junior Developer</span></h1>
        <p>I just completed the General Assembly Software Engineering Intensive bootcamp in London and am looking for my first role in this industry!</p>
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