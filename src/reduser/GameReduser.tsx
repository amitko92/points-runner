import { IGameState } from "../interface/game.interface";
import { IPosition } from "../interface/position.interface";

export const GAME_ACTION = {
  PALYER_MOVE: "playerMove",
};

export type GameAction = {
  type: "playerMove";
  value: number;
  currentTileIndex: number;
  newTileIndex: number;
  playerPosition: IPosition;
};

export const gameReducer = (state: IGameState, action: GameAction) => {
  let json = {};

  switch (action.type) {
    case GAME_ACTION.PALYER_MOVE:
      return { ...state };
    default:
      return { ...state };
  }
};
