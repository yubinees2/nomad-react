import styles from './App.module.css';
import { useCallback, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './route/Home';
import Detail from './route/MovieDetail';
import MovieApp from './route/Movie';

function App() {
  // LifeCycle
  useEffect(()=>{
    // onMount
    console.log("App rendered.");
    // onUnMount
    return () => {
      console.log("App destroyed.");
    }
  }, []);


  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<MovieApp/>}/>
          <Route path="/movie/:code" element={<Detail/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
