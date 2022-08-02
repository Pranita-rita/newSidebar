import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/sidebar";
import Subheader from "../components/Subheader/Subheader";


export const Settings = () => {
  return (
    <div className="d-flex">
      <div>
        <Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <Subheader title="Settings"/>

       {/* <h5>Settings</h5> */}
      </div>
    </div>
  );
};
