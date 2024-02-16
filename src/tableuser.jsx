const UserTable = ({users}) => {

    const flattenObj = (obj)=>{
        let colData="";
        for(const col in obj){
            
            if(typeof obj[col]== "object"){
                flattenObj(obj[col])
            }else{
                colData  += `${obj[col]}`
                
            }
        }
        return colData;
      }


  const createColumn = (data) =>{

    const colArr = []
    let colData;
    for(const col in data){
        if(typeof data[col]== "object"){
            
           colData =  flattenObj(data[col])
        }
        else {
            colData = `${data[col]}`
        }

       colArr.push(<td>{colData}</td>)
    }

    return colArr;
  }

    // const createTable = (data=[]) => {
    //     const tableColum = data?.map((item)=>{
        
    //     return (
    //         <tr>
    //             {createColumn(item)}
    //         </tr>
    //     )
           
    //     })
    
    //     return tableColum;
    //   } 

    return (
        <>
            {
                users.map((user) => {
                    return (
                        <tr key={user.id}>
                            {createColumn(user)}
                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserTable;