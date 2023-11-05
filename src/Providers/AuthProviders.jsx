import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    //user 
    //objerp state change 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            // console.log('sss', currentUser)
        })
        return () => {
            unsubscribe();
        }
    })

    //createUser email password 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //sighing user 
    const SighingUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login 
    const SighingGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }


    // signOut 
    const LogOut = () => {
        setLoading(true)
        return signOut(auth)

    }

    //send data
    const UserInfo = {
        user,
        loading,
        createUser,
        LogOut,
        SighingUser,
        SighingGoogle
    }
    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;