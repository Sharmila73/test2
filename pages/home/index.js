import React from "react";
import axios from "axios";
import {useDispatch} from 'react-redux';
import {appPost} from '../../redux/reducers/appAction';
import {useSelector} from 'react-redux'
import styles from '../../styles/Home.module.css'
function index(props){
    const postdata=props.posts;
    const dispatch=useDispatch();
    dispatch(appPost(postdata));
    const fetchdatafromRedux=useSelector(state=>state.posts.postsdata)
    return(
        <div className={styles.container}>
           learn redux
           {fetchdatafromRedux.map(post=>{
               return(
                   <div>
                       ID:{post.id}
                       <br/>
                       USERID:{post.userId}
                       <br/>
                       TITLE:{post.title}
                   </div>
               )
           })}
        </div>
    );
}
 export const getServerSideProps=async()=>{
    const[posts]=await Promise.all([fetchPosts()])
    return{
        props:{posts}
    }

}
function fetchPosts(){
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
    return(res.data)?res.data:[]
    }).catch(err=>{})

    
}
//http://jsonplaceholder.typicode.com/posts
export default index;