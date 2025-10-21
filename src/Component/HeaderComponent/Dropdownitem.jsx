import { DropdownItem, DropdownMenu } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ setIslog, user }) => {
  return (
    <DropdownMenu
      aria-label="Profile Actions"
      variant="flat"
      className="transition-background delay-1000"
    >
      <DropdownItem key="profile" className="w-40 h-14 gap-2 ">
        <Link to="/profile" className=" hover:text-blue-300 text-blue-300">
          <p className="font-semibold">My Profile</p>
          <p className="font-semibold">{user.email}</p>
        </Link>
      </DropdownItem>
      {/* <DropdownItem key="settings">My Profile</DropdownItem> */}
      <DropdownItem key="analytics">Analytics</DropdownItem>
      <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
      <DropdownItem key="logout" color="danger" onClick={() => {setIslog(false);
                 localStorage.removeItem("data");

      }}>
        Log Out
      </DropdownItem>
    </DropdownMenu>
  );
};

export default DropDown;
