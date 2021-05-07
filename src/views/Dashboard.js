import '../scss/dashboard/dashboard.scss';
import logo from '../asset/images/piggy-bank-euro.svg';
import Logo from '../components/logo.js';

function Dashboard() {
  return (
    <div className="wrapper">
      <Logo />
      <div class="sidebar">
      	<div class="container">
      		<div class="menu-burger">
      			<span></span>
      			<span></span>
      			<span></span>
      		</div>
      		<div class="settings">
      			
      		</div>
      	</div>
      </div>
    </div>
  );
}

export default Dashboard;