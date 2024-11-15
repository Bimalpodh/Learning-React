/*
*<div>
*  <div>

 *   <h1></h1>
  
*  </div>
*</div>

*/
const parent=React.createElement("div",{id:"parent"},
[
  React.createElement
  (
    "div",{id:"child"},
    [
      React.createElement("h1",{},"i\'m heading"),
      React.createElement("h1",{},"i\'m heading2"),
    ]
  ),
  React.createElement("div",{id:"child2"},
    [
      React.createElement("h1",{},"i\'m heading"),
      React.createElement("h1",{},"i\'m heading2"),
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



