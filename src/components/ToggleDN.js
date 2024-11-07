import { useState, useContext } from "react";
import { Within } from "@theme-toggles/react";
import { ThemeBW } from "./ThemeBW";
import "@theme-toggles/react/css/Within.css";
import '../App.css';

export default function ToggleDN(){
  const [isToggled, setToggle] = useState(true)
  const {setTheme} = useContext(ThemeBW);
  function handlerClickToggle(isValue){
    setToggle(isValue);
    setTheme(isValue ? 'dark' : 'light');
  }

  return (
    <div className="togglePlace">
      <Within
        toggled={isToggled} 
        onToggle={handlerClickToggle}
      />
    </div>
  )
}

export {ToggleDN}