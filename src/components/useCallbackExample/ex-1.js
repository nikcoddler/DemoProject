import React, {useState, useCallback, useMemo, useEffect} from "react"



function sum(a, b) {
    console.log('sum() ran');
    return a + b;
  }
  
  export default function ExApp() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [name, setName] = useState('Jim');
  
    // const result = useCallback(()=>sum(val1, val2), [val1, val2]);
    const result = useMemo( ()=> sum(val1, val2), [val1, val2]);

    useEffect(()=>{
      console.log("change")
    }, [result])
  
    return (
      <div className="App">
        <input
          value={val1}
          onChange={({ target }) =>
            setVal1(parseInt(target.value || 0, 10))
          }
        />
        <input
          value={val2}
          onChange={({ target }) =>
            setVal2(parseInt(target.value || 0, 10))
          }
        />
        <input
          placeholder="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <p>{result}</p>
      </div>
    );
  }