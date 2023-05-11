
import React,{useState} from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Navbar from "./Navbar";
import Profile from "./Profile";
import axios from "axios";
import Contact from "./Contact";



const Home = () => {



  
    
    const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  const handleClick1 = () => {
    setShowComponent1(false);
    setShowComponent2(true);
  }

  const handleClick2 = () => {
    setShowComponent1(true);
    setShowComponent2(false);
  }
  return (
    <div className="w-full h-screen" >
   <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu rounded-lg menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52">
        <li><a onClick={handleClick2} >Home</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Tools
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Insta Downloader</a></li>
            <li><a>Comming Soon</a></li>
          </ul>
        </li>
        <li><a onClick={handleClick1} >Contact</a></li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost normal-case text-xl">

<Player 
    autoplay
    loop
    speed="2"
    src="https://assets3.lottiefiles.com/packages/lf20_14uss47o.json"
    style={{ height: '50px', width: '50px' }}>
<Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li onClick={handleClick2}><a>Home</a></li>
      <li tabIndex={0}>
        <a>
          Tools
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
        <li><a>Insta Downloader</a></li>
            <li><a>Comming Soon</a></li>
        </ul>
      </li>
      <li><a onClick={handleClick1} >Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Buy Me a Coffee
    <Player className="mb-5" 
    autoplay
    loop
    speed="2"
    src="https://assets8.lottiefiles.com/private_files/lf30_fpdvsz3i.json"
    style={{ height: '50px', width: '50px' }}>
<Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player></a>
  </div>
</div>
    </div>
    {showComponent1 && <Profile />}
      {showComponent2 && <Contact />}

    </div>
  );
};

export default Home;
