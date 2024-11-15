const parent=React.createElement("div",{id:"tcontainer"},
  React.createElement("table",{id:"time",border:"6px"},[
    [
      React.createElement("tr",{},[
        React.createElement("th",{},"Name"),
        React.createElement("th",{},"RollNo"),
        React.createElement("th",{},"Marks")
      ]
    ),

    // Table data
    [
      React.createElement("tr",{},[
        React.createElement("td",{},"Ashu"),
        React.createElement("td",{},"345"),
        React.createElement("td",{},"230")
      ]
    ),
    
    ]


    ]
    
  ]
  
)
    
)
 const proot=ReactDOM.createRoot(document.getElementById("root"))
 proot.render(parent)