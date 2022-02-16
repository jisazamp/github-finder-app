import { useEffect, useState } from 'react';
import Spinner from '../shared/Spinner';

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUsers(data);
    setLoading(false);
  };

  return (
    <div className='grid items-center justify-center grid-cols-1 gap-8 m-3 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4'>
      {loading && (
        <div className='flex items-center justify-center'>
          <Spinner />
        </div>
      )}
      {users?.map((user, index) => {
        return <li key={index}>{user.login}</li>;
      })}
    </div>
  );
};

export default UserResults;
