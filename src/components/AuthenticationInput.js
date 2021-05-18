import '../scss/authenticationInput.scss';

const AuthenticationInput = ({type, form, onChange, label, style, onFocus, onBlur}) => {
	return (
		<div className="input-box" style={style}>
			{type === "password" && 
				<>
					<span className="material-icons lock-icon">lock</span>
					<input className="password-input" type="password" form={form} onChange={onChange} onFocus={onFocus} onBlur={onBlur} required/>
				</>
			}
			{type  === "email" && 
				<>
					<span className="material-icons user-icon">person</span>
					<input className="username-input" type="email" form={form} onChange={onChange} required/>
				</>
			}
      		{type  === "confirm" && 
				<>
					<span className="material-icons lock-icon">lock</span>
					<input className="password-input" type="password" form={form} onChange={onChange} onFocus={onFocus} onBlur={onBlur} required/>
				</>
			}
			<span className="floating-label">{label}</span>
		</div>
	)
}
  
export default AuthenticationInput;