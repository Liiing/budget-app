import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';

// Define logger handler
const loggerMiddleware = createLogger();

// Define our main redux states and save it to store
const initialState = {
  moneyActivityList: [],
  goalList: [],
  baseBudget: 0.0,
};

// Create the store
const store = createStore(
    rootReducer,
    applyMiddleware(
      loggerMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Create reducer function which checks for changes in different states
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'moneyEntry/addEntry':
        return onAddMoneyEntry(state);
    case 'moneyEntry/deleteEntry':
        return onDeleteMoneyEntry(state, action.id);
    case 'moneyActitivtyList/updateList':
      console.log('LIST')
        return onDashBoardLoad(state, action.list);
    case 'goalList/updateList':
        return onSavingsLoad(state, action.list);
    case 'baseBudget/setBaseBudget':
        console.log('SET BUDGET')
        return setBaseBudget(state, action.baseBudget);
    default:
        console.warn('Action not found.', action);
        return state;
  }
}

// Function to copy and return current activity list
function onDashBoardLoad(state, list) {
 var copiedMoneyActivityList = [...state.moneyActivityList];

  copiedMoneyActivityList = list;
  state.moneyActivityList = copiedMoneyActivityList;

  return state;
}

// Function to add a new activity entry to state
function onAddMoneyEntry(state, entry) {
  var copiedMoneyActivityList = [...state.moneyActivityList];

  copiedMoneyActivityList.push(entry);
  state.moneyActivityList = copiedMoneyActivityList;

  return state;
}

// Function to delete activity list entries
function onDeleteMoneyEntry(state, entryId) {
  var copiedMoneyActivityList = [...state.moneyActivityList];
  const deleteEntryIndex = findEntryIndexById(state, entryId);

  copiedMoneyActivityList.splice(deleteEntryIndex, 1);
    state.moneyActivityList = copiedMoneyActivityList;

    return state;
}

// Function to copy and return current savings list
function onSavingsLoad(state, list) {
  var copiedGoalList = [...state.goalList];
 
  copiedGoalList = list;
   state.goalList = copiedGoalList;
 
   return state;
 }

 function setBaseBudget(state, baseBudget) {

   return {
     ...state,
     baseBudget: baseBudget
   }
 }

function findEntryIndexById(state, entryId) {
  return state.moneyActivityList.findIndex(entry => entry.id === entryId);
}

export default store;