import React from "react";
import Home from "../pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../component/header/Header";
function App(params) {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;














// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { getUsers} from "../src/redux/actionCallbacks";
// function App() {

//   const userData = useSelector((combinedState) => combinedState.usersStateRef.users)
//   const dispatchRef = useDispatch()

//   useEffect(() => {

//     let respCallBack = getUsers()
//     dispatchRef(respCallBack)

// },[]);
// const users = Object.values(userData);
//   console.log("userdata redux", userData)
//   return (
//     <div>
//       {
//         users.map((item)=>{
//           return(
//             <h1 key={item.id}> {item.name}</h1>
//           )
//         })
//       }
//     </div>
//   );
// }

// export default App;
