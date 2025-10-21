import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import DisplayBlogs from "./DisplayBlogs";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CircularProgress,
  Image,
} from "@nextui-org/react";
import data2 from "../Json/Data.json";
import axios  from "axios";
import url from "../backendurl";
const Category = () => {
  const[isLoading,setIsLoading]=useState(true);
   const[isLoading1,setIsLoading1]=useState(true);
  const [data, setData] = useState(data2);

  const category = [
    "Programming",
    "Web Development",
    "Artificial Intelligence",
    "Data Science",
    "Security",
    "Healthcare",
    "Business",
    "Ethics",
    "Finance",
    "Technology",
  "Health & Fitness",
  "Travel",
  "Lifestyle",
  "Arts & Culture",
  "Environment",
  "Personal Development",
  "Food & Cooking",
  ];
  console.log(category);

  // const handleClick=async()=>{
  //   try{
  //     const response=await axios.post("http://localhost:3003/bulkupload");
  //       console.log(response.data);
  //       //setCat(response.data)
  //   }catch(error){
  //   console.log(error.message);
  // }
  // };
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 useEffect(()=>{
  const fetchdata=async()=>{
  try {
    setIsLoading(true)
    const response = await axios.get(`${url}/blogdata/${category[11]}`);
    console.log(response.data);
    setData(response.data);
  } catch (error) {
    console.log(error.message);
  }finally{
    setIsLoading(false);
  }
}
fetchdata();
 },[])
  const handleCategory = async (d) => {
    setIsLoading1(true);
    console.log(d);
    setData();
    try {
      const response = await axios.get(`${url}/blogdata/${d}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    }finally{
      setIsLoading1(false)
    }
  };
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full pt-14 h-dvh">
        <CircularProgress />
      </div>
    );
  }
  if(category&&category.length>0)
  return (
    <>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-20 px-10 my-32">
        {
          category.map((d) => {
            return (
              <li key={`${d}+${d}`}>
                <Link
                  to={`/category#${d.toLowerCase()}`}
                  className="px-6 py-2 bg-slate-50/15 text-slate-50 backdrop-blur-2xl rounded-xl hover:scale-110 hover:shadow-sm hover:backdrop-blur-md hover:shadow-slate-200"
                  onClick={() => handleCategory(d)}
                >
                  {d}
                </Link>
              </li>
            );
          })}
      </ul>
{/* <Button onClick={handleClick}>Change</Button> */}
      {
      data && data.length ? (
        <DisplayBlogs data={{ posts: data }} />
      ) : 
      isLoading1?
      (
          <div className="flex items-center justify-center w-full pt-14 h-dvh">
        <CircularProgress />
      </div>
      ):
      (
        <>No Posts Available
        </>
      )}
    </>
  );
};

export default Category;
