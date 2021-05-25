import '../scss/errorBox.scss'

function ErrorBox({errorCode, styling}) {

	var errorMessage;
	var errorTitle;
  	var styling;

	switch(errorCode){
		case "auth/invalid-email":
			errorTitle = "Invalid Email"
			errorMessage = "The email is not valid."
      styling = "invalid-email-box"
			break;
		case "auth/wrong-password":
			errorTitle = "Wrong Password"
			errorMessage = "The password is not correct."
      styling = "wrong-password-box"
			break;
		case "auth/email-already-in-use":
			errorTitle = ""
			errorMessage = "The email is already registered."
      styling = "email-already-exists-box"
			break;
		case "auth/missing-fields":
			errorTitle = "Fields missing"
			errorMessage = "Not all fields are filled."
      styling = "fiels-missing-box"
			break;
		case "auth/password-insufficient":
			errorTitle = "Password doesn't meet requirements"
			errorMessage = "Your password doesn't meet the minimum requirements."
      styling = "password-weak-box"
			break;
		default:
			errorTitle = "Error!"
			errorMessage = "Something went wrong."
      styling = "error-box"
	}

	return (
		<div className={styling}>
			<div className="error-icon"></div>
			<div className="error-text">
				{errorTitle && <h3>{errorTitle}</h3>}
				{errorMessage && <p>{errorMessage}</p>}
			</div>
		</div>
		);
	}
   
export default ErrorBox;