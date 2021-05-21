import '../../scss/dashboard/budget.scss';
import { useState, useEffect, useRef } from 'react';
import { db } from '../../firebase/firebase';
import { auth } from '../../firebase/firebase';
import { useSelector } from 'react-redux';

function Budget() {
  // Create state variable: budget and saved
  var [budget,setBudget] = useState();
  var [inputBudget, setInputBudget] = useState();
  const [isSaved, setSave] = useState(false);
  const [labelText, setLabelText] = useState("New monthly budget");
  const moneyActivityList = useSelector(state => state.moneyActivityList);
  const inputRef = useRef<HTMLInputElement>(null);
  // Get the current logged in user`s uid
  const userId = auth.currentUser.uid; 
  const dbRef = db.ref("users/" + userId);
  var isDiffGreen = false;
  
  // Function to get the current user`s budget / is getting fetched from the firebase database
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
  // Function will invoke at component render
  useEffect(() => {
    fetchUserBaseBudget(checkEmptyBudget);
  });

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
    inputBudget = parseFloat(inputBudget);
    // Check if input number is a number
    if(isNaN(inputBudget)) {
      alert("input is not a number");
      return;
    } else {
      db.ref("users/" + userId).set({
        baseBudget: parseFloat(inputBudget)
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
      return calcCurrBudget() + " €";
    } else {
      return inputBudget;
    }
  }

  function checkDifference() {
    if (budget !== 0 && budget !== "" && budget !== undefined) {
      const currBudget = calcCurrBudget();
      if (currBudget > budget) {
        isDiffGreen = true;        
        return "+ " + (currBudget - budget);
      } else { if (budget > currBudget) {
        isDiffGreen = false; 
        return "- " + (budget - currBudget);
        } else {
          isDiffGreen = true;   
          return 0;
        } 
      } 
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
            <input value={checkDifference()} className={`budget-diff ${isDiffGreen ? "diff-green" : "diff-red"}`}></input>
            <span className="budget-label">Difference of base budget</span>
          </div>
        </form>
     </div>
    );
  }
  
  export default Budget; 