import { useContext } from 'react';
import Spinner from '../shared/Spinner';
import UserItem from '../UserItem';
import GithubContext from '../../context/github/GithubContext';

const UserResults = () => {
  // Bring elements from the context
  const { users, loading } = useContext(GithubContext);

  return (
    <div className='grid items-center justify-center grid-cols-1 gap-8 m-3 xs:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4'>
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
