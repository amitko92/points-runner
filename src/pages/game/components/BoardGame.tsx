import React from 'react'

const initData = {
    numbers: [11, 16, 10, 3, 5, 15, 7, 0, 8, 12, 14, 13, 4, 2, 9, 6]  
}

type Props = {
  boardSize: number, 
}

const BoardGame = ({boardSize}: Props) => {

    

  return (
    <div>BoardGame {boardSize}</div>
  )
}

export default BoardGame