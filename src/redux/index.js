import {combineReducers,createStore} from "redux";
import {createPostReducer,secondReducer} from "./reducers/createPostReducer";

 const reducers = combineReducers({
    createPost:createPostReducer,
     createCounter: secondReducer
})

let store = createStore(reducers)

window.store = store

export default store;