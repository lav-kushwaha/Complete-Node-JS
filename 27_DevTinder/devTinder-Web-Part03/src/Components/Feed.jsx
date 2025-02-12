import React, { useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../utils/Constant'
import {addFeed} from '../utils/feedSlice'
import {useDispatch, useSelector} from "react-redux"
import UserCard from "./UserCard"

const Feed = () => {
  
  const dispatch = useDispatch();
  const feed = useSelector((store)=>store.feed);
  
  const fecthData = async()=>{
   if(feed) return;
   try{
    const feedData = await axios.get(BASE_URL+ "/feed",{
      withCredentials:true,
    });
    // console.log(feedData.data);
    dispatch(addFeed(feedData?.data));

   }catch(err){
     console.error("ERROR"+err.message);
   }
  }

  useEffect(()=>{
    fecthData();
  },[]);

  return (
    <>
    <div className="flex justify-center mt-5 gap-5">
    {
      feed && feed.map((user)=>(
        <UserCard key={user._id} user={user}/>
      ))
    }
    </div>
    </>
  )
}

export default Feed