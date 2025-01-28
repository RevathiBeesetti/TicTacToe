import React, { useRef, useState } from 'react'

import './TicTacToe.css'
import Circle_icon from '../Assets/o.png'
import Cross_icon from '../Assets/x.png'

let data = ["","","","","","","","",""];

const TicTacToe = () => {
    let [count,setCount]=useState(0);
    let [lock,setLock]=useState(false);
    let titleRef=useRef(null);
    const toggle =(e,num)=>{
        if (lock || data[num]){
            // If the game is lockeed or the square is already filled, do nothing
            return;
        }
        if (count % 2 === 0){
            e.target.innerHTML=`<img src="${Cross_icon}" alt="X">`;
            data[num]="x";
            
        }
        else{
            e.target.innerHTML=`<img src="${Circle_icon}" alt="O">`;
            data[num]="o";
        }
        setCount(count+1);
        checkWin();
    };
    const checkWin = ()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
        {
            won(data[2]);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="")
        {
            won(data[5]);
        }
        else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
        else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="")
        {
            won(data[6]);
        }
        else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="")
        {
            won(data[7]);
        }
        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
        else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="")
        {
            won(data[8]);
        }
        else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="")
        {
            won(data[6]);
        }
    }
const won=(winner)=>{
    setLock(true);
    if(winner==="x")
    {
        titleRef.current.innerHTML=`Congratulations: <img src=${Cross_icon}> wins`
    }
    else{
        titleRef.current.innerHTML=`Congratulations: <img src=${Circle_icon}> wins`    
    }
}
    const resetGame = () => {
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        setLock(false);
        // Clear the board
        titleRef.current.innerHTML= "Tic Tac Toe Game In <span>React</span>"; //Reset title
        const boxes = document.querySelectorAll('.boxes');
        boxes.forEach(box => box.innerHTML = '');
    };
  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
        <div className='board'>
            <div className="row1">
                <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>                
                <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>                
                <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>                
                <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
                <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className='reset' onClick={resetGame}>Reset</button>
    </div>
  )
}
export default TicTacToe