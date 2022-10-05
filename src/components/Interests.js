import React from 'react';
import Carousel from 'react-material-ui-carousel' 

import mini1 from "../images/project1Mini.png"
import mini2 from "../images/project2Mini.png"

const Interests = () => {
  return (
    <section className='card' id='interests'>
      <h1>Interests</h1>


      <Carousel> 
      <img src={mini1} alt="project2" loading="lazy" height={300}></img>
      <img src={mini2} alt="project2" loading="lazy" height={300}></img>
      </Carousel>
      
    </section>
  )
}
export default Interests