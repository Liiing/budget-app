import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/analytics"

var firebaseConfig = {
	apiKey: "AIzaSyDFfBHJPnormfyFlRSbdM360FsUWgbKt3Y",
	authDomain: "btary-app.firebaseapp.com",
	databaseURL: "https://btary-app-default-rtdb.europe-west1.firebasedatabase.app/",
	projectId: "btary-app",
	storageBucket: "btary-app.appspot.com",
	messagingSenderId: "898811137304",
	appId: "1:898811137304:web:abcfec0e9fe36676e7e26d",
	measurementId: "G-FHSCTD4XJ8",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();


export const auth = firebase.auth();
export const db = firebase.database();
export default firebase
