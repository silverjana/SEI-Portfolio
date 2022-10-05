import email from "../images/email.png"

const Footer = () => {
  return (
    <>
    <div id="triangle">
    </div>
    <section id="connect">
      <h2>Contact me!</h2>
      <div>
      <a href="https://github.com/silverjana" target="_blank" rel="noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="GitHub logo" />
      </a>
      <a href="https://www.linkedin.com/in/arianna-s-giordano/" target="_blank" rel="noreferrer" >   
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" alt="Linkedin logo" id="linkedin"/>
      </a>
      <a href="mailto:arianna.s.giordano@gmail.com"><img src={email} alt="Email logo"/></a>
      </div>
    </section>
    </>
    
  )
}
export default Footer