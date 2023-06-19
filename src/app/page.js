'use client';

import Player from '../components/player/player.js'
import Board from '../components/board/board.js'
import { DragDropContext } from 'react-beautiful-dnd';


export default function Home() {
  const style = {
      left: "5px",
      top: "5px",
      position: "absolute",
      height: "800px",
      width: "1600px",
      display: "flex",
      backgroundColor: "greenyellow",
  };

  return (
    <main style={style}>
      <DragDropContext>
        <Player name={"player 1"}></Player>
        <Board></Board>
        <Player name={"player 2"}></Player>
      </DragDropContext>
    </main>
  )
}
