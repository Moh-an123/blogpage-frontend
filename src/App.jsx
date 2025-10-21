import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";
export default function App() {
  let f = false,
    c = { name: "", password: "", email: "", author_id: "" };


  if (localStorage.getItem("data")) {
    f = true;
    const b = JSON.parse(localStorage.getItem("data"));
    c = {
      name: b.name,
      password: b.password,
      email: b.email,
      author_id: b.author_id,
    };
  }
  const [Log, setLog] = useState(f);
  const [userData, setUserdata] = useState(c);
 
  const handleRefresh = () => {
    window.location.href = "/"; 
  };
  const setcheck = (a, b, c, d) => {
    console.log(a, b, c, d);
    setUserdata({ name: a, password: b, email: c, author_id: d });
    localStorage.setItem(
      "data",
      JSON.stringify({ name: a, password: b, email: c, author_id: d })
    );
    console.log(Log);
    console.log(userData);
    console.log(JSON.parse(localStorage.getItem("data")));
    setLog(true);

    handleRefresh();
  };
  
  return (
    <>
      <Header Log={Log} user={userData} log={Log} />
      <Outlet context={{ Log, userData, setcheck, setLog }} />
      <Footer />
    </>
  );
}
