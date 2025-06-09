import { useState } from "react";
function MyButton(){
const [count,setcount]=useState(0);
  return (
    <>
      <button onClick={()=>setcount(count+1)}> clicked {count} times</button>
    
    </>
  )
}
export default MyButton;