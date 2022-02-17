import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='px-3 py-3 transition duration-200 bg-gray-500 rounded-md shadow-md bg-opacity-60'>
      <div className='relative flex flex-row items-center space-x-3 space-y-2 md:flex-col'>
        <img
          className='w-16 h-16 rounded-full'
          src={avatar_url}
          alt={`User ${login} avatar.`}
        />
        <div>
          <h2 className='font-bold text-gray-50'>{login}</h2>
        </div>
        <div className='absolute flex right-5 md:relative md:right-0'>
          <Link
            className='transition-all duration-100 text-gray-50 text-opacity-40 hover:text-gray-300 hover:text-opacity-100'
            to={`/users/${login}`}
          >
            Visitar perfil
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
