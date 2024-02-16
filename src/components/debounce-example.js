import React, { useState, useCallback } from 'react'; 


const DebounseExample = () => {

    const [suggestions, setSuggestions] = useState([]);

    function debounce(func){

        console.log("From deb")
        
        let timer;
        return function (...args) {
            clearTimeout(timer);
            const context = this;
            timer = setTimeout(()=>{
                timer=null
                
                func.apply(context, args)
            }, 2000)
        }
    }

    // const debounce = (func) => {
    //     let timer;
    //     console.log("in")
    //     return function (...args) {
    //         console.log("in de", this)
    //       const context = this;
    //       if (timer) clearTimeout(timer);
    //       timer = setTimeout(() => {
    //         timer = null;
    //         func.apply(context, args);
    //       }, 500);
    //     };
    //   };

    const handleChange = (value) => {
        fetch(`https://demo.dataverse.org/api/search?q=${value}`)
          .then((res) => res.json())
          .then((json) => setSuggestions(json.data.items));
    };

    const optimizedFn = useCallback(debounce(handleChange), []);

    return (
        <div style={{position: 'absolute', height:'100vh'}}>
        <div style={{width:'300px'}}>
            <h2>Debounce in react js</h2>
            <input type='text'
                placeholder='Enter Something here to search...' 
                style={{width:'100%'}}  
                className="search"
                onChange={(e)=> optimizedFn(e.target.value) } />
        </div>
        {suggestions.length>0 && (
            <div>
                {suggestions.map((el, i)=>{
                   return  <div key={i}>
                        <span>{el.name}</span>
                    </div>
                })}
            </div>
        )}
        </div>
    )
}

export default DebounseExample