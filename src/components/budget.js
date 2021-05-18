import '../scss/dashboard/budget.scss';

function Budget() {

   return (
     <div className="budget-container">
       <input type="text" className="budget" required/>
      <span className="floating-label">monthly budget</span>
     </div>
    );
  }
  
  export default Budget;