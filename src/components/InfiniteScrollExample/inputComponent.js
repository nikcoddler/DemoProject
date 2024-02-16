import React, { useCallback, useRef, useState } from "react";
import InfiniteScroll from "./infinite-scroll";

const InputComponent = () => {

    const [query, setQuery] = useState(""); 
    const [data, setData] = useState([]);
    const abortControllerRef = useRef(null);

    const handleInput = (e) => {
        
        setQuery(e.target.value);
    }

    const getData = (query, pageNumber) => {

        return new Promise( async(resolve, reject)=>{
            
            try {
                    if(abortControllerRef.current) {
                        abortControllerRef.current.abort();
                    }
                    abortControllerRef.current = new AbortController()
                    const promise = await fetch("https://openlibrary.org/search.json?" + new URLSearchParams({
                    q: query,
                    page: pageNumber
                }), {signal: abortControllerRef.current.signal})

                const resData = await promise.json()
                resolve()
                setData((prevData) => [...prevData, ...resData.docs]);
               
            }
            catch (err) {
                
                // reject()
            }
            
        })
        
    }

    const renderItem = useCallback(({title}, key, ref)=> <div key={key} ref={ref}>{title}</div>)
    return (
        <>
            <input type="text" value={query} onChange={handleInput} />
            <InfiniteScroll 
                getData={getData} 
                renderListItem={renderItem} 
                query={query} 
                listData={data}
            />
        </>
        
    )
}

export default InputComponent;