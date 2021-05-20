import '../../scss/dashboard/budget.scss';
import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { auth } from '../../firebase/firebase';

function Budget() {
  // Create state variable: budget and saved
  var [budget,setBudget] = useState();
  var [inputBudget, setInputBudget] = useState();
  const [isSaved, setSave] = useState(false);
  const [labelText, setLabelText] = useState("New monthly budget");
  // Get the current logged in user`s uid
  const userId = auth.currentUser.uid; 
  const dbRef = db.ref("users/" + userId);

  // Function to get the current user`s budget / is getting fetched from the firebase database
  function fetchUserBudget(callback) {
    dbRef.on('value', (snapshot) => {
      const userObj = snapshot.val();
      var currentBudget = userObj.Budget;
      //sets the budget state to currentBudget
      setBudget(currentBudget);
    });
    // Callback to wait for data fetch function
    setTimeout(function() {
      callback();
    }, 100);
  }
  // Function will invoke at component render
  useEffect(() => {
    fetchUserBudget(checkEmptyBudget);
  });
  // Function to get value from budget input and push it as /user/budget entry to the firebase database
  function addBudget() {
    inputBudget = parseFloat(inputBudget);
    // Check if input number is a number
    if(isNaN(inputBudget)) {
      alert("input is not a number");
      return;
    } else {
      db.ref("users/" + userId).set({
        Budget: parseFloat(inputBudget)
      });
    }
  }
  // Checks on render if the budget from firebase is empty and sets the label of the input accordingly
  function checkEmptyBudget() {
    if (budget !== 0 && budget !== "" && budget !== undefined) {
      setLabelText("Current Budget");
      setSave(true);
    } else {
      return false;
    }
  }
  // Checks budget value and sets it if not empty as current budget input value
  function checkValue() {
    if (budget !== 0 && budget !== "" && budget !== undefined) {
      return budget + " €";
    } else {
      return inputBudget;
    }
  }
  function checkDifference() {
    if (budget !== 0 && budget !== "" && budget !== undefined) {
      return "- " + budget;
    } else {
      return inputBudget;
    }
  }
  // Handle save submit from form and run addBudget function
  function handleSave(event) {
    event.preventDefault();
    setSave(true);
    addBudget();
  }

  // Main jsx component rendering
   return (
     <div className="budget-container">
        <form className={`budget-form floating-inputs ${isSaved ? "saved" : "not-saved"}`} onSubmit={handleSave.bind(this)}>
          <input name="budget" type="text" className="budget" value={checkValue()} onBlur={({target: {value}}) => setInputBudget(value)} required/>
          <button type="submit" className="save-budget">Save</button>
          <span className="budget-label">{labelText}</span>
          <div className="diff-container">
            <input value={checkDifference()} className='budget-diff'></input>
            <span className="budget-label">Difference of base budget</span>
          </div>
        </form>
     </div>
    );
  }
  
  export default Budget; 