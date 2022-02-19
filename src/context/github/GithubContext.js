// Import createcContext
import { createContext, useState } from 'react';

// Declare the new context
const GithubContext = createContext();

// Save the Github URL and Token in a variable
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// export the Provider
export const GithubProvider = ({ children }) => {
  // Put all the elements we want to be global here
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchUsers = async () => {
    // Fetch the /users list using environment variables
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    // Users to JSON
    const data = await response.json();

    // Update the state
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
