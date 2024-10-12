// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import './App.css'
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";

// function App() {
//   return (
//     <>
//       <div style={{ background: 'black', color: 'white' }}>
//         Hi this is the topbar
//       </div>
//       {/* <div>
//       <button onClick={()=>{window.location.href = '/'}}>Landing Page</button>
//       <button onClick={()=>{window.location.href = '/dashboard'}}>Dashboard Page</button>
//     </div> */}

      

//       <BrowserRouter>
//       <AppBar/>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard/>}/>
//           <Route path="/" element={<Landing />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// function AppBar() {
//   const nevigate = useNavigate()
//   return <div>
//   <button onClick={() => { nevigate('/') }}>Landing Page</button>
//   <button onClick={() => { nevigate('/dashboard') }}>Dashboard Page</button>
// </div>
// }
// export default App


// // lazy loading
// import React, { Suspense } from "react";
// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import './App.css';

// // Lazy load components
// const Dashboard = React.lazy(() => import('./components/Dashboard'));
// const Landing = React.lazy(() => import('./components/Landing'));

// function App() {
//   return (
//     <>
//       <div style={{ background: 'black', color: 'white' }}>
//         Hi this is the topbar
//       </div>

//       <BrowserRouter>
//         <AppBar />
//         {/* Use React.Suspense with a fallback to avoid suspense-related errors */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/" element={<Landing />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </>
//   );
// }

// function AppBar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <button onClick={() => navigate('/')}>Landing Page</button>
//       <button onClick={() => navigate('/dashboard')}>Dashboard Page</button>
//     </div>
//   );
// }

// export default App;

// // prop driling
// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Count count={count} setCount={setCount} />
//     {/* <Button count={count} setCount={setCount} /> */}
//     </>
//   )
// }

// function Count({count, setCount}) {
//   return <div>
//     {count}
//     <br/>
//     <br/>
//     <Button count={count} setCount={setCount} />
//   </div>
// }
// function Button({count, setCount}) {
//   return (
//     <>
//     <button onClick={()=> setCount(count + 1)}>Increase</button>
//     <br/>
//     <br/>
//     <button onClick={()=> setCount(count - 1)}>Decrese</button>
//     </>
//   )
// }
// export default App;


// context api
import React, { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={count}>
    <Count count={count} setCount={setCount} />
    </CountContext.Provider>
    </>
  )
}

function Count({setCount}) {
  return <div>
    <br/>
    <CountRender/>
    <Button setCount={setCount} />
  </div>
}
function CountRender() {
  const count = useContext(CountContext)
  return (
    <>
    {count}
    </>
  )
}

function Button({setCount}) {
  const count = useContext(CountContext)
  return (
    <>
    <button onClick={()=> setCount(count + 1)}>Increase</button>
    <br/>
    <br/>
    <button onClick={()=> setCount(count - 1)}>Decrese</button>
    </>
  )
}
export default App;