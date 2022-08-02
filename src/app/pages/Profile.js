import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/sidebar";
import Subheader from "../components/Subheader/Subheader";


export const Profile = () => {
  return (
    <div className="d-flex">
      <div>
        <Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <Subheader title="Analysis"/>
       {/* <h5>Analysis</h5> */}
      </div>
    </div>
  );
};
