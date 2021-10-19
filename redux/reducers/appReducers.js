import {actionTypes} from './appAction'

const initializePost={
 postsdata:[]
 //postcomments:[] 
}
const appReducers=(state=initializePost,action)=>{
    switch(action.type){
        case actionTypes.POSTMESSAGE:
          return Object.assign({},state,{
            postsdata:(action.postsdata)?action.postsdata:[]
           });
        //  case actionTypes.FETCHCOMMENTS:
        //   return Object.assign({},state,{
        //     postcomments:(action.comments)?action.comments:[]
        //    })
        default:
             return (state,action);
    }
}
export default appReducers;