import insomnia from "../images/insomniaLogo.png"
import netlify from "../images/netlify.png"

const Skills = () => {
  return (
    <>

      <section className="card" id="skills">
        <h2>Technical Skills</h2>
        <div>
          <h3>Front end</h3>
          <div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="HTML 5" />
              <p>HTML 5</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS 3" />
              <p>CSS 3</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SASS" />
              <p>SASS</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              <p>React</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg" alt="Material UI" />
              <p>Material UI</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Back end</h3>
          <div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg" alt="Python" />
              <p>Python</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Node.js" />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
              <p>Express</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" alt="MongoDB" />
              <p>MongoDB <br /> + Mongoose</p>
            </div>
            <div className="skill">
              <img src={insomnia} alt="Insomnia" />
              <p>Insomnia</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />
              <p>Django</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" alt="PostgreSQL" />
              <p>PostgreSQL</p>
            </div>  

          </div>
        </div>

        <div>
          <h3>Packages</h3>
          <div>
          <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="Npm" />
              <p>Npm</p>
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" alt="Yarn" />
              <p>Yarn</p>
            </div>

          </div>
        </div>


        <div>
          <h3>Management, Version control, Deployment</h3>
          <div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" />
              <p>VSCode</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="Git" />
              <p>Git</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              <p>GitHub</p>
            </div>            
            <div className="skill">
              <img src={netlify} alt="Netlify" />
              <p>Netlify</p>
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" alt="Heroku" />
              <p>Heroku</p>
            </div> 
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" alt="Trello" />
              <p>Trello</p>
            </div> 
          </div>
        </div>

      </section>
    </>
  )
}
export default Skills