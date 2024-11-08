import { useState, useContext } from "react";
import { Within } from "@theme-toggles/react";
import { ThemeBW } from "./ThemeBW";
import "@theme-toggles/react/css/Within.css";
import '../App.css';

export default function ToggleDN(){
  const [isToggled, setToggle] = useState(false)
  const {theme, setTheme} = useContext(ThemeBW);
  function handlerClickToggle(isValue){
    setToggle(isValue);
    setTheme(isValue ? 'light' : 'dark');
  }

  return (
    <div className={["togglePlace", `togglePlace-${theme}`].join(' ')}>
      <Within
        toggled={isToggled} 
        onToggle={handlerClickToggle}
      />
    </div>
  )
}

export {ToggleDN}