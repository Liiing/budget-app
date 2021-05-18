import logo from '../asset/images/piggy-bank-euro.svg';
import '../scss/logo.scss';

function Logo() {
	 
  return (
    <div className="logo-box">
	  <div className="logo-img-box">
	    <img className="logo-svg" src={logo} alt="piggy bank"/>
	  </div>
	  <div className="logo-text">
	    <h1 className="app-name">
	      Budgetary
	    </h1>
	    <h3 className="slogan-text">
	      Keep track of your Finances
	    </h3>
	  </div>
	</div>
  );
}

export default Logo;