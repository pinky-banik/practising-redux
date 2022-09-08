const {createStore} = require("redux");

//defining const
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
// state

const initialCounterState ={  //first we initialize the state in a variable
    count : 0
}

const initialUsersState ={  //initialize different state in different variable
    users : [{name:"pinky banik"}],
}

//action - Object- type ,payload

//INCREMENT COUNTER
const incrementCounter =()=>{ // we usually create function and return the actions
    return {
        // type : 'INCREMENT',
        type : INCREMENT, //for good practise we define the action string in the top so that.. we may have to use the string multiple times, so this technique decreases the chance of spelling mistake 
    }
};



//DECREMENT COUNTER

const decrementCounter =()=>{ 
    return {
        type : DECREMENT 
    }
};

const incrementCounterByValue = (value) =>{
    return {
        type : INCREMENT_BY_VALUE,
        payload: value
    }
}


{/**************  This is how we declare the states****************/} 

//create reducer for counter


{/* Reducer is simply is a pure function. pure function means which fuction takes input and definitely give outputs,so the task for reducer is to handle the logic we have and update the states */}

const counterReducer =(state = initialCounterState,action) => {
    switch (action.type) {
        case INCREMENT:
           return {
            ...state, // if we have multiple actions then we just get all states we only changing the count action
            count : state.count + 1,
           }
        case DECREMENT:
            return {
                ...state,
                count : state.count -1,
            }
            
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count : state.count + action.payload,
            }
     
        default:
            state;
    }
}

// 1. state
// 2. dispatch action (increment and decrement)
// 3. reducer 
// 4. store - 
{
    /*
     store has 3 method : 
     
     1. getState()=> we can get the states
     2. disPatch()=> we can dispatch the actions
     3. subscribe()=> we can subscribe from view or index.js file
    */
}

//create store

const store = createStore(counterReducer); // required createStore from redux on the top

store.subscribe(()=>{
    console.log(store.getState());
})

//dispatch action
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(5));

