import { IGameState } from "../interface/game.interface";

export const initGameState: IGameState = {
    board: {tiles: []},
    playerPosition: {xPosition: 0, yPosition: 0},
    score: 0,
}