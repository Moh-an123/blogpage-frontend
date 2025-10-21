import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Data from "../Json/Data.json";
import axios from "axios";
const Blogs = () => {
  const { id } = useParams();
  console.log(Data.posts);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`${url}/getdata/${id}`);
        
        const response = await axios.get(`${url}/getdata/${id}`);
        console.log("Data"+response.data);

        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (loading)
    return <h1 className="mx-auto text-center h-dvh pt-60">Loading...</h1>;
  return (
    <>
      {data && (
        <Card className=" w-1/2 my-10 origin-center mx-auto flex flex-col  !font-mono ">
          <CardHeader className="">
            <Link to="/" className="text-slate-50">
              <Button>
                <GoArrowLeft />
              </Button>
            </Link>
            <h2 className="pl-8 underline underline-offset-4 ">
              {data.post_title}
            </h2>
          </CardHeader>
          <CardBody>
            <p className="p-5 leading-7 ">
              {data.post_body} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas asperiores similique laborum quod id
              distinctio sit praesentium cumque molestiae? Cupiditate laboriosam
              voluptatem cumque odit voluptatibus, iste at ex quas rerum! Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              suscipit consectetur sed similique dolore recusandae rerum dolorum
              harum, repudiandae accusantium officiis tempora natus aliquam
              excepturi animi quam culpa! Odit, eum. Quod consectetur illo enim,
              vitae accusantium reiciendis sint soluta atque voluptatem, officia
              nisi tenetur accusamus possimus porro consequuntur delectus nemo
              voluptatibus aut neque quam ducimus nostrum error architecto?
              Incidunt, fugit? Voluptatum, aspernatur? Sunt incidunt quisquam
              odio cumque tempora architecto, eum earum, obcaecati, provident
              ducimus impedit quis! Atque eius commodi natus totam deserunt quos
              quam saepe iste autem. Doloribus, nisi impedit!
            </p>
            <div className="flex items-center justify-center">
              <Image
                alt="image"
                src={data.image}
                className="min-w-full rounded-xl"
              />
            </div>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default Blogs;
