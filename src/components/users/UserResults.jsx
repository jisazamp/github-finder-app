import { useEffect, useState } from 'react';
import Spinner from '../shared/Spinner';
import UserItem from '../UserItem';

const UserResults = () => {
  // Component state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Effect that fetchs the users from the GitHub API
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // Fetch the /users list using environment variables
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    // Users to JSON
    const data = await response.json();

    // Update the state
    setUsers(data);
    setLoading(false);
  };

  return (
    <div className='grid items-center justify-center grid-cols-1 gap-8 m-3 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4'>
      {/* Conditional rendering of the Spinner */}
      {loading && (
        <div className='flex items-center justify-center'>
          <Spinner />
        </div>
      )}
      {/* Render the list of users */}
      {users?.map((user, index) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserResults;
