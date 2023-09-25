import * as React from 'react';
import { GameSettingContextType, IGameSetting } from '../interface/gameSetting.interface';
import { initGameSettingData } from '../data/initGameSettingData';

interface Props {
    children: React.ReactNode;
}

export const GameSettingContext = React.createContext<GameSettingContextType | null>(null);

const GameSettingProvider: React.FC<Props> = ({ children }) => {
    const [gameSetting, setGameSetting] = React.useState<IGameSetting>(initGameSettingData);

    return (
        <GameSettingContext.Provider value={{ gameSetting, saveBoardSize, saveRangeNumber }}>
          {children}
        </GameSettingContext.Provider>
      );

      function saveBoardSize() {

      }

      function saveRangeNumber() {
        
      }
}

export default GameSettingProvider;