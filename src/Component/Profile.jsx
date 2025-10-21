import { AvatarIcon, Card, CardBody, CardHeader } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "../backendurl";

const Profile = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const [Data, setData] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${url}/getprofile/${data.author_id}`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center p-20 items-row">
      <div className="bg-black shadow-xl ">
        <Card className="flex flex-col items-center justify-center ">
          <CardHeader className="flex items-center justify-center prof">
            {/* <img src={image1} alt="bg-image" className="" /> */}
           
          </CardHeader>
          <div className="flex flex-row items-center justify-center h-28 w-28">
              <AvatarIcon />
            </div>
          <CardBody className="flex flex-col items-center justify-center gap-8 mx-auto">
            <div className="w-full">
              {/* Bio Section */}
            
                <div className="p-4 mb-6 bg-black border-l-4 border-orange-500 rounded-lg">
                <h3 className="mb-2 text-lg font-semibold text-white">Bio</h3>
                <p className="text-white">{data?.bio || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta eligendi adipisci mollitia deleniti deserunt est quisquam aspernatur. Sequi iure minima repellat consequatur voluptas inventore nihil ex? Voluptatum, in possimus.
             Voluptate, ipsum officiis neque adipisci quod cum alias praesentium ullam quisquam aliquam! Odio dignissimos incidunt sed, deleniti libero tenetur corporis illum quasi, quae quam odit natus cum est repudiandae aperiam.`}</p>
              </div>

              <h1 className="flex items-center gap-8 m-2">
                <span className="min-w-[120px]">Name</span>
                <span>:</span>
                <span className="inline-block p-2 border-1 w-80 border-blue-50">{data.name}</span>
              </h1>
              
              <h1 className="flex items-center gap-8 m-2">
                <span className="min-w-[120px]">Email</span>
                <span>:</span>
                <span className="inline-block p-2 border-1 w-80 border-blue-50">{data.email}</span>
              </h1>
              
              <h1 className="flex items-center gap-8 m-2">
                <span className="min-w-[120px]">Author id</span>
                <span>:</span>
                <span className="inline-block p-2 border-1 w-80 border-blue-50">{data.author_id}</span>
              </h1>

            
                <h1 className="flex items-center gap-8 m-2">
                  <span className="min-w-[120px]">Location</span>
                  <span>:</span>
                  <span className="inline-block p-2 border-1 w-80 border-blue-50">{Data?.location||"0"}</span>
                </h1>
           

              
                <h1 className="flex items-center gap-8 m-2">
                  <span className="min-w-[120px]">Website</span>
                  <span>:</span>
                  <span className="inline-block p-2 border-1 w-80 border-blue-50">{Data?.website||"0"}</span>
                </h1>
             

                <h1 className="flex items-center gap-8 m-2">
                  <span className="min-w-[120px]">Total posts</span>
                  <span>:</span>
                  <span className="inline-block p-2 border-1 w-80 border-blue-50">{Data?.no_of_posts||"0"}</span>
                </h1>

             
                <h1 className="flex items-center gap-8 m-2">
                  <span className="min-w-[120px]">Joined Date</span>
                  <span>:</span>
                  <span className="inline-block p-2 border-1 w-80 border-blue-50">{Data?.date||0}</span>
                </h1>
            
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Profile;