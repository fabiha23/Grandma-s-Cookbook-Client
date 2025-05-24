import React, { useEffect, useState } from 'react';
import { AuthDataContext } from './AuthDataContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../firebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthDataProvider = ({ children }) => {

    // const [recipes, setRecipes]= useState(initial)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // useEffect(() => {
    //     fetch('/companies.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCompanies(data)
    //             setLoading(false)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

    const registerUser = (email, password, photo, name) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password, photo, name)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    const authData = {
        registerUser,
        loginUser,
        signInWithGoogle,
        user,
        auth,
        signOutUser,
        loading,
        setUser,
        setLoading
    }

    return (
        <AuthDataContext value={authData}>{children}</AuthDataContext>
    );
};

export default AuthDataProvider;