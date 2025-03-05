
const Contact=()=>{
  return(
   <div>

    <div className="Contact-Header">
    </div>


     <div>
      <h2 className=" font-bold text-3xl">Contact Us</h2>
      <form>
        <input type="text" className=" border-2 border-cyan-800 m-2 p-2" placeholder="name"></input>
        <input type="phone" className=" m-2 p-2 border-2 border-l-cyan-900" placeholder="Phone number"></input>
        <button className="m-4 p-2 border-2 bg-cyan-300 rounded-xl">Submit</button>
      </form>
    
     </div>
   </div>
  ) 
 }


 export default Contact;