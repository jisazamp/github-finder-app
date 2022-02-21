import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { users } = useContext(GithubContext);

  const handleChange = (evt) => {
    if (evt.target.value.length <= 32) {
      setText(evt.target.value);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (text === '') {
      alert('Por favor ingrese algo.');
    } else {
      // @todo - search users

      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 gap-2 m-3 mb-8 text-white md:grid-cols-2'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='relative'>
            <input
              type='text'
              className='w-full px-2 py-4 pr-40 font-bold text-black bg-gray-200 border-none rounded-md text-md h-14 focus:outline-none'
              placeholder='Buscar'
              value={text}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='absolute top-0 right-0 py-2 bg-black rounded-l-none h-14 bg-opacity-90 hover:bg-opacity-100 w-36 rounded-r-md'
            >
              IR
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='px-3 py-2 font-semibold uppercase transition duration-200 rounded-md opacity-40 hover:opacity-100'>
            Borrar
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
