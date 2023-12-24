import React, { createContext, useState } from 'react';
import { getAuth,  GoogleAuthProvider } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const authInfo = {
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;