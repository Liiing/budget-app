import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../src/firebase/firebase';

// creates authentication context
const AuthContext = React.createContext()

// method for accessing authentication context
export const useAuth = () => {
	return useContext(AuthContext)
}

// creating authentication context provider (component authentication context)
export const AuthProvider = ({children}) => {
	// creates states for context
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	// uses firebase authentication to signup user with email and password
	function signup(email,password) {
		return auth.createUserWithEmailAndPassword(email,password)
	}

	// uses firebase authentication to login user with email and password
	function login(email,password) {
		return auth.signInWithEmailAndPassword(email,password)
	}

	// uses firebase authentication to logout user
	function logout(){
		return auth.signOut()
	}

	// uses firebase authentication to send a password-reset email to address
	function resetPassword(email){
		auth.sendPasswordResetEmail(email)
	}

	// uses firebase authentication to send verification-email to address
	function sendEmailVerification(){
		currentUser.sendEmailVerification()
	}

	// updates the currentUser on every render
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	// sums up all methods and attributes provided by context
	const value = {
		currentUser,
		login,
		signup,
		logout,
		resetPassword,
		sendEmailVerification
	}

	// render component
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}