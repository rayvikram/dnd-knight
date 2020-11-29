import React from 'react'
import Square from './Square'
import { canMoveKnight, moveKnight } from 'Game'
import { ItemTypes } from '../Constants'
import { useDrop } from 'react-dnd'

function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    canDrop: () => canMoveKnight(x, y),
    drop: () => moveKnight(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  })

  const style = {
    position: 'relative',
    width: '100%',
    height: '100%',
  }

  const squareStyle = {}

  if(isOver && !canDrop) squareStyle.backgroundColor = "red"
  if(!isOver && canDrop) squareStyle.backgroundColor="yellow"
  if(isOver && canDrop) squareStyle.backgroundColor="green"


  return (
    <div
      ref={drop}
      style={style}
    >
      <Square style={squareStyle} black={black}>{children}</Square>
    </div>
  )
}

export default BoardSquare