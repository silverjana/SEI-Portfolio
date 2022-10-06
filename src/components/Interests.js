import React from 'react';
import Carousel from 'react-material-ui-carousel' 

import sicily from "../images/sicily.jpg"
import etna from "../images/etna.jpeg"
import hadrianWall from "../images/hadrianWall.jpg"
import stavkirke from "../images/stavkirke.jpg"
import florida from "../images/florida.jpg"
import abuSimbel from "../images/abuSimbel.jpg"

const Interests = () => {
  return (
    <section className='card' id='interests'>
      <h2>Interests</h2>


      <Carousel> 
      <img src={sicily} alt="sicily" loading="lazy" height={300}></img>
      <img src={etna} alt="etna" loading="lazy" height={300}></img>   
      <img src={abuSimbel} alt="etna" loading="lazy" height={300}></img>   
      <img src={hadrianWall} alt="hadrian wall" loading="lazy" height={300}></img>      
      <img src={florida} alt="florida" loading="lazy" height={300}></img>
      <img src={stavkirke} alt="stavkirke" loading="lazy" height={300}></img>
      </Carousel>

      <p> <strong>Traveling  </strong>
I love visiting new places, but I also enjoy planning holidays abroad for friends and family. My favourite trips I organised include a 10 days tour along the Nile visiting all major temples of ancient Egypt and a 3 weeks coast to coast of the southern USA. 
The next one in my wishlist is a trek around the canyons in Utah.</p>
<p><strong>History and anthropology books  </strong>
I keep buying too many second hand books about the middle ages, but I find it a really fascinating subject we don't learn about enough in school.</p>
<p><strong>DIY  </strong>
From IKEA furniture assembly to cross stitching or renovating a timber frame Norwegian house, I take joy in doing handwork and creating or repairing things.
</p>
      
    </section>
  )
}
export default Interests