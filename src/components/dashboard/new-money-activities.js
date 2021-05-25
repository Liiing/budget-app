import '../../scss/dashboard/new-money-activity.scss';
import React, {useState} from 'react';
import { db, auth } from '../../firebase/firebase';

// Main functional component
function NewMoneyActivity () {
  
  // Define constant useState variables // useState re renders component and can be used to handle global state
  const [labelText, setLabelText] = useState("");
  const [newMoneyActivityWindow, setView] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [typeState, setType] = useState("");

  const userId = auth.currentUser.uid; 
  
  // Create new Date object and return full Date
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0');
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  var hh = date.getHours();
  var min = date.getMinutes();
  var ss = date.getSeconds();
  var ms = date.getMilliseconds();
  date = dd + '/' + mm + '/' + yyyy;

  var dateId = dd + mm + yyyy + hh + min + ss + ms;
  var currMonthandYear = mm + yyyy;

  // Path to database save to constant variable
  const dbRef = db.ref("users/" + userId + "/expenses/" + currMonthandYear + "/" + dateId);
  
  const handleView = (labelTextPara, type) => {
    setType(type);
    setLabelText(labelTextPara);
    setView(true);
  };

  //create new activity entry in database
  const writeNewMoneyActivity = () => {
    dbRef.set({
      type: typeState,
      amount: parseFloat(amount),
      description: description,
      isMonthly: isChecked,
      date: date,
      id: dateId
    });

    setView(false);
  }

  // Main jsx render // HTML Structure
  return (
    <div className="button-and-new-money-activity-container">
      <div className="new-credit-entry">
        <button className="new-credit-entry-button" onClick={() => handleView("Add as monthly credit entry", "add")}></button>
      </div>
      <div className="new-expense">
        <button className="new-expense-button" onClick={() => handleView("Add as monthly expense", "sub")}></button>
      </div>
      <div className={`new-money-activity-wrapper ${newMoneyActivityWindow ? "showNewMoneyActivitiyWindow" : "hideNewMoneyActivitiyWindow"}`}>
        <div className="new-money-activity-container">
          <span className="window-title">Add New Money Activity</span>
          <button className="close" onClick={() => setView(false)}>X</button>
          <div className="text-input-box">
            <div>
              <input type="text" className="money" onChange={({target: {value}}) => setAmount(value)} required/>
              <span className="floating-label">amount</span>
            </div>
            <div>
              <input type="text" className="description" onChange={({target: {value}}) => setDescription(value)} required/>
              <span className="floating-label">description</span>
            </div>
          </div>
          <input defaultChecked={isChecked} onChange={() => setChecked(!isChecked)} type="checkbox" className="checkbox"/>
          <label htmlFor="checkbox">
            {labelText}
          </label>
          <div className="save-container">
            <button onClick={() => writeNewMoneyActivity()} className="save">Save</button>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default NewMoneyActivity;