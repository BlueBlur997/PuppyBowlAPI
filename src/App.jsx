import { useState, useEffect } from "react";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import AllPlayers from "./Components/AllPlayers";
import SinglePlayer from "./Components/SinglePlayer";


const App = () => {
  return (
    
<BrowserRouter>
    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />}/>
    </Routes>
    </BrowserRouter>
    
  );
}


export default App;
