import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../../util/axios';
import { AuthContext } from '../auth/authContext';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  // const { decodedToken, isExpired } = useJwt(token);

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user')) || null
  );

  const [requests, setRequests] = useState(null);

  const getActiveRequest = () => {
    console.log('active');
    return requests?.filter(request => request.status === 'open');
  };

  const setUser = user => {
    setCurrentUser(user);
  };

  const setSignedIn = bool => {
    setIsSignedIn(bool);
  };

  const getRequest = async () => {
    try {
      const {
        data: {
          data: { requests: results },
        },
      } = await axios.get('/me/requests', {
        headers: { Authorization: `Bearer ${token}` },
      });

      setRequests(results);
      console.log(requests);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const {
          data: {
            data: { user },
          },
        } = await axios.get(`/me`, { headers: { Authorization: `Bearer ${token}` } });
        console.log(user);
        if (!user) throw new Error('User is the email and password not found');

        setUser(user);
        setSignedIn(true);
        sessionStorage.setItem('user', JSON.stringify(user));
      } catch (err) {
        console.log(err.message);
      }
    };

    if (token && sessionStorage.getItem('jwtToken')) getCurrentUser();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        isSignedIn,
        currentUser,
        setUser,
        setSignedIn,
        getRequest,
        requests,
        getActiveRequest,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
