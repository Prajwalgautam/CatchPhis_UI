import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isPremiumUser, setIsPremiumUser] = useState(false);

    const login = (user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
        setIsPremiumUser(false);
    };

    const activatePremium = () => {
        setIsPremiumUser(true);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, currentUser, isPremiumUser, login, logout, activatePremium }}>
            {children}
        </AuthContext.Provider>
    );
};

// import React, { createContext, useState, useContext } from 'react';

// const AuthContext = createContext();

// const dummyUser = {
//     username: 'testuser',
//     password: 'testpassword'
// };

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [currentUser, setCurrentUser] = useState(null);

//     const login = (username, password) => {
//         if (username === dummyUser.username && password === dummyUser.password) {
//             setIsLoggedIn(true);
//             setCurrentUser(dummyUser);
//         } else {
//             alert('Invalid credentials');
//         }
//     };

//     const logout = () => {
//         setIsLoggedIn(false);
//         setCurrentUser(null);
//     };

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);
