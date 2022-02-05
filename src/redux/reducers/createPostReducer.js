
let initialState = {
    post:[],
}

let secondState = {
    post:[]
}

//Global state

//ACTION
const CREATE_POST = 'CREATE_POST'
const DELETE_POST = 'DELETE_POST'
const CHANGE_TODO = 'CHANGE_TODO'
const DONE_TODO = 'DONE_TODO'

const MAKE_COUNTER = 'MAKE_COUNTER'

//ACTION

// let arrayMutable = [1,2,3]
// arrayMutable.push(6)
//
// state:[newArray]
// let arrayImmutable = [1,2,3]
// let newArray = [...arrayImmutable,6]


export const createPostReducer = (state = initialState,action) =>{
    switch (action.type){
        case CREATE_POST:
            return{
                ...state,
                post:[...state.post,action.payload]
            }
        case DELETE_POST:
            return{
                ...state,
                post:action.payload
            }
        case CHANGE_TODO:
            return{
                ...state,
                post:action.payload
            }
        case DONE_TODO:
            return{
                ...state,
                post:action.payload
            }
        default:
            return state
    }
}


export const secondReducer = (state = secondState,action) =>{
    switch (action.type){
        case MAKE_COUNTER:
            return{
                ...state,
                post:[...state.post,action.payload]
            }

        default:
            return state
    }
}


// if(action.type===CREATE_POST){
//     return{
//         ...state,
//         post:[]
//     }
// }else if(action.type===DELETE_POST){
//     return{
//         ...state,
//         post:[]
//     }
// } else{
//     return state
// }