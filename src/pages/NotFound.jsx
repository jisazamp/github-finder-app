import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex items-center justify-center m-3'>
      <div className='max-w-lg text-center'>
        <h1 className='text-6xl font-bold text-gray-100 md:text-8xl'>¡Ups!</h1>
        <p className='mt-8 mb-5 text-3xl text-gray-100 md:text-5xl'>
          404 - La página que estás buscando no existe.
        </p>

        <div className='flex'>
          <div className='mx-auto font-bold uppercase'>
            <Link
              className='flex items-center justify-center w-56 px-2 py-3 space-x-2 text-white transition duration-200 bg-purple-700 rounded hover:bg-purple-800 hover:text-opacity-100 text-opacity-80'
              to='/'
            >
              <FaHome className='mr-2' />
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
