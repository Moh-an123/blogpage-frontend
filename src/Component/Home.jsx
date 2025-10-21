import React, { useState, useEffect, useContext, useRef } from "react";
import Displayblogs from "./DisplayBlogs";
import { CircularProgress } from "@nextui-org/react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import url from "../backendurl";
function Home() {
  
  
   const [isLoading, setIsLoading] = useState(true);
   
  const { Log, userData, setcheck } = useOutletContext();
  console.log(userData);
  const [data, setData] = useState([]);
 const [startpost,setStartpost]=useState(0);
 const [endpost,setEndpost]=useState(6);
 
  const [error, setError] = useState(null);
  const iteration = useRef(0);
  useEffect(() => {
    iteration.current = iteration.current + 1;
    console.log(iteration);

    const fetchData = async () => {
      try {
        console.log(startpost,endpost);
        
        const response = await axios.get(`${url}/blogdata?skip=${startpost}&limit=${endpost}`);
        // console.log(`${url}/blogdata`);
        //  console.log(response.data.length);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      } finally {
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

  if (error) {
    return <div className="flex items-center justify-center w-full pt-14 h-dvh">Error: {error}</div>;
  }
  if (data && data.length > 0) 
    return<>
  

     <Displayblogs data={{ posts: data }} /></>;

  return <h1 className="flex items-center justify-center w-full pt-14 h-dvh "> No Posts Available</h1>;
}

export default Home;
