import '../scss/authenticationInput.scss';

const AuthenticationInput = ({isPassword = false, form, onChange, label, style}) => {
	return (
		<div className="input-box" style={style}>
			{isPassword && 
				<>
					<span className="material-icons lock-icon">lock</span>
					<input className="password-input" type="password" form={form} onChange={onChange}  required/>
				</>
			}
			{!isPassword && 
				<>
				<span className="material-icons user-icon">person</span>
				<input className="username-input" type="email" form={form} onChange={onChange}  required/>
				</>
			}
			<span className="floating-label">{label}</span>
		</div>
	)
}
  
export default AuthenticationInput;