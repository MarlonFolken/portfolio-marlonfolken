import { useState } from "react";
//import "@theme-toggles/react/css/Within.css";
//import { Within } from "@theme-toggles/react";
import styles from '../App.css';

export default function ToggleDN(){
  const [isToggled, setToggle] = useState(true)
  function handlerClickToggle(isValue){
    setToggle(isValue);
  }

  return (
    <div className={styles.togglePlace}>
{/*       <Within
        toggled={isToggled} 
        onToggle={handlerClickToggle}
      /> */}
    </div>
  )
}

export {ToggleDN}