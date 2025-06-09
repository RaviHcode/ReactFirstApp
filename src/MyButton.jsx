import { useState } from "react";
function MyButton({count,onClick}){

  return (
    <>
      <button onClick={onClick}> clicked {count} times</button>
    
    </>
  )
}
export default MyButton;