import UserClass from "./UserClass";
import User from "./User";
import React from "react";
class About extends React.Component{
  constructor(props){

    console.log("parent connstructor");
    
    super(props)
  }

  componentDidMount(){
    console.log("parent component did mount");
    
  }

  render(){
    console.log("parent Render");
    
    return (
      <div className="About-Container">
        <h1>About</h1>
        <h2>This is a Delicious website</h2>
        <User/>
        {/* <UserClass  name={"first"} location={"Kalahandi"}/> */}
      </div>
    );
  }
}

/*
- Parent Constructor
- Parent Render
  - child(1) Constructor
  - child(1) Render 

  - child(2) Constructor
  - child(2) Render 
<DOM UPDATEd - IN SINGLE BATCH>
  -child(1) ComponentDIdMOunt
  -child(2) ComponentDIdMOunt
- Parent ComponentDidMount
*/ 
export default About;
