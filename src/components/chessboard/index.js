import React from "react";
import GridSection from "./Gridboard";



function ChessBoard() {

    const chessArr = new Array(8).fill(0);

    return (
        <>
         <h1 style={{textAlign: 'center'}}>Chess Board</h1>
         <div >
           {
             chessArr.map((gridElement, id)=> {
                return <GridSection row={id} key={id}/>
             })
           }
         </div>
        </>
       
    )
}

export default ChessBoard;