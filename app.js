/*
*<div>
*  <div>

 *   <h1></h1>
  
*  </div>
*</div>

*/
import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement("div",{id:"parent"},   //parent=object
[
  React.createElement
  (
    "div",{id:"child"},
    [
      React.createElement("h1",{},"This is namastey react 🚀"),
      React.createElement("h1",{},"Namastey Bhai kaise ho🚀"),
      React.createElement("h1",{},"wht are you doing🚀"),
    ]
  ),
  React.createElement("div",{id:"child2"},
    [
      React.createElement("h3",{},"YOu are Bimal"),
      React.createElement("h1",{},"You Are v Noughty"),
    ]
    )
]
);
console.log(parent)
const proot=ReactDOM.createRoot(document.getElementById("root"))
proot.render(parent);






// const heading= React.createElement("h1", {id:"Head"},"hello Bimal")
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)



