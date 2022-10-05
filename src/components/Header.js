import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <section id="header"> 
      
      <HashLink smooth to="/SEI-Portfolio/#hero"><h2>Arianna Giordano</h2></HashLink>
      <HashLink smooth to="/SEI-Portfolio/#about">About</HashLink>
      <HashLink smooth to="/SEI-Portfolio/#skills">Skills</HashLink>
      <HashLink smooth to="/SEI-Portfolio/#projects">Projects</HashLink>
      <HashLink smooth to="/SEI-Portfolio/#connect">Contacts</HashLink>


    </section>
  
  )
}
export default Header