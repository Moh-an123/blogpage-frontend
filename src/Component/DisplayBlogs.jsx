import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../backendurl";

const DisplayBlogs = (props) => {
  const [data, setData] = useState(props.data); // { posts: [...] }
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(6);
  const [availability, setAvailability] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const loadMorePosts = async () => {
    
     
     
    try {
      const response = await axios.get(`${url}/blogdata?skip=${skip+limit}&limit=${limit}`);
      const newPosts = response.data; // should be an array of posts
      console.log("Loaded new posts:", newPosts);
//  setSkip(skip + limit);
      // If fewer than limit → means no more posts
      if (newPosts.length < limit) setAvailability(true);

      // Append the new posts to existing ones safely
      setData(prev => ({
        posts: [...prev.posts, ...newPosts]
      }));

      // Update skip for next load
     
      
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoaded(false);
      console.log(skip);
      setTimeout(() => setLoaded(true), 100);
      
    }
  };

  // Display posts
  const postsToDisplay = data.posts || [];

  const postElements = postsToDisplay.map(post => (
    <li key={post._id+post.author_id} className={`h-[450px] transform transition-transform duration-500 ${loaded ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-5 translate-y-5"}`}>
      <Link to={`/blog/${post._id}`} className="flex flex-col text-slate-50">
        <Card className="py-1 scrollbar-hide rounded-xl hover:box">
          <CardHeader className="block">
            <h1 className="line-clamp-1">{post.post_title}</h1>
            <h4>#{post.category}</h4>
          </CardHeader>
          <CardBody>
            <div className="line-clamp-3">
              <p className="basis-1/2">{post.post_body}</p>
            </div>
          </CardBody>
          <CardFooter className="content-center justify-center w-full mx-auto text-center">
            <Image
              alt="Card background"
              className="object-contain w-64 overflow-y-hidden text-center h-60 rounded-xl scrollbar-hide hover:scale-x-1100"
              src={
                post.image && post.image.includes("/src")
                  ? post.image
                  : `data:image/jpeg;base64,${post.image}`
              }
            />
          </CardFooter>
        </Card>
      </Link>
    </li>
  ));

  return (
    <div className="p-4 scroll-p-16 scroll-smooth">
      <ul className="grid justify-center grid-cols-1 gap-8 mx-8 my-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {postElements}
      </ul>
      {!availability && (
        <div className="flex justify-center mt-4">
          <Button onClick={()=>{setSkip(skip+limit);loadMorePosts()} }className="text-center bg-orange-600">
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};


export default DisplayBlogs;
