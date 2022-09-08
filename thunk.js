// async actions - api calling
// api url - https://jsonplaceholder.typicode.com/todos
// middleware - redux-thunk
// axios api

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

//constants

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
const API_URL ="https://jsonplaceholder.typicode.com/todo";

//states
const initialTodosState ={
    todos : [],
    isLoading : false,
    error: null,
} 

//actions
const getTodosRequest = () =>{
    return {
        type : GET_TODOS_REQUEST,
    }
}
const getTodosFailed = (error) =>{
    return {
        type : GET_TODOS_FAILED,
        payload : error,
    }
}
const getTodosSuccess = (todos) =>{
    return {
        type : GET_TODOS_SUCCESS,
        payload : todos,
    }
}

//reducers
const todosReducer = (state= initialTodosState,action) =>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
           return {
            ...state,
            isLoading:true,
           }
    
        case GET_TODOS_SUCCESS:
           return {
            ...state,
            isLoading:false,
            todos : action.payload
           }
    
        case GET_TODOS_FAILED:
           return {
            ...state,
            isLoading:false,
            error : action.payload,
           }
    
        default:
            return state;
    }
}

//async action creator
const fetchData =()=>{ //thunk helps to return a funtion from a function
    return (dispatch)=>{
        dispatch(getTodosRequest());
        axios.get(API_URL)
        .then(res=>{
            // console.log(res.data);
            const todos = res.data;
            const title = todos.map(todo=>todo.title);
            // console.log(title);
            dispatch(getTodosSuccess(title));
        })
        .catch((error)=>{
            // console.log(error.message);
            const errorMessage = error.message;
            dispatch(getTodosFailed(errorMessage));
        })
    }
}

//store
const store = createStore(todosReducer,applyMiddleware(thunk));

store.subscribe (()=>{
    console.log(store.getState());
});

store.dispatch(fetchData());