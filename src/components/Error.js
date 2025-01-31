import { useRouteError } from "react-router";


const Error=(e)=>{

  const err=useRouteError();
  console.log(err);
  

  return(
    <div>
      <h1>Oops!!!!❌</h1>
      <h3>something went wrong</h3>
      <h3>{err.status} {err.statusText}</h3>
      <h3>{err.data}</h3>
    </div>
  )
  
}
export default  Error;