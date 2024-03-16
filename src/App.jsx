// import React, { useState, useEffect } from 'react';
// import Home from './components/Home';
// import './App.css';
// import KnightGambit2 from './assets/knightGambit2.png';

// function App() {
//   const [isZooming, setZooming] = useState(true);

//   useEffect(() => {
   
//     const timeoutId = setTimeout(() => {
//       setZooming(false);
//     }, 2000); 
//     return () => clearTimeout(timeoutId);
//   }, []);

//   return (
//     <>
//       {isZooming ? (
       
//         <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-black backdrop-blur">
//           <img
//             src={KnightGambit2} 
//             alt="Zooming Image"
//             className="animate-scale-in mb-4"
//           />
//           <p className="text-white text-2xl font-bold animate-scale-in">Knight's Gambit 2.0</p>
//         </div>
//       ) : (
       
//         <Home />
//       )}
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import KnightGambit2 from './assets/knightGambit2.png';

function App() {
  const [isZooming, setZooming] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setZooming(false);
    }, 2000); 
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isZooming ? (
            <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-black backdrop-blur">
              <img
                src={KnightGambit2} 
                alt="Zooming Image"
                className="animate-scale-in mb-4"
              />
              <p className="text-white text-2xl font-bold animate-scale-in">Knight's Gambit 2.0</p>
            </div>
          ) : (
            <Home />
          )}
        />
        <Route path="/formore" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
