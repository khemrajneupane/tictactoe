import React, { useState } from 'react';

const Blocks = () => {
    const [turn, setTurn] = useState('X');
    const [gameEnded, setGameEnded] = useState(false);
    const [winner, setWinner] = useState('')
    const [board, setBoard] = useState(Array(9).fill(''));
    const [totalMoves, setTotalMoves] = useState(0)
    //const [msg, setMsg] = useState('');
    const [firstPlayer, setFirstPlayer] = useState('');
    const [secondPlayer, setSecondPlayer] = useState('');

    const onFirstPlayerChange = (e) => setFirstPlayer(e.target.value)
    const onSecondPlayerChange = (e) => setSecondPlayer(e.target.value)

    const handleClick = (e) => {
        if (board[e.target.dataset.square] === '' && !winner) {
            board[e.target.dataset.square] = turn;//board[0] = first array    
            e.target.innerText = turn;//it writes X or O inside every div at a click.
            setBoard(board);

            if (turn === "X") {
                e.target.classList.add(
                    'purple',
                );
            } else if (turn === "O") {
                e.target.classList.add(
                    'yellow',
                );
            }

            console.log("main turn", turn)
            setTurn(turn === 'X' ? 'O' : 'X');
            setTotalMoves(totalMoves + 1);
        } else if (winner) {
            //setMsg(`Game ended! ${winner} won!`)
        }
        //console.log(e.target.dataset.square)//displays indexes of the squares;
        const win = findWinner();
        if (win === 'X') {
            setGameEnded(!gameEnded);
            setWinner('X');
            console.log("hi winner")
        } else if (win === 'O') {
            setGameEnded(!gameEnded);
            setWinner('O');
            console.log("hi loser")
        } else if (win === 'draw') {
            setGameEnded(!gameEnded);
            setWinner('draw');
        }
    }
    console.log("board", board)
    const findWinner = () => {
        var winningMoves = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [0, 1, 2], [3, 4, 5], [6, 7, 8]];

        for (let i = 0; i < winningMoves.length; i++) {
            if (board[winningMoves[i][0]] === board[winningMoves[i][1]] && board[winningMoves[i][1]] === board[winningMoves[i][2]]) {
                return board[winningMoves[i][0]];//return either X or O
            }
        }
        if (totalMoves === 8) {
            return 'draw';
        }
    }
    return (
        <div className="container jumbotron">
            <h1>Let's play TicTacToe game!!!</h1>
            <form>
                <div class="form-row">
                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                        <input onChange={(e) => onFirstPlayerChange(e)} type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Enter your name" />
                    </div>
                </div>
                <div class="form-row">
                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                        <input onChange={(e) => onSecondPlayerChange(e)} type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Enter your name" />
                    </div>
                </div>
            </form>
            <h2>First Player: </h2><h3 style={{ color: "purple" }}>{`${firstPlayer} ${winner && winner !== 'draw' && winner !== 'O' && "is the winner !!"}`}</h3>
            <h2>Second Player: </h2><h3 style={{ color: "purple" }}>{`${secondPlayer} ${winner && winner !== 'draw' && winner !== 'X' && "is the winner !!"}`}</h3>

            <h2 style={{ color: "red" }}>{winner && winner === 'draw' ? (<div>the game is a draw</div>) : null}</h2>

            <form>
                <div id="blocks" onClick={(e) => handleClick(e)}>
                    <div className="square" data-square="0"></div>
                    <div className="square" data-square="1"></div>
                    <div className="square" data-square="2"></div>
                    <div className="square" data-square="3"></div>
                    <div className="square" data-square="4"></div>
                    <div className="square" data-square="5"></div>
                    <div className="square" data-square="6"></div>
                    <div className="square" data-square="7"></div>
                    <div className="square" data-square="8"></div>
                </div>
                <button class="btn btn-primary">Play Again</button>
            </form>
            <div>

            </div>

        </div>
    )
}
export default Blocks;