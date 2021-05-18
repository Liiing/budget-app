import '../scss/dashboard/budget.scss';
import { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { Link, useHistory } from "react-router-dom";
import { db } from '../../src/firebase/firebase';
import { auth } from '../../src/firebase/firebase';

function Budget() {
   
  // Create state variable: budget and saved
  var [budget,setBudget] = useState();
  var [inputBudget, setInputBudget] = useState();
  const [isSaved, setSave] = useState(false);
  const [labelText, setLabelText] = useState("New monthly budget");
  // Get the current logged in user`s uid
  const userId = auth.currentUser.uid; 
  const dbRef = db.ref("users/" + userId);
   
  // const bu = Object.keys(budget).map((key) => [String(key), budget[key]]);

  // Function to get the current user`s budget / is getting fetched from the firebase database
  function fetchUserBudget(callback) {
    dbRef.on('value', (snapshot) => {
      const userObj = snapshot.val();
      var currentBudget = userObj.Budget;
      //sets the budget state to currentBudget
      setBudget(currentBudget);
    });
    setTimeout(function() {
       
      callback();
    }, 3000);
  }
  // Function will invoke at component render
  useEffect(() => {
    fetchUserBudget(checkEmptyBudget);
  });
  // TODO addbudget
  function addBudget() {
    inputBudget = parseFloat(inputBudget);
    if(isNaN(inputBudget)) {
      alert("input is not a number");
    } else {
      db.ref("users/" + userId).set({
        Budget: parseFloat(inputBudget)
      });
    }
  }

  function checkEmptyBudget() {
     
    if (budget !== 0 && budget !== "") {
      setLabelText("Current Budget");
    } else {
      return false;
    }
  }

  function checkValue() {
    if (budget !== 0 && budget !== "") {
      return budget;
    } else {
      return inputBudget;
    }
  }

  function handleSave(budgetText) {
    setSave(true);
    if(checkEmptyBudget()) {
      setLabelText(budgetText);
    } else {
      return;
    }
    addBudget();
  }

   return (
     <div className="budget-container">
        <form className={`budget-form floating-inputs ${isSaved ? "saved" : "not-saved"}`} onSubmit={addBudget}>
          <input name="budget" type="text" className="budget" value={checkValue()} onBlur={({target: {value}}) => setInputBudget(value)} required/>
          <button type="submit" onClick={() => handleSave("Current Budget")} className="save-budget">Save</button>
          <span className="floating-label">{labelText}</span>
        </form>
     </div>
    );
  }
  
  export default Budget; 