import * as React from 'react';
import { GameSettingContextType, IGameSetting } from '../interface/gameSetting.interface';
import { initGameSettingData } from '../data/initGameSettingData';
import { GamePage } from '../pages/game/GamePage';

interface Props {
    children: React.ReactNode;
}

export const GameContext = React.createContext<GameSettingContextType | null>(null);

const GameProvider: React.FC<Props> = () => {
    const [gameSetting, setGameSetting] = React.useState<IGameSetting>(initGameSettingData);

    return (
        <GameContext.Provider value={{ gameSetting, saveBoardSize, saveRangeNumber }}>
          {<GamePage />}
        </GameContext.Provider>
      );

      function saveBoardSize() {

      }

      function saveRangeNumber() {
        
      }
}

export default GameProvider;