import '../scss/authenticationInput.scss';

const AuthenticationInput = ({isPassword = false, form, onChange, label, style}) => {
	return (
		<div className="input-box" style={style}>
			{isPassword && 
				<>
					<span class="material-icons lock-icon">lock</span>
					<input className="password-input" type="password" form={form} onChange={onChange}  required/>
				</>
			}
			{!isPassword && 
				<>
				<span class="material-icons user-icon">person</span>
				<input className="username-input" type="text" form={form} onChange={onChange}  required/>
				</>
			}
			<span className="floating-label">{label}</span>
		</div>
	)
}
  
export default AuthenticationInput;