import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as
    Router, Routes, Route
} from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav';
import { useDispatch } from 'react-redux';
import { setIsMobileFalse, setIsMobileTrue, setage } from './features/isMobileSlice';
import Explore from './pages/Explore';
// import Sidebar from './components/Sidebar';

function App() {

  // const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  // const isMobile = useSelector(selectisMobile);
  // console.log(isMobile);

  // const handleResize = () => {
  //   if (window.innerWidth < 700) {
  //       setIsMobile(true)
  //       // dispatch(setIsMobileTrue());
  //   } else {
  //       setIsMobile(false)
  //       // dispatch(setIsMobileFalse());
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // });

  useEffect(() => {
    const handleInitialResize = () => {
      if (window.innerWidth < 700) {
        // setIsMobile(true);
        dispatch(setIsMobileTrue()); // Update Redux state 
      } else {
        // setIsMobile(false);
        dispatch(setIsMobileFalse()); // Update Redux state 
      }
    };

    handleInitialResize();
  }, [dispatch]); // Add dispatch as a dependency to ensure recalculation on store changes

  // Event listener for subsequent window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        dispatch(setIsMobileTrue());
      } else {
        dispatch(setIsMobileFalse());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);
  dispatch(setage(12));

  return (
    <div className="App">
      <Router>
        <Nav />
        {/* { !isMobile && <Sidebar/>} */}
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="explore" element={<Explore/>}></Route>
          <Route path="explore/:genre" element={<Explore/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
