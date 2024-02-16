import {  useState } from "react"; 
 
export default function AppDemo() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" , place:"Rajasthan"}); 
  console.log(greeting, setGreeting); 
  const [number, setNumber] = useState(1);
 
  function updateGreeting() { 

    // setGreeting(prevState => {
    //     return {...prevState, place:"Pali" }
    // }); 
    setNumber((number)=>number+1);

    setTimeout(()=>{
      alert(number)
    }, 1000)
  } 



  // useEffect(()=>{

  //   setTimeout(()=> {
  //     changeA((a) => a+1)
  //   }, 1000)

  //   if(a>10) {
  //     changeA((a)=> 1)
  //   }
  // })

  


 
  return ( 
    <div> 
      {/* <h1>{`${greeting.greet}-${greeting.place}`}</h1>  */}
      <h1>{number}</h1>
      <button onClick={updateGreeting}>Update Number </button> 
    </div> 
  ); 
} 