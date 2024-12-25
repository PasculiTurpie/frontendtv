import React from "react";
import "./Admin.css";
import Login from "../Login/Login";
import Register from "../Register/Register";


const Admin = () => {
 
  return (
    <>
    <div className="conatiner-manager">
        <Login />
        {/* <Register /> */}
    </div>
    </>
  );
};

export default Admin;
