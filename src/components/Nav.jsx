import PropTypes from 'prop-types';
import { HiBars2 } from "react-icons/hi2";

const Nav = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed w-full z-50 p-4 lg:p-8 flex items-center justify-between">
      <div className="text-lg lg:text-xl">Muhammed Easa</div>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl lg:text-3xl">
        <HiBars2 />
      </button>
    </nav>
  );
};

Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};

export default Nav;