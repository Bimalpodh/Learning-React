import { useEffect, useState } from "react";

const User = ({}) => {
  const [count,setCount]=useState(0);

  useEffect(()=>{
    //API Call
    const time=setInterval(()=>{
      console.log("Hello");
    },1000)
    return ()=>{
      console.log("useEffect is returned");
      clearInterval(time)
      
    }
  },[])

  return (
    <div className="user-card">
      <h3>count: {count}</h3>
      <h2>Name: Bimal</h2>
      <h3>Location: Kesinga</h3>
      <h4>Contact: bimalpodh07@gmail.com</h4>
      <button onClick={()=>{
        const count1=count+1
        setCount(count1)
      }}>CountChange</button>
    </div>
  );
};

export default User;
