import React, { useState } from 'react'
import '../scss/errorBox.scss'

function ErrorBox({errorCode}) {

	var errorMessage;
	var errorTitle;

	switch(errorCode){
		case "auth/invalid-email":
			errorTitle = "Invalid Email"
			errorMessage = "The email is not valid."
			break;
		case "auth/wrong-password":
			errorTitle = "Wrong Password"
			errorMessage = "The password is not correct."
			break;
		case "auth/email-already-in-use":
			errorTitle = ""
			errorMessage = "The email is already registered."
			break;
		case "auth/missing-fields":
			errorTitle = "Fields missing"
			errorMessage = "Not all fields are filled."
			break;
		case "auth/password-insufficient":
			errorTitle = "Password doesn't meet requirements"
			errorMessage = "Your password doesn't meet the minimum requirements."
			break;
		default:
			errorTitle = "Error!"
			errorMessage = "Something went wrong."
	}

	return (
		<div className="error-box">
			{errorTitle && <h3>{errorTitle}</h3>}
			{errorMessage && <p>{errorMessage}</p>}
		</div>
		);
	}
   
export default ErrorBox;