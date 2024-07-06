import React from 'react'
import iconSun from "../assets/images/icon-sun.svg"

interface INavBar {
    setTheme: Function;
    theme: string;
  }


const NavBar: FC<INavBar> = ({ setTheme, theme }) => {
  return (
   <nav>
       <h1>T O D O</h1>
       <img src={iconSun} alt="Icon Sun" width="26" height="26"/>
  </nav>

    
    
  )
}

export default NavBar