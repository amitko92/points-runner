import React from "react";
import Style from "./GameStyle.module.css";
import { useGame } from "./useGame";
import GoToMenuBtn from "../../components/buttons/GoToMenuBtn";
import BoardGame from "./components/BoardGame";

export const GamePage = () => {
  const {boardSize, numberRange} = useGame();

  return (
    <div className="page">
      <div className={Style.container}>
        <h1>GamePage</h1>
        <div className={Style.row}>
          <GoToMenuBtn />
        </div>
        <div className={Style.row}>
          <BoardGame boardSize={boardSize}/>
        </div>
      </div>
    </div>
  );
};
