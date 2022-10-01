import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <section id="header"> 
      <h2>Arianna Giordano</h2>
      <HashLink smooth to="/#about">About</HashLink>
      <HashLink smooth to="/#skills">Skills</HashLink>
    </section>
  
  )
}
export default Header