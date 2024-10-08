import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'



import useAxiosPublic from '../Utils/useAxiosPublic'
import app from '../../firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();



  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }


  const logOut = async () => {
    setLoading(true)
    return signOut(auth)
  }


  const saveUser = async (user) => {
    const currentUser = {
      email: user?.email,
      name:user?.displayName,
      image:user?.photoURL,
    }

    const { data } = await axiosPublic.put('/user', currentUser);
    return data;
  }


  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
     
     
      if (currentUser) {
       
        const userEmail = currentUser?.email || user?.email;
        const loggedEmail = { email: userEmail }
        saveUser(currentUser);
        axiosPublic.post('/jwt', loggedEmail, {withCredentials:true})
        .then( res => {
          if(res.data.token) {
            localStorage.setItem('access-token', res.data.token);
            setLoading(false)
          }
        })

      }
      else {
        setLoading(false)
        localStorage.removeItem('access-token')
      }
      
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,

  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.array,
}

export default AuthProvider