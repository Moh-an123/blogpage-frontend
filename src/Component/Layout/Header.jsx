import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  Navbar,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  AvatarIcon,
} from "@nextui-org/react";

// import CContext from "../components/CContext";
import Searchbar from "../HeaderComponent/Searchbar";
import Tabs from "../HeaderComponent/Tabs";
import SignandLog from "../HeaderComponent/SignandLog";
import DropDown from "../HeaderComponent/Dropdownitem";
import { useOutletContext } from "react-router-dom";
const Header = ({Log,user,log}) => {
 const [islog, setIslog] = useState(Log|0);
  const [userData,setUserdata]=useState(user);
 console.log(Log);
  // setIslog(Log)
  console.log(userData);
  console.log(islog);

  return (
    <>
      <Navbar
        isBordered
        className="h-12 m-auto sm:w-full md:w-4/5 lg:w-3/4 xl:w-8/12 rounded-3xl bg-slate-50/15 text-slate-50 backdrop-blur-lg top-2"
      >
        <Tabs log={log}/>
        <NavbarContent as="div" className="items-center gap-10" justify="end">
          {/* <Searchbar /> */}
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                icon={<AvatarIcon />}
                classNames={{
                  base: `
                    bg-gradient-to-br from-[#FFB457] to-[#FF705B] 
                    w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10 
                    aspect-ratio-1 
                    flex items-center justify-center rounded-3xl
                    `,
                  icon: `
                     text-slate/80 
                      text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                       `,
                }}
              />
            </DropdownTrigger>
            {islog ? (
              <DropDown setIslog={setIslog} user={userData} />
            ) : (
              <SignandLog />
            )}
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Header;
