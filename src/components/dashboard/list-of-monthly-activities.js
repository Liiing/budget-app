import '../../scss/dashboard/list-of-monthly-activities.scss';
import { db, auth } from '../../firebase/firebase';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Main component function / Functional component
function ListOfMonthlyActivities() {
  // Create date function and save current date values in variables
  var date = new Date();
  var mm = String(date.getMonth() + 1).padStart(2, '0');
  var yyyy = date.getFullYear();
  var currMonthandYear = mm + yyyy;
  
  // Save userID from auth to variable / get database path
  const userId = auth.currentUser.uid; 
  const dbRef = db.ref("users/" + userId + "/expenses/" + currMonthandYear);
  const dispatch = useDispatch();
  
  // Get Expense list as variable
  const moneyActivityList = useSelector(state => state.moneyActivityList); 
  const [isListEmpty, setListEmpty] = useState(false);
  const [render, reRender] = useState("");

  // Function to get current activity from database and push objects to array
  function fetchUserMoneyActivityEntries(dispatch) {
    var  activityList = [];

    dbRef.on('value', (snapshot) => {
      const userObj = snapshot.val();

      if (userObj !== null && userObj !== "" && userObj !== 0) {
        Object.keys(userObj).forEach(function(prop) {
          activityList.push(userObj[prop]);
             
        });
        dispatch({type: 'moneyActitivtyList/updateList', list:  activityList}); 

        activityList = [];
        setListEmpty(false);

      } else {
        setListEmpty(true);
      }
    });
  }

  // On component render get list and re render component
  useEffect(() => {
    fetchUserMoneyActivityEntries(dispatch);
    
    setTimeout(() => {
      reRender("Updated");
    }, 100);
  }, [dispatch]);

  // Main jsx render // HTML Structure
  return (
    <div className="list-container">
      <div className="list-titles">
        <div className="list-title">Amount</div>
        <div className="list-title">Description</div>
        <div className="list-title">Date</div>
        <div className="list-title">Monthly</div>
      </div>
      { isListEmpty ? ( 
        <p>no entries yet</p>
      ) : (
        moneyActivityList.map((entry) => 
          <div key={entry.id} className="entry-container">
            <div className={`list-item amount-container ${entry.type === 'sub' ? "expense" : "credit"}`} >
              {entry.type === 'sub' ? "- " + entry.amount.toFixed(2) : "+ " + entry.amount.toFixed(2)}
            </div>
            <div className="list-item description-container">
              {entry.description}
            </div>
            <div className="list-item date-container">
              {entry.date}
            </div>
            <div className="list-item is-monthly-container">
              {entry.isMonthly.toString()}
            </div>
          </div>)
        )
      }
  </div>
  );
}

export default ListOfMonthlyActivities; 