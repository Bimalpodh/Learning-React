const shimmer=()=>{
  return(
    <div className="shimmer-container">
      {Array.from({length:100},(_,i)=>(<div className="shimmer-card"></div>))}
      
  
    </div>
  )
}

export default shimmer;