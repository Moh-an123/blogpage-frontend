import React, { useCallback, useContext, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import url from "../../backendurl";
const SignUp = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { Log, userData, setcheck } = useOutletContext();

  const handleChange = useCallback((e) => {
    // console.log("iam call back");
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);
  const unnused = () => {
    console.log("i am useless");
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log("i am in submit");
    e.preventDefault();
    console.log(formdata);

    try {
      const response = await axios.post(
        `${url}/signup`,
        formdata
      );

      setcheck(
        formdata.name,
        formdata.password,
        formdata.email,
        response.data.author_id
      );
      console.log(response.data);
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="py-10 px-20 flex justify-center items-center w-full">
      <form
        autoComplete="off"
        className="w-full max-w-[600px] p-10 bg-black text-slate-100 rounded-lg border-1 shadow"
        aria-label="signup-form"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-10 text-3xl font-bold text-center">Sign Up Form</h2>

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="name" className="text-sm font-medium cursor-pointer">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your name..."
            value={formdata.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label htmlFor="email" className="text-sm font-medium cursor-pointer">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your email address..."
            value={formdata.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col items-start mb-5 gap-y-3">
          <label
            htmlFor="password"
            className="text-sm font-medium cursor-pointer"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
            placeholder="Enter your password"
            value={formdata.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-end mb-5 text-slate-400">
          <p>Already have an account?</p>
          <Link to="/login" className="text-blue-500 underline">
            Sign In
          </Link>
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]"
        >
          Create an account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
