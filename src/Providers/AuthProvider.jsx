import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config'
export const authContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, Password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, Password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;