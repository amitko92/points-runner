import { IBoard } from "./board.interface";
import { IPosition } from "./position.interface";

export interface IGameState {
    board: IBoard;
    playerPosition: IPosition;
    score: number;
}