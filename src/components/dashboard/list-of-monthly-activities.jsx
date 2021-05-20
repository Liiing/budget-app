import '../../scss/dashboard/list-of-monthly-activities.scss';
import { db } from '../../firebase/firebase';
import { auth } from '../../firebase/firebase';
import React, {useState} from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ListOfMonthlyActivities() {
  const dispatch = useDispatch();
  var date = new Date();
  var mm = String(date.getMonth() + 1).padStart(2, '0')
  var yyyy = date.getFullYear();
  var currMonthandYear = mm + yyyy;
  const userId = auth.currentUser.uid; 
  const dbRef = db.ref("users/" + userId + "/expenses/" + currMonthandYear);
  const moneyActivityList = useSelector(state => state.moneyActivityList);

  const [isListEmpty, setListState] = useState(false);
 
  console.log(moneyActivityList);

  fetchUserMoneyActivityEnrties();

  function fetchUserMoneyActivityEnrties() {
    var liist = [];
    dbRef.on('value', (snapshot) => {
      const userObj = snapshot.val();

      if (userObj !== null) {
        Object.keys(userObj).forEach(function(prop) {
            liist.push(userObj[prop]);
        });
        dispatch({type: 'moneyActitivtyList/updateList', list: liist});  
      } else {
        setListState(true);
        return false;
      }
    });
  }

  const [render, reRender] = useState("");

  useEffect(() => {
    setTimeout(() => {
      reRender("Updated");
    }, 100);
  }, []);

  

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
            <div className="list-item amount-container">
              {entry.amount}
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