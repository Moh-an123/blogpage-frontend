import React from "react";
const ErrorPage = () => {
  return (
    <div style={{backgroundPosition:'center'}} className="flex flex-col items-center justify-center w-full h-dvh">
      <h1>404 Page found</h1>
      <p>Try Again after few Minutes</p>
          <Link
                  color="foreground"
                  to="/"
                  className="transition duration-500 hover:text-orange-300 hover:scale-110 hover:border-b-2"
                >
                 Click To Home Page
                </Link>
    </div>
  );
};

export default ErrorPage;
