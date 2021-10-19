import { createStore,applyMiddleware } from "redux"
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
// import { composeWithDevTools } from "redux-devtools-extension"
import reducers from "./reducers/rootReducers"
import thunkMiddleWare from "redux-thunk"
const bindMiddleware=(middleware)=>{
    if(process.env.NODE_ENV!=='production'){
        const{composeWithDevTools}=require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware))
    }
     return applyMiddleware(...middleware)
    

}
const reducer=(state,action)=>{
    if(action.type===HYDRATE){
        const nextState={...state,...action.payload}
        return nextState;
        
    }
    
    else{
        return reducers(state,action)

    }
    // return reducers(state,action)
    


}

const initStore=()=>{
    return createStore(reducers,bindMiddleware([thunkMiddleWare]))
}
export const wrapper=createWrapper(initStore)