import React, { useState, useEffect } from 'react';
import './app.css';

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Loading from './components/Loading';
import Home from './components/Home';



const App = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    
    <div className="w-screen" >
      {isLoading ? <Loading /> : <Home />}
    </div>
  );
};
export default App;
