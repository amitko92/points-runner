import React, { useReducer } from 'react';
import { GameSettingContext } from "../../context/GameSettingContext";
import { GameSettingContextType } from "../../interface/gameSetting.interface";
import { gameReducer } from '../../reduser/GameReduser';
import { initGameState } from '../../data/initGameState';
import { IGameState } from '../../interface/game.interface';
import { createingInitTilesData } from '../../logic/createingInitTilesData';
import { calculateStartingPos } from '../../logic/calculateStartingPos';

type useGameType = {
    boardSize: number;
    numberRange: number;
    state: IGameState;
}

const intiNumbers = [11, 16, 10, 3, 5, 15, 7, 0, 8, 12, 14, 13, 4, 2, 9, 6]; 


export const useGame = () : useGameType => {
    
    const { gameSetting } = React.useContext(GameSettingContext) as GameSettingContextType;
    const boardSize = gameSetting.boardSize;
    const numberRange = gameSetting.numberRange;
    const initPayerPos = calculateStartingPos(boardSize);
    const initTiles = createingInitTilesData(boardSize, intiNumbers, initPayerPos);
    

    const [state, dispatch] = useReducer(gameReducer, {
            ...initGameState, 
            playerPosition: initPayerPos, 
            board: {...initGameState.board, tiles: initTiles}
    });

    
 
    return {boardSize: boardSize, numberRange: numberRange, state: state};
}