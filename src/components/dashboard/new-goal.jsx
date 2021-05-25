import '../../scss/dashboard/new-goal.scss';
import { db } from '../../firebase/firebase';
import { auth } from '../../firebase/firebase';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function NewGoal() {

  const [goalAmount, setGoalAmount] = useState(0);
  const [monthlyGoalAmount, setMonthlyGoalAmount] = useState(0);
  const [goalName, setGoalName] = useState('');
  const [newGoalWindow, setView] = useState(false);
 

  const userId = auth.currentUser.uid; 
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
  const dbRefGoals = db.ref("users/" + userId + "/goals/" + dateId);
  const dbRefExpenses = db.ref("users/" + userId + "/expenses/" + currMonthandYear + "/" + dateId);

  // Create new goal entry in database
  function addNewGoal() {
    dbRefGoals.set({
      goalName: goalName,
      goalAmount: parseFloat(goalAmount),
      monthlyGoalAmount: monthlyGoalAmount,
      date: date,
      id: dateId
    });
    writeNewMoneyActivity()
    setView(false);
  }

  // Add goal entry to monthly money activity list
  function writeNewMoneyActivity() {
    dbRefExpenses.set({
      type: 'sub',
      amount: parseFloat(monthlyGoalAmount),
      description: goalName,
      isMonthly: true,
      date: date,
      id: dateId
    });
  }

  return (
    <div className="button-and-new-goal-container">
      <div className="new-goal-entry">
        <button className="new-goal-button" onClick={() => setView(true)}>+ New Goal</button>
      </div>
      <div className={`new-goal-wrapper ${newGoalWindow ? "showNewGoalWindow" : "hideNewGoalWindow"}`}>
        <div className="new-goal-container">
          <span className="window-title">New Goal</span>
          <button className="close" onClick={() => setView(false)}>X</button>
          <div className="text-input-box">
            <div>
              <input type="text" className="goal-description" onChange={({target: {value}}) => setGoalName(value)} required/>
              <span className="floating-label">Goal Name</span>
            </div>
            <div>
              <input type="text" className="goalAmount" onChange={({target: {value}}) => setGoalAmount(value)} required/>
              <span className="floating-label">Goal Amount</span>
            </div>
            <div>
              <input type="text" className="monthlyAmount" onChange={({target: {value}}) => setMonthlyGoalAmount(value)} required/>
              <span className="floating-label">Monthly Amount</span>
            </div>
          </div>
          <div className="save-container">
            <button onClick={() => addNewGoal()} className="save">SAVE</button>
          </div> 
        </div>
     </div>
    </div>
  );
}

export default NewGoal;