import { useState, useEffect } from "react";
import UserTable from "./tableuser";


export default function TestApp() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);
  const headings = users.length>0 && Object.keys(users[0])
  return (
    <div className="App">
      <h1>Users</h1>
      {
       users.length>0 && 
        (
       <table>
       
        <thead>
            <tr>
               {
                    headings.map((heading, id)=> <th>{heading}</th>)
               }
            </tr>
        </thead>
        <tbody>
            <UserTable users={users}/>
        </tbody>
       </table>)
      }
    </div>
  );
}
