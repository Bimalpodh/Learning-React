import React from "react";

import UserContext from "../utils/userContext";
class UserClass extends React.Component {
  // to access the properties USING PROPS we  have to call constructor(props) with parameter props and inside we have to call super(props) keyword with parameter props.
  constructor(props){
    super(props);
    // creating state variaable in class base component using "this,state"
    this.state={
      userInfo:{
        name:"Dummy",
        location:"default",
        avatar_url:"https://dummyPhoto",
      }
   
    };
    console.log(props);
    console.log(this.props.name+" child constructor");
    
  }

  // componentDidMount
  async componentDidMount(){

    // this.timer=setInterval(()=>{
    //   console.log("setInterval");
      
    // },1000)

    console.log(this.props.name+" child component DidMount ");
    // API call
    const data= await fetch("https://api.github.com/users/Bimalpodh");
     const json=await data.json();
     this.setState({
      userInfo:json,

     })
     console.log(json);
  }
  componentDidUpdate(){
    console.log("componentDidUpdate");
    
  }
  
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log("willUnmount is called");
    
  }

  render() {

    console.log(this.props.name+" child Render");
    
    // destructing the propertis becoz it is easy to read and convinient
    const{name,location,avatar_url}=this.state.userInfo;
    return(
      <div className="user-card">
      <img  className="h-40 rounded-lg my-1" src={avatar_url}></img>
      <h2>Name: {name}</h2>
      <div>
          LoggedIn:
          <UserContext.Consumer>
          {({LoggedInuser})=>(<h1 className="text-green-600 font-bold">{LoggedInuser}</h1>)}
        </UserContext.Consumer>
        </div>
      <h3>Location:{location}</h3> 
      <h4>Contact: bimalpodh07@gmail.com</h4>
      <h5>Classs Base component</h5>
    </div>
    );
  }
}

export default UserClass;