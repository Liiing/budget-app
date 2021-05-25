import '../../scss/dashboard/goals.scss';
import { db } from '../../firebase/firebase';
import { auth } from '../../firebase/firebase';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Goals() {
  var [goalList, setGoalList] = useState();
  const [isListEmpty, setListEmpty] = useState(true);
  const userId = auth.currentUser.uid; 
  const dispatch = useDispatch();
  const baseBudget = useSelector(state => state.baseBudget);

  const dbRef = db.ref("users/" + userId + "/goals/");
 
  function fetchCurrentGoals(dispatch) {
    var goalList = [];
    dbRef.on('value', (snapshot) => {
      const userObj = snapshot.val();
      console.log(userObj)

      if (userObj !== undefined && userObj !== "" && userObj !== 0 && userObj !== null) {
        console.log("WEGNIOWEGNIWGENWIEGO")
        Object.keys(userObj).forEach(function(prop) {
          goalList.push(userObj[prop]);
          console.log(goalList)
        });

        dispatch({type: 'savingsList/updateList', list:  goalList});
        setGoalList(goalList);
        goalList = [];
        setListEmpty(false);
        console.log(isListEmpty)
      } else {

        setListEmpty(true);
        console.log(baseBudget)
      }
    });
  }

  function calcGoalReachTime(goalAmount, monthlyGoalAmount) {
    return parseInt(goalAmount / monthlyGoalAmount);
  }

  console.log(baseBudget)
  const [render, reRender] = useState("");

  useEffect(() => {
    fetchCurrentGoals(dispatch);
    setTimeout(() => {
      reRender("Updated");
    }, 100);
  }, [dispatch]);

  return (
    <div className="goals-wrapper">
      { isListEmpty ? ( 
        <p>no entries yet</p>
      ) : (
        goalList.map((entry) => 
          <div key={entry.id} className="goal">
            <div className="goal-body">
              <h5 className="goal-card-titles">Goal Name</h5>
               {entry.goalName}
            </div>
            <div className="goal-body">
              <h5 className="goal-card-titles">Goal</h5>
              {entry.goalAmount} €
            </div>
            <div className="goal-body">
              <h5 className="goal-card-titles">Monthly goal</h5>
              {entry.monthlyGoalAmount} €
            </div>
            <div className="goal-body">
              <h5 className="goal-card-titles">Goal reached in</h5>
              {calcGoalReachTime(entry.goalAmount, entry.monthlyGoalAmount)} month(s).
            </div>
            <div className="goal-body">
              <h5 className="goal-card-titles">Set on</h5>
              {entry.date}
            </div>
          </div>)
        )
      }
    </div>
  );
}
  export default Goals;