import React from 'react'
import { useState, useEffect, useMemo } from "react"
import checkIfTetriminosCanMove from '../library/checkIfTetriminosCanMove/checkIfTetriminosCanMove'
import updateBoard from '../library/newCycle/updateBoard'
import Board from './Board'
import EndOfGame from './EndOfGame'
import Score from './Score'
import getInitValues from '../library/getInitValues/getInitValues'
import { filledSquared, numberOfColumns, numberOfLines, emptySquared, rotationCases } from '../constanteValues'

function Game(props) {
    const [tShape, setTShape] = useState(getInitValues('shape'))
    const [tNextShape, setTNextShape] = useState(getInitValues('shape'))
    const [tRotation, setTRotation] = useState(getInitValues('rotation'))
    const [tPosition, setTPosition] = useState(getInitValues('position'))
    const [board, setBoard] = useState(getInitValues('board'))
    const [timer, setTimer] = useState(getInitValues('timer'))
    const [endOfGame, setEndOfGame] = useState(getInitValues('endOfGame'))
    const [level, setLevel] = useState(getInitValues('level'))
    const [score, setScore] = useState(getInitValues('score'))
    const [clearedLines, setClearedLines] = useState(getInitValues('clearedLines'))
    const game = useMemo(() => {
        return {
            tetriminos: {
                shape: { value: tShape, set: setTShape },
                rotation: { value: tRotation, set: setTRotation },
                position: { value: tPosition, set: setTPosition },
                nextShape: { value: tNextShape, set: setTNextShape },
            },
            board: { value: board, set: setBoard },
            timer: { value: timer, set: setTimer },
            endOfGame: { value: endOfGame, set: setEndOfGame },
            level: { value: level, set: setLevel },
            score: { value: score, set: setScore },
            clearedLines: { value: clearedLines, set: setClearedLines }
        }
    }, [tShape, tPosition, board, timer, endOfGame, level, score, clearedLines, tRotation, tNextShape])

    useEffect(() => {
        const timeRemaining = (100 + 900 / (game.level.value + 1)) - (Date.now() - game.timer.value)
        const timer = setTimeout(updateBoard, timeRemaining, game, numberOfColumns, numberOfLines, filledSquared, emptySquared)

        const handlekeyPress = (e) => {
            let x = game.tetriminos.position.value.x
            let y = game.tetriminos.position.value.y
            let rotation = game.tetriminos.rotation.value
            switch (e.keyCode) {
                case 37:
                    x -= 1
                    break
                case 39:
                    x += 1
                    break
                case 40:
                    y += 1
                    break
                case 38:
                    rotation += 1
                    rotation %= rotationCases
                    break
                default:
            }
            let shape = game.tetriminos.shape.value[rotation];
            if (checkIfTetriminosCanMove(game.board.value, shape, { x: x, y: y }, numberOfLines, numberOfColumns, emptySquared)) {
                game.tetriminos.position.set({ x: x, y: y })
                game.tetriminos.rotation.set(rotation)
            }
        }

        window.addEventListener('keydown', handlekeyPress)

        return () => {
            window.removeEventListener('keydown', handlekeyPress)
            clearInterval(timer)
        }
    }, [game])

    if (game.endOfGame.value) {
        return <EndOfGame game={game} />
    }
    let shape = game.tetriminos.shape.value[game.tetriminos.rotation.value]
    return (
        <div id='game' className="is-pattern">
            <Board board={game.board.value} shape={shape} position={game.tetriminos.position.value} />
            <Score shape={game.tetriminos.nextShape.value[0]} score={game.score.value} level={game.level.value} clearedLines={game.clearedLines.value} />
        </div>
    )
}

export default Game
