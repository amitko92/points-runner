export interface IGameSetting {
    boardSize: number;
    numberRange: number;
}

export type GameSettingContextType = {
    gameSetting: IGameSetting;
    saveBoardSize: (boardSize: number) => void;
    saveRangeNumber: (rangeNumber: number) => void;
};