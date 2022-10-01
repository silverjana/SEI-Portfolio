import pic from "../images/netlify.png"

const Projects = () => {
  return (
    <section className="card" id="projects">
      <h2>Projects</h2>
      <div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
              <img src={pic} alt="proj1"></img>
              <p>This is my project</p>
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
              <p>This is my  second project</p>
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