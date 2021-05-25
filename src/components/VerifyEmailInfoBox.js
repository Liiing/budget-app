import React, { useState } from 'react'
import '../scss/verifyEmailInfoBox.scss'

// info-box reminding user to verify email and offering them to resend verification mail
function VerifyEmailInfoBox({onLogin = false, resendVerificationEmail}) {	
	// creating state for component
	const [emailSend, setEmailSend] = useState(false)

	// render component
	return (
		<div className="email-verification-info-box">
			<h3>Verify Email</h3>
			{!onLogin && <p>We have send you an email to verify your address. You must verify your email before using budgetary.</p>}
			{onLogin && 
				<>
					<p>Please verify your email before using budgetary.</p> 
					{!emailSend && <u onClick={() => {resendVerificationEmail(setEmailSend)}}>Resend Email</u>}
					{emailSend && <p>Verification Email has been resend.</p>}
				</>
			}
		</div>
		);
	}
   
export default VerifyEmailInfoBox;