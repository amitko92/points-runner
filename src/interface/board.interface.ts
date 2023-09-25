import { IPosition } from "./position.interface";

export interface ITile {
    index: number;
    position: IPosition;
    value: number;
    playerSteppedOnTile: boolean;
    playerOnTile: boolean;
}

export interface IBoard {
    tiles: ITile[];
}