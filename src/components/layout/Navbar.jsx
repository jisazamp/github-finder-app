import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='flex items-center w-full px-3 py-5 mb-6 space-x-3 text-gray-300 bg-gray-700 shadow-md'>
      {/* Logo and title div */}
      <div className='container flex items-center ml-4 space-x-2'>
        <FaGithub className='text-3xl text-white' />
        <Link to='/' className='text-xl text-white'>
          {title}
        </Link>
      </div>

      {/* Navigation menu div */}
      <div className='justify-end flex-1 space-x-3'>
        {/* Inicio */}
        <Link
          to='/'
          className='px-2 py-2 text-sm font-semibold uppercase bg-gray-700 rounded hover:bg-gray-800 hover:text-white hover:text-opacity-95 hover:transition hover:duration-200 hover:cursor-pointer'
        >
          Inicio
        </Link>

        {/* Informacion */}
        <Link
          to='/about'
          className='px-2 py-2 text-sm font-semibold uppercase bg-gray-700 rounded hover:bg-gray-800 hover:text-white hover:text-opacity-95 hover:transition hover:duration-200 hover:cursor-pointer'
        >
          Información
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'GH Finder',
};

export default Navbar;
