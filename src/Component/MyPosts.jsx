import React, { useEffect, useState } from "react";
import Data from "../Json/Data.json";
import axios from "axios";
import DisplayBlogs from "./DisplayBlogs";
import url from "../backendurl";
import { Link } from "react-router-dom";
import { CircularProgress } from "@nextui-org/react";
const MyPosts = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const[isLoading,setIsLoading]=useState(true);
  const [data, setData] = useState(Data);
  //  const handleUser=async()=>{
  //        try{
  //         const respone=await axios.post('http://localhost:3003/createauthor',{author_id:102});
  //       console.log(respone.data);

  //       }catch(error){
  //         console.log(error);

  //        }
  //  }
  const value = JSON.parse(localStorage.getItem("data"));

  if(value===null)
  {
    return(
      <div className="flex flex-row justify-center h-[50dvh] items-center">
      <h1>
        <Link to='/login' className="text-blue-700 ">Login o</Link>
        </h1><br/>
       
        <br/>
<h1>        <Link to='/signup' className="text-blue-700 ">r Signup</Link>
      </h1>
      </div>
    )
  }
  
//  console.log(value.author_id);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${url}/getauthorpost/${value.author_id}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
    if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full pt-14 h-dvh">
        <CircularProgress />
      </div>
    );
  }
  if (data && data.length > 0)
    return (
      <div className="pt-16">
        {/* <button onClick={handleUser}>Click</button> */}

        <DisplayBlogs data={{ posts: data }} />
      </div>
    );
  else 
    
    return <h1 className="h-[100dvh] flex items-center justify-center text-4xl">
      No post Available <br/><Link to="/createpost" className="px-5 text-blue-500 underline"> Create Your first Post</Link></h1>;
};
export default MyPosts;
