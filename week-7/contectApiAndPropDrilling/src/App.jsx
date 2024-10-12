import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
// import { Dashboard } from "./components/Dashboard";
import { Landing } from "./components/Landing";
import React from "react";
const Dashboard = React.lazy(()=> import('./components/Dashboard'))
function App() {
  return (
    <>
      <div style={{ background: 'black', color: 'white' }}>
        Hi this is the topbar
      </div>
      {/* <div>
      <button onClick={()=>{window.location.href = '/'}}>Landing Page</button>
      <button onClick={()=>{window.location.href = '/dashboard'}}>Dashboard Page</button>
    </div> */}

      

      <BrowserRouter>
      {/* <AppBar/> */}
        <Routes>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppBar() {
  const nevigate = useNavigate()
  return <div>
  <button onClick={() => { nevigate('/') }}>Landing Page</button>
  <button onClick={() => { nevigate('/dashboard') }}>Dashboard Page</button>
</div>
}
export default App
