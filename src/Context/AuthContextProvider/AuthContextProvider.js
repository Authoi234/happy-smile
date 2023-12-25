import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const EmailPasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const EmailPasswordRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            return unsubcribe;
        }
    }, [])

    const authInfo = {
        EmailPasswordSignIn,
        EmailPasswordRegister
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;