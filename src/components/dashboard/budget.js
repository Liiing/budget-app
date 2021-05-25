import '../../scss/dashboard/budget.scss';
import { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase/firebase';
import { auth } from '../../firebase/firebase';
import { useSelector } from 'react-redux';

function Budget() {
  // Create state variables: budget,isSaved,labelText,isEdit
  var [budget,setBudget] = useState();
  var isDiffGreen = false;
  const [isEdit, setIsEdit] = useState(false);
  const [isSaved, setSave] = useState(false);
  const [labelText, setLabelText] = useState("New monthly budget");

  //Get Current State from ExpenseList
  const moneyActivityList = useSelector(state => state.moneyActivityList);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get the current logged in user`s uid
  const userId = auth.currentUser.uid; 
  const dbRef = db.ref("users/" + userId);
  
  // Function to get the current user`s budget / fetch from the firebase database
  // Promises a return value to wait for database fetch
  async function fetchUserBaseBudget(callback) {
    const getBaseBudget = new Promise((baseBudget) => {
      dbRef.on('value', (snapshot) => {
      const userObj = snapshot.val();
      baseBudget(userObj.baseBudget);
    })})

    var promiseResult =  await getBaseBudget;
    setBudget(promiseResult);

    callback();
  }

  // UseEffect Hook will invoke at component render
  useEffect(() => {
    if(!isEdit) {
      fetchUserBaseBudget(checkEmptyBudget);
    }
  });

  // Function to get each expense and calculate the current budget
  function calcCurrBudget() {
    var allExpenses = 0;
    var allCredits = 0;

    moneyActivityList.forEach(entry => {
      if (entry.type === 'sub') {
        allExpenses += entry.amount; 
      } else {
        allCredits += entry.amount;
      }
    });

    return budget + allCredits - allExpenses;
  }

  // Function to get value from budget input and push it as /user/budget entry to the firebase database
  function addBudget() {
    setIsEdit(false);
  
    // Check if input number is a number
    if(isNaN(budget)) {
      alert("input is not a number");
      return false;
    } else {
      // Update new Budget value in database
      db.ref("users/" + userId).update({
        baseBudget: parseFloat(budget)
      });
    }
  }

  // Checks on render if the budget from firebase is empty and sets the label of the input accordingly
  function checkEmptyBudget() {
    if(!isEdit) {
      if (budget !== 0 && budget !== "" && budget !== undefined) {
        setLabelText("Current Budget");
        setSave(true);
      } else {
        return false;
      }
    }
  }

  // Checks budget value and sets it if not empty as current budget input value
  function checkValue() {
    if(isEdit) {
      return;
    } else {
        if (budget !== 0 && budget !== "" && budget !== undefined) {
        return calcCurrBudget().toFixed(2) + " €";
      } else {
        return budget;
      }
    }
  }

  // Function to check for current baseBudget difference, calculate difference and set it
  function checkDifference() {
    if (budget !== 0 && budget !== "" && budget !== undefined) {
      const currBudget = calcCurrBudget();
      if (currBudget > budget) {
        isDiffGreen = true;        
        return "+ " + (currBudget - budget).toFixed(2);
      } else { if (budget > currBudget) {
        isDiffGreen = false; 
        return "- " + (budget - currBudget).toFixed(2);
        } else {
          isDiffGreen = true;   
          return 0;
        } 
      } 
    } else {
      return budget;
    }
  }

  // Handle save submit from form and run addBudget function
  function handleSave(event) {
    event.preventDefault();
    setSave(true);
    addBudget();
  }

  // Edit budget per click
  function editBudget() {
    setBudget();
    setIsEdit(true);
    setSave(false);
     
  }

  // Main jsx component rendering // Html Structure
   return (
     <div className="budget-container">
        <form className={`budget-form floating-inputs ${isSaved ? "saved" : "not-saved"}`} onSubmit={handleSave.bind(this)}>
          <input name="budget" type="text" className="budget" value={checkValue()} onBlur={({target: {value}}) => setBudget(value)} required/>
          <button type="submit" className="save-budget">Save</button>
          <span className="budget-label">{labelText}</span>
          <div className="diff-container">
            <input value={checkDifference()} className={`budget-diff ${isDiffGreen ? "diff-green" : "diff-red"}`}></input>
            <span className="budget-label">Difference of base budget</span>
          </div>
        </form>
        <button onClick={() => editBudget()}>EDIT</button>
     </div>
    );
  }
  
// Export budget function to use in other components
export default Budget; 