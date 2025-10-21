import { NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";


const Tabs = (log) => {
  //console.log(log.log);
  
 // log=false
  const Auth=()=>{
    console.log(log);
    
    if(log.log)
    return(
  <>
  <NavbarItem>
          <Link
            color="foreground"
            to="/myposts"
            className="transition duration-500 hover:text-orange-300 hover:scale-110 hover:border-b-2"
          >
            My Post
          </Link>
        </NavbarItem><NavbarItem>
            <Link
              color="foreground"
              to="/createpost"
              className="transition duration-500 hover:text-orange-300 hover:scale-110 hover:border-b-2"
            >
             Create
            </Link>
          </NavbarItem>
  </>
    )
    else 
      return<></>;
  }
  return (
   <NavbarContent justify="start">
      <NavbarBrand className="mr-4">
        <Link to="/hb">
          <h1 className="font-mono text-slate-50">Tri-infinite</h1>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-6 sm:flex md:flex lg:flex xl:flex">
        <NavbarItem>
          <Link
            color="foreground"
            to="/"
            className="transition duration-500 hover:text-orange-300 hover:scale-110 hover:border-b-2"
          >
            Blogs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            to="/category"
            className="transition duration-500 hover:text-orange-300 hover:scale-110 hover:border-b-2"
          >
            Category
          </Link>
        </NavbarItem>
        
     <Auth />
      </NavbarContent>
    </NavbarContent>
  );
};

export default Tabs;
