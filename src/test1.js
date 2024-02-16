import React, { useEffect, useState } from 'react';


function ShowData(){


    const [data, setData] = useState();


    useEffect(()=>{

        const fetchData = async () => {

            const res = await fetch('http://jsonplaceholder.typicode.com/users');
            const userData = await res.json();
            setData(userData);

            data?.sort(function(a,b){
                return a.name.localeCompare(b);
            })
            
        }
        fetchData();
    }, [])

    return (
        <div>
            {data && data.map((user)=>{
                return (
                    <table>
                        
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.city}</td>
                    </table>
                )
            })}
        </div>
    );
}


//"https://jsonplaceholder.typicode.com/users"
export default ShowData;