import React, { createContext, useState } from 'react';
import { getAuth,  GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const EmailPasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        EmailPasswordSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;