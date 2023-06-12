import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    // user create
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // signIn user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    // log Out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth)

    }
    // user Profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


    const googleProvider = new GoogleAuthProvider()
    const googleSinIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                axios.post('https://summer-camp-school-server-jubayer9.vercel.app/jwt', {
                    email: currentUser.email
                })
                    .then(data => {

                        localStorage.setItem('JWT-token', data.data.token)
                        setUser(currentUser)

                        setLoading(false);

                    })
            }
            else {
                localStorage.removeItem('JWT-token')
                setUser(currentUser)

                setLoading(false);

            }

        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSinIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;