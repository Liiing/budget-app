import React, { useState } from 'react'
import { useAuth } from '../AuthContext';
import '../scss/verifyEmailInfoBox.scss'

function VerifyEmailInfoBox({onLogin = false, resendVerificationEmail}) {
	
	const [emailSend, setEmailSend] = useState(false)

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