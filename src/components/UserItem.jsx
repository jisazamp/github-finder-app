import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className='px-3 py-3 transition duration-200 bg-gray-500 rounded-md shadow-md bg-opacity-60 hover:bg-gray-800'>
      <div className='flex flex-row space-x-3 space-y-2 md:items-center md:flex-col'>
        <img
          className='w-16 h-16 rounded-full'
          src={avatar_url}
          alt={`User ${login} avatar.`}
        />
        <div>
          <h2 className='font-bold text-gray-50'>{login}</h2>
          <Link className='text-gray-50 text-opacity-40' to={`/users/${login}`}>
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
