/**
 * Step 1) Setup Action
 **/
const BUY_CAKE = "BUY CAKE";
const BUY_ICE_CREAM = "BUY ICE CREAM";

// Action Creator
function buyCake() {
  return {
    // Define Action
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
  };
}

/**
 * Step 2) Setup Reducer
 * (previousState, action) => newState
 **/
// const initialState = {
//   numberOfCakes: 10,
//   numberOfIceCreams: 7,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCakes: state.numberOfCakes - 1,
//       };
//     case BUY_ICE_CREAM:
//         return {
//             ...state,
//             numberOfIceCreams: state.numberOfIceCreams - 1,
//         }
//     default:
//       return state;
//   }
// };

/**
 * Step 2.1) Setup MULTIPLE Reducer
 * (previousState, action) => newState
 **/
const initialCakeState = {
  numberOfCakes: 11,
};
const initialIceCreamState = {
  numberOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    default:
      return state;
  }
};

/**
 * Step 3) Setup Redux Store
 **/
// import/require redux
const redux = require("redux");
// create store instance
const createStore = redux.createStore;

// COMBINE MULTIPLE REDUCERS
const combineReducers = redux.combineReducers;
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

/**
 * 4 Steps to apply Middleware (see below)
 **/
// import/require logger middleware
// Step 0) npm i redux-logger
// Step 1) Import Middleware
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// Step 2) Pass in applyMiddleware middleware as the 2nd parameter to store
// Step 3) Add logger as the middleware being passed into applyMiddleware. Note: you can add as many middlewares here as required for app
// UPDATE STORE FOR MULTIPLE REDUCERS
const store = createStore(rootReducer, applyMiddleware(logger));

// Note: store holds the application state
// const store = createStore(reducer);

// Access state via getState()
console.log("Initial State", store.getState());

// Register + Unregister listeners
const unsubscribe = store.subscribe(() => {
  // Console log below no longer needed now that we have added the redux-logger middleware
  // console.log("Updated State", store.getState());
}); 

// Invoke the action creator in order to return an action
// Allow store to be updated
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

// Unsubscribe from listeners
unsubscribe();

/**
 * Run Code
 **/
// node index.js
