import React from 'react';
import "../../styling/layout.css";
import MainMenuButton from './components/MainMenuButton';
import Style from "./MainMenuStyle.module.css";

const MainMenuPage = () => {
  return (
    <div className='page'>
      <div className={Style.menuBox}>
        <h1>Menu</h1>
        <MainMenuButton link={"/game"} title={"New Game"}/>
        <MainMenuButton link={"/setting"} title={"Game Setting"}/>
      </div>
    </div>
  )
}

export default MainMenuPage