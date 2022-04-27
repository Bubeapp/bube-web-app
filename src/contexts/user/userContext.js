import { createContext, useContext, useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import axios from '../../util/axios';
import { AuthContext } from '../auth/authContext';

export const UserContext = createContext({
  currentUser: null,
  isSignedIn: false,
  setUser: () => {},
  setSignedIn: () => {},
});

const UserProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const { decodedToken, isExpired } = useJwt(token);

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const setUser = user => {
    setCurrentUser(user);
  };

  const setSignedIn = bool => {
    setIsSignedIn(bool);
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      if (!decodedToken || isExpired) return;
      const { _id } = decodedToken;

      try {
        const {
          status,
          data: {
            data: { user },
          },
        } = await axios.get(`/users/${_id}`);
        if (status !== 200 && !user) throw Error();

        setUser(user);
        setSignedIn(true);
      } catch (err) {
        console.log(err);
      }
    };

    getCurrentUser();
  }, [decodedToken, isExpired]);

  return (
    <UserContext.Provider value={{ isSignedIn, currentUser, setUser, setSignedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
