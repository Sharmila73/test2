 export const actionTypes={
    POSTMESSAGE:'posts'
    // FETCHCOMMENTS:'comments'
}
export const appPost=(posts)=>(dispatch)=>{
    return dispatch({
        type:actionTypes.POSTMESSAGE,
        postsdata:posts
    })
}
// export const fetchMessage=(comments)=>(dispatch)=>{
//     return dispatch({
//         type:actionTypes.FETCHCOMMENTS,
//         postcomments:comments
//     })
//}














































