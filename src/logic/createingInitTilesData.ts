import { forEachChild } from "typescript";
import { ITile } from "../interface/board.interface";
import { IPosition } from "../interface/position.interface";

export function createingInitTilesData(
    boardSize: number, values: number[], startingPos: IPosition): ITile[] {
    let rowCounter = 0;
    let colCounter = 0;
    const tiles = [] as ITile[];

    for (let index = 0; index < values.length; index++) {
        const val = values[index];
        let playerOnTile = false;
        let playerSteppedOnTile = false;
        
        if(colCounter == boardSize - 1) {
            rowCounter++;
            colCounter = 0;
        }
        
        const tilePos: IPosition = {
            xPosition: colCounter, 
            yPosition: rowCounter
        };

        colCounter++;

        if(startingPos.xPosition === tilePos.xPosition &&
            startingPos.yPosition === tilePos.yPosition) {
                playerOnTile = true;
                playerSteppedOnTile = true;
        }

        tiles.push({
            index: index,
            playerOnTile: playerOnTile,
            playerSteppedOnTile: playerSteppedOnTile,
            value: val,
            position: tilePos
        });
    }

    return tiles;
}