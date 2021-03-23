/**
 * Step 1) Setup Action
 **/
const BUY_CAKE = "BUY CAKE";

// Action Creator
function buyCake() {
  return {
    // Define Action
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}

/**
 * Step 2) Setup Reducer
 * (previousState, action) => newState
 **/
const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
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

/**
 * Step 3) Setup Redux Store
 **/
// import/require redux
const redux = require("redux");
// create store instance
const createStore = redux.createStore;

// Note: store holds the application state
const store = createStore(reducer);

// Access state via getState()
console.log("Initial State", store.getState());

// Register + Unregister listeners
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

// Invoke the action creator in order to return an action
// Allow store to be updated
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

// Unsubscribe from listeners
unsubscribe();

/**
 * Run Code
 **/
// node index.js