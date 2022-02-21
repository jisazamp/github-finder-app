// Import createcContext
import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

// Declare the new context
const GithubContext = createContext();

// Save the Github URL and Token in a variable
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// export the Provider
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();

    // Fetch the /users list using environment variables
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    // Users to JSON
    const data = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  // Set loading
  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
