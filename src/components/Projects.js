
import pic from "../images/netlify.png"
import mini1 from "../images/project1Mini.png"
import mini2 from "../images/project2Mini.png"

const Projects = () => {
  return (
    <section className="card" id="projects">
      <h2>Projects</h2>
      <div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
              <img src={mini1} alt="proj1"></img>
              <p><strong>Orc Invaders</strong> <br />First SEI project <br />Solo project<br />1 week<br />Grid game<br />
              <strong>Main Skills:</strong><br />HTML, CSS, Javascript<br /> </p>
            </div>
            <div className="card-back">
              <p>I had one week to build a grid game using the HTML, CSS and JavaScript I learned during the first three weeks of the course. 
                I chose to make a Space Invaders inspired 2 levels game, with a player name window prompt and a scoreboard.  <br />
                I styled it after The Lord of Ther Rings and designed the level and game over screens on Canvas<br />
                <a href="https://silverjana.github.io/SEI-Project1-OrcInvaders/" target="_blank" rel="noreferrer"><strong>Deployed Version</strong></a><br /> Readme LINK</p>
            </div>
          </div>
        </div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
              <img src={mini2} alt="proj2"></img>
              <p>This is my second project</p>
            </div>
            <div className="card-back">
              <p>Longer description <br />and more info about project</p>
            </div>
          </div>
        </div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
              <img src={pic} alt="proj2"></img>
              <p>This is my third project</p>
            </div>
            <div className="card-back">
              <p>Longer description <br />and more info about project</p>
            </div>
          </div>
        </div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
              <img src={pic} alt="proj2"></img>
              <p>This is my 4th project</p>
            </div>
            <div className="card-back">
              <p>Longer description <br />and more info about project</p>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}
export default Projects