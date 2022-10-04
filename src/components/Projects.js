import mini1 from "../images/project1Mini.png"
import mini2 from "../images/project2Mini.png"
import mini3 from "../images/project3Mini.png"
import mini4 from "../images/project4Mini.png"


const Projects = () => {
  return (
    <section className="card" id="projects">
      <h2>Projects</h2>
      <div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
              <img src={mini1} alt="project1"></img>
              <p><strong>Orc Invaders</strong> <br />First SEI project <br />Solo project - 1 week<br />Grid game<br />
              <strong>Main Skills:</strong><br />HTML, CSS, Javascript<br /> </p>
            </div>
            <div className="card-back">
              <p>I had one week to build a grid game using the HTML, CSS and JavaScript I learned during the first three weeks of the course. 
                I chose to make a Space Invaders inspired 2 levels game, with a player name window prompt and a scoreboard.  <br />
                I styled it after The Lord of Ther Rings and designed the level and game over screens on Canvas<br />
                <a href="https://silverjana.github.io/SEI-Project1-OrcInvaders/" target="_blank" rel="noreferrer"><strong>Deployed Version</strong></a><br /><a href="#" target="_blank" rel="noreferrer"><strong>Readme</strong></a></p>
            </div>
          </div>
        </div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
              <img src={mini2} alt="project2"></img>
              <p><strong>Rijksmuseum</strong> <br />Second SEI project <br />Pair project - 2 days<br />Front end for a public museum API<br />
              <strong>Main Skills:</strong><br />HTML, CSS, Javascript, React, Axios<br /> </p>
            </div>
            <div className="card-back">
            <p>We used React and Axios to build a front end to display the data of a public API, collaborating on VSCode with LiveShare.
              We chose the API of the Rijksmuseum in Amsterdam and built an application to show some of the collections and single items in more detail on different pages.<br />
              It is styled with bootstrap cards, flexbox and imported fonts.<br />
                <a href="https://sei-project2-museum.netlify.app/" target="_blank" rel="noreferrer"><strong>Deployed Version</strong></a><br />
                <a href="#" target="_blank" rel="noreferrer"><strong>Readme</strong></a></p>
            </div>
          </div>
        </div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
              <img src={mini3} alt="project3"></img>
              <p><strong>Earthbnb</strong> <br />Third SEI project <br />Group project - 1 week<br />Full stack application <br />
              <strong>Main Skills:</strong><br />Javascript, React, Axios, Express, MongoDB<br /> </p>
            </div>
            <div className="card-back">
            <p>I worked in a team of 3 on a remote GitHub repository and we built a full stack application using a React front end, an Express API and MongoDB.<br />
              We went for a Airbnb inspired application where a registered user can view a list of properties, see a single one in detail and comment on it. All other CRUD operations can be performed on the review from the user profile page.  <br />
              It is styled with SASS and uses a MaterialUI library.<br />
                <a href="#" target="_blank" rel="noreferrer"><strong>Deployed Version</strong></a><br />
                <a href="#" target="_blank" rel="noreferrer"><strong>Readme</strong></a></p>
            </div>
          </div>
        </div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
              <img src={mini4} alt="project4"></img>
              <p><strong>Click&amp;Care</strong> <br />Final SEI project <br />Solo project - 1 week<br />Full stack application <br />
              <strong>Main Skills:</strong><br />Javascript, React, Axios, Python, Django, PostgreSQL<br /> </p>
            </div>
            <div className="card-back">
            <p>A full stack application using a React front end, a Django API and PostgreSQL, 
              where users can arrange non urgent at-home care tasks between patients and caregivers. Patients can create a task and propose it to some caregivers, who can accept it. 
            I am very proud of the two types of user with a single login and profile page, and the interactions between them, all of which we did not cover in class.<br />
              It has a simple styling with SASS.<br />
                <a href="#" target="_blank" rel="noreferrer"><strong>Deployed Version</strong></a><br />
                <a href="#" target="_blank" rel="noreferrer"><strong>Readme</strong></a></p>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}
export default Projects