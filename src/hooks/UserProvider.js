import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider= ({ children, loggedInUser = '' }) => {
    const [user, setUser] = useState(loggedInUser);
 
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
        children: PropTypes.node.isRequired,
        loggedInUser: PropTypes.string
};

export default UserProvider;
