import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const initialState = {
  moneyActivityList: [],
};

const store = createStore(
    rootReducer,
    applyMiddleware(
      loggerMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'moneyEntry/addEntry':
        return onAddMoneyEntry(state);
    case 'moneyEntry/deleteEntry':
        return onDeleteMoneyEntry(state, action.id);
    case 'moneyActitivtyList/updateList':
        return onDashBoardLoad(state, action.list);
    default:
        console.warn('Action not found.', action);
        return state;
  }
}

function onDashBoardLoad(state, list) {
 var copiedMoneyActivityList = [...state.moneyActivityList];

  copiedMoneyActivityList = copiedMoneyActivityList.concat(list);
  state.moneyActivityList = copiedMoneyActivityList;


  return state;
}

function onAddMoneyEntry(state, entry) {
  var copiedMoneyActivityList = [...state.moneyActivityList];

  copiedMoneyActivityList.push(entry);
  state.moneyActivityList = copiedMoneyActivityList;

  return state;
}

function onDeleteMoneyEntry(state, entryId) {
  var copiedMoneyActivityList = [...state.moneyActivityList];
  const deleteEntryIndex = findEntryIndexById(state, entryId);

  copiedMoneyActivityList.splice(deleteEntryIndex, 1);
    state.moneyActivityList = copiedMoneyActivityList;

    return state;
}


function findEntryIndexById(state, entryId) {
  return state.moneyActivityList.findIndex(entry => entry.id === entryId);
}

export default store;