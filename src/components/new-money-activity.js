import '../scss/new-money-activity.scss';
import React, {useState} from 'react';
import { db } from '../../src/firebase/firebase';
import { auth } from '../../src/firebase/firebase';

function NewMoneyActivity (){
  
  const [labelText, setLabelText] = useState("");
  const [newMoneyActivityWindow, setView] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [amount, setAmount] = useState("")
  const [description, setDescription] = useState("");
  const [typeState, setType] = useState("");
  const userId = auth.currentUser.uid; 
  
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, '0')
  var mm = String(date.getMonth() + 1).padStart(2, '0')
  var yyyy = date.getFullYear()
  var hh = date.getHours();
  var min = date.getMinutes();
  var ss = date.getSeconds();
  var ms = date.getMilliseconds();
  date = dd + '/' + mm + '/' + yyyy

  var dateId = dd + mm + yyyy + hh + min + ss + ms;
  
  const handleView = (labelTextPara, type) => {
    setType(type)
    setLabelText(labelTextPara)
    setView(true)
  };

  const writeNewMoneyActivity = () => {
    db.ref("users/" + userId + "/Expenses/" + dateId).set({
      type: typeState,
      amount: parseFloat(amount),
      description: description,
      isMonthly: isChecked,
      date: date
    });
    setView(false)
  }

  return (
    <div className="button-and-new-money-activity-container">
      <div className="new-credit-entry">
        <button className="new-credit-entry-button" onClick={() => handleView("Add as monthly credit entry", "add")}>+</button>
      </div>
      <div className="new-expense">
        <button className="new-expense-button" onClick={() => handleView("Add as monthly expense", "sub")}>-</button>
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