const { createStore, combineReducers } = require("redux");

//product constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = "ADD_PRODUCT";

//cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

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
//Cart states
const initialCartState = {
    cart : ['suger'],
    numberofProducts :1,
}
//cart actions
const getCart = () =>{
    return {
        type : GET_CART_ITEMS, 
    }
}
const addCart = (product) =>{
    return {
        type : ADD_CART_ITEMS, 
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


//cartReducer
const cartReducer =(state=initialCartState,action)=>{
    switch (action.type) {
        case GET_CART_ITEMS :
            return {
                ...state,
            }
        case ADD_CART_ITEMS :
            return {
                //here we updatings all property of the states we dont need to use ...states.spred operator
                cart : [...state.cart,action.payload],
                numberofProducts : state.numberofProducts +1,

            }
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({ //combining the reducers
    productR : productReducer,
    cartR : cartReducer,
})

//store
// const store = createStore(productReducer);
const store = createStore(rootReducer); // here we can only use one reducer... so we have to combine the reducers and use it here
store.subscribe (()=>{
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProducts('oil'));
store.dispatch(getCart());
store.dispatch(addCart('water'));

