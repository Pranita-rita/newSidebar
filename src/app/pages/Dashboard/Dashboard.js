import React from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import Subheader from "../../components/Subheader/Subheader";
import "./Dashboard.css";
export const Dashboard = () => {
  useEffect(() => {
    var inputs = document.querySelectorAll(".file-input");

    for (var i = 0, len = inputs.length; i < len; i++) {
      customInput(inputs[i]);
    }
  }, []);

  const customInput = (el) => {
    const fileInput = el.querySelector('[type="file"]');
    const label = el.querySelector("[data-js-label]");

    fileInput.onchange = fileInput.onmouseout = function () {
      if (!fileInput.value) return;

      var value = fileInput.value.replace(/^.*[\\\/]/, "");
      el.className += " -chosen";
      label.innerText = value;
    };
  };
  return (
    <div className="dashboard d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar />
        <Subheader title="Dashboard"/>

        <textarea
          name="name"
          cols="24"
          rows="4"
          style={{ width: "700px", height: "200px" }}
          className="textClass"
          placeholder="Paste Here..."
        >
          Paste Here....
        </textarea>
        <p className="paraClass">OR</p>
        <div class="file-input">
          <input type="file" />
          <span class="button">Choose</span>
          <span class="label" data-js-label>
            No file selected
          </span>
        </div>
        <button class="buttons button1">Download</button>
      </div>
    </div>
  );
};
