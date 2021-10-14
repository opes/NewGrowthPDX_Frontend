import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchLogged = async () => {
      try {
        const res = await fetch('https://ngpdx-backend.herokuapp.com/auth/me');
        const json = await res.json();
        if (!res.ok) throw new Error('login failed!');
        setUser(json);
      } catch (error) {
        console.log(error.message);
        setUser(null);
      }
    };
    fetchLogged();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  return { user, setUser };
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default UserProvider;
