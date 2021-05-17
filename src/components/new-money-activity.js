import '../scss/new-money-activity.scss';

function NewMoneyActivity() {
   return (
      <div className="new-money-activity-container">
        <div className="text-input-box">
          <div>
            <input type="text" className="money" required/>
            <span className="floating-label">amount</span>
          </div>

          <div>
            <input type="text" className="description" required/>
            <span className="floating-label">description</span>
          </div>
        </div>

        <label>
        Add as monthly activity
          <input type="checkbox" className="checkbox"/>
        </label>
      </div>
    );
  }
  
  export default NewMoneyActivity;