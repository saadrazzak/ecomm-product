import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getUsers} from "../src/redux/actionCallbacks";
function App() {

  const userData = useSelector((combinedState) => combinedState.usersStateRef.users)
  const dispatchRef = useDispatch()

  useEffect(() => {

    let respCallBack = getUsers()
    dispatchRef(respCallBack)
    
},[]);
const users = Object.values(userData);
  console.log("userdata redux", userData)
  return (
    <div>
      {
        users.map((item)=>{
          return(
            <h1 key={item.id}> {item.name}</h1>
          )
        })
      }
    </div>
  );
}

export default App;
