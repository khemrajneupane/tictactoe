import React, { useState } from 'react';

const Blocks = () => {
    const [turn, setTurn] = useState('X');
    const [gameEnded, setGameEnded] = useState(false);
    const [board, setBoard] = useState(Array(9).fill(''));
const handleClick = (e) => {
    if(board[e.target.dataset.square] === ''){
    board[e.target.dataset.square] = turn;//board[0] = first array    
    e.target.innerText = turn;//it writes X or O inside every div at a click.
    setBoard(board);
    setTurn(turn == 'X' ? 'O' : 'X');
    }
    console.log(e.target.dataset.square)//displays indexes of the squares;

}
console.log(board);
    return(
        <div className= "container">
            <div>TicTacToe</div>
            <div id = "blocks" onClick ={(e)=>handleClick(e)}>
                <div className= "square" data-square="0"></div>
                <div className= "square" data-square="1"></div>
                <div className= "square" data-square="2"></div>
                <div className= "square" data-square="3"></div>
                <div className= "square" data-square="4"></div>
                <div className= "square" data-square="5"></div>
                <div className= "square" data-square="6"></div>
                <div className= "square" data-square="7"></div>
                <div className= "square" data-square="8"></div>

            </div>
        </div>
    )
}
export default Blocks;