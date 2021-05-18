import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../src/firebase/firebase';

const AuthContext = React.createContext()

export const useAuth = () => {
	return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function signup(email,password) {
		return auth.createUserWithEmailAndPassword(email,password)
	}

	function login(email,password) {
		return auth.signInWithEmailAndPassword(email,password)
	}

	function logout(){
		return auth.signOut()
	}

	function resetPassword(email){
		auth.sendPasswordResetEmail(email)
	}

	function updateEmail(email){
		currentUser.updateEmail(email)
	}

	function updatePassword(password){
		currentUser.updatePassword(password)
	}

	function sendEmailVerification(){
		currentUser.sendEmailVerification()
	}

	useEffect(() => {
		const unsubsribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user)
			setLoading(false)
		})

		return unsubsribe
	}, [])

	const value = {
		currentUser,
		login,
		signup,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
		sendEmailVerification
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}