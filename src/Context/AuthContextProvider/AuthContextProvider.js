import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

// Creating the context
export const AuthContext = createContext();

// Auth
const auth = getAuth(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Context
const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Email password sign In
    const EmailPasswordSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Email password Register
    const EmailPasswordRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update Users profile
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // Google sign In
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Logout
    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setTimeout(() => setLoading(false), 3000)
        })
        return () => {
            return unsubcribe;
        }
    }, []);

    // Information giver to the context
    const authInfo = {
        EmailPasswordSignIn,
        EmailPasswordRegister,
        updateUser,
        user,
        loading,
        googleSignIn,
        logout
    };

    return (
        // context provider
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;