import { DropdownItem, DropdownMenu } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const SignandLog = () => {
  return (
    <DropdownMenu
      aria-label="Profile Actions"
      variant="flat"
      color="secondary"
      className="w-44"
    >
      <DropdownItem key="help_and_feedback" color="primary" isBordered>
        {" "}
        <Link to="/signup">
          <div>Signup</div>
        </Link>
      </DropdownItem>
      <DropdownItem key="loginn" isBordered>
        {/* <Link
                      to="/login"
                      state={{ message: "hello header" }}
                      className="p-4"
                    >
                      LogIn
                    </Link> */}
        <Link to="/login">
          <div>Login</div>
        </Link>
        {/* <LogIn  name={e.name}/> */}
      </DropdownItem>
      {/* <DropdownItem>
              <Button onClick={(e)=>{e.preventDefault(); setBtn(true);}} className=" relative">LogIn</Button>
              </DropdownItem> */}
    </DropdownMenu>
  );
};

export default SignandLog;
