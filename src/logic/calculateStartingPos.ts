import { IPosition } from "../interface/position.interface";

 export function calculateStartingPos(boardSize: number): IPosition {
    
    const yPosition = boardSize - 1;
    let xPosition = 9;

    return {yPosition: yPosition, xPosition: xPosition};
}