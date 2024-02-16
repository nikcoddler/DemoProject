import React from "react";
// import { chessContainerStyle, gridStyle} from './mystyle.js'
import './mystyle.css';





function GridSection({row}) {


    const GridArr = new Array(8).fill(0);
    const getbgColor = (row, col) => {
        return row%2 == 0 ? (col%2==0 ? "white": "black") :  (col%2!=0 ? "white": "black");
    }

  

    return (
        <div className="chessContainer">
            {
                GridArr.map((grid, id) => {

                    const bgcolr = getbgColor(row, id)
                    return (
                        <div className="gridStyle" style={{backgroundColor: `${bgcolr}`, }}
                        />
                       
                    )
                   
                })
            }
        </div>
      
    )

}

export default GridSection