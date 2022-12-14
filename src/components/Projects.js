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
              <h3>Orc Invaders</h3>
              <div>
                <img src={mini1} alt="project1"></img>
                <p>First SEI project <br />Solo project - 1 week<br />Grid game<br />
                <strong>Main Skills:</strong><br />HTML, CSS, JavaScript </p>
              </div>
            </div>
            <div className="card-back">
              <p>I had one week to build a grid game using the HTML, CSS and JavaScript I learned during the first three weeks of the course. 
                I chose to make a Space Invaders inspired 2 levels game, with a player name window prompt and a scoreboard.  <br />
                I styled it after The Lord of Ther Rings and designed the level and game over screens on Canvas.<br />
                <a href="https://silverjana.github.io/SEI-Project1-OrcInvaders/" target="_blank" rel="noreferrer"><strong>Deployed Version</strong></a><br />
                <a href="https://github.com/silverjana/SEI-Project1-OrcInvaders/blob/main/README.md" target="_blank" rel="noreferrer"><strong>Readme</strong></a></p>
            </div>
          </div>
        </div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
              <h3>Rijksmuseum</h3>
              <div>
                <img src={mini2} alt="project2"></img>
                <p>Second SEI project <br />Pair project - 2 days<br />Front end for a public museum API<br />
              <strong>Main Skills:</strong><br />HTML, CSS, JavaScript, React, Axios<br /> </p>
              </div>
            </div>
            <div className="card-back">
            <p>We used React and Axios to build a front end to display the data of a public API, collaborating on VSCode with LiveShare.
              We chose the API of the Rijksmuseum in Amsterdam and built an application to show some of the collections and single items in more detail on different pages.<br />
              It is styled with bootstrap cards, flexbox and imported fonts.<br />
                <a href="https://sei-project2-museum.netlify.app/" target="_blank" rel="noreferrer"><strong>Deployed Version</strong></a><br />
                <a href="https://github.com/silverjana/SEI-Project2-React-museum-app/blob/main/README.md" target="_blank" rel="noreferrer"><strong>Readme</strong></a></p>
            </div>
          </div>
        </div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
            <h3>Earthbnb</h3>
              <div>
              <img src={mini3} alt="project3"></img>
              <p>Third SEI project <br />Group project - 1 week<br />Full stack application <br />
              <strong>Main Skills:</strong><br />JavaScript, React, Axios, Express, MongoDB<br /> </p>
              </div>
            </div>
            <div className="card-back">
            <p>I worked in a team of 3 on a remote GitHub repository and we built a full stack application using a React front end, an Express API and MongoDB. 
              We went for a Airbnb inspired application where a registered user can view the properties, look at a single one in detail and leave a comment. All other reviews CRUD operations can be performed from the user profile page.  <br />
              It is styled with SASS and uses a MaterialUI library.<br />
                <a href="https://project3-earthbnb.netlify.app/" target="_blank" rel="noreferrer"><strong>Deployed Version</strong></a><br />
                <a href="https://github.com/silverjana/SEI-project3-Earthbnb-backend/blob/c64ce1e001288ea06fd2bbe77ce020664904f4eb/README.md" target="_blank" rel="noreferrer"><strong>Readme</strong></a></p>
            </div>
          </div>
        </div>

        <div className="proj-card flip">
          <div className="inner-card">
            <div className="card-front">
            <h3>Click + Care</h3>
              <div>
              <img src={mini4} alt="project4"></img>
              <p>Final SEI project <br />Solo project - 1 week<br />Full stack application <br />
              <strong>Main Skills:</strong><br />JavaScript, React, Axios, Python, Django, PostgreSQL<br /> </p>
            </div>
            </div>
            <div className="card-back">
            <p>A full stack application using a React front end, a Django API and PostgreSQL, 
              where users can arrange non urgent at-home care tasks between patients and caregivers. Patients can create a task and propose it to some caregivers, who can accept it. 
            I am very proud of the two types of user with a single login and profile page, and the interactions between them, all of which we did not cover in class.
              It has a simple styling with SASS.<br />
                <a href="https://project4-click-and-care.herokuapp.com/" target="_blank" rel="noreferrer"><strong>Deployed Version</strong></a><br />
                <a href="https://github.com/silverjana/SEI-Project4-backend/blob/main/README.md" target="_blank" rel="noreferrer"><strong>Readme</strong></a></p>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}
export default Projects