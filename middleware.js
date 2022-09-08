const { createStore,applyMiddleware} = require("redux"); //whenever we want to use any middleware we have to import the applyMiddleWare from redux
const { default: logger } = require("redux-logger");  //importing the logger from redux-logger


//product constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = "ADD_PRODUCT";



//product states
const initialProductState = {
    products : ['suger','salt'],
    numberofProducts :2,
}

//product actions
const getProducts = () =>{
    return {
        type : GET_PRODUCTS, 
    }
}
const addProducts = (product) =>{
    return {
        type : ADD_PRODUCT, 
        payload : product,
    }
}

//productReducer

const productReducer =(state=initialProductState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS :
            return {
                ...state,
            }
        case ADD_PRODUCT :
            return {
                //here we updatings all property of the states we dont need to use ...states.spred operator
                products : [...state.products,action.payload],
                numberofProducts : state.numberofProducts +1,

            }
    
        default:
            return state;
    }
}



//store
const store = createStore(productReducer,applyMiddleware(logger)); //here we use the middleware into store inside applyMiddleWare function
store.subscribe (()=>{
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProducts('oil'));

