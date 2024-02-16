import React from 'react'
import './grid.css'

function Grid() {

   
    let arr = [];

    function changeColor(){
        let count=0;

        for(let i=arr.length-1;i>=0;i--){
            count++;
            setTimeout(()=>{
                arr[i].style.backgroundColor="gray"
            
            },  1000*(count))

        }
    }
    

    function handleClick(e){
        e.preventDefault();
        e.target.style.backgroundColor="green"
        arr.push(e.target)
        if(arr.length==7){
            changeColor()
        }
    }

    function createGrid(id){
        return <div className={`top-grid${id+1}`}></div>
    }   

  return (
    <div className='grid-container'>
        <div className='top-grids' onClick={handleClick}>
           {
             [1,2,3].map((item, id)=> createGrid(id))
           }
        </div>

        <div className='top-grid4'  onClick={handleClick}></div>
        
        <div className='bottom-grids' onClick={handleClick}>
        {
             [5,6,7].map((item, id)=> createGrid(id+3))
           }    
        </div>

    </div>
  )
}

export default Grid