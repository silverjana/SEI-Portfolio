import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <section id="header"> 
      <h2>Header</h2>
      <HashLink smooth to="/#skills">Skills</HashLink>
    </section>
  
  )
}
export default Header