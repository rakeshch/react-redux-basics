
//using node.js
const redux = require('redux');
const createStore = redux.createStore; //not executing, so no () in the end

const initialState={
    counter: 0
}

// Reducer
const reducer = (state = initialState, action)=>{
    if(action.type == "INC_COUNTER"){
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type == "ADD_COUNTER"){
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
}

// Store
const store = createStore(reducer);
console.log(store.getState());

//Subscription
store.subscribe(() =>{
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type:"INC_COUNTER"});
store.dispatch({type:"ADD_COUNTER", value: 10});
console.log(store.getState());