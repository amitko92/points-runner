import React from 'react'
import { GameSettingContext } from '../../context/GameSettingContext';
import { GameSettingContextType } from '../../interface/gameSetting.interface';
import GoToMenuBtn from '../../components/buttons/GoToMenuBtn';

const GameSettingPage = () => {

  const { gameSetting } = React.useContext(GameSettingContext) as GameSettingContextType;

  return (
    <div>
      <h1>GameSettingPage</h1>
      <GoToMenuBtn />
      <p>boardSize: {gameSetting.boardSize}</p>
      <p>numberRange: {gameSetting.numberRange}</p>
    </div>
  );
}

export default GameSettingPage;