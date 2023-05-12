
import React,{useState} from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Profile from "./Profile";





const Home = () => {

  




 const sc="https://github.com/arman-mondal/arman-mondal-react"  ;

 function codes() {
   window.open(sc);
}
 
   



  const [showComponent4, setShowComponent4] = useState(false);

  const alert12 = () => {
    setShowComponent4(true);

    setTimeout(function newfunc() {

 setShowComponent4(false);

    }, 4000)

   
  }


    
    const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);
  const [showComponent3, setShowComponent3] = useState(false);
  const [showComponent5, setShowComponent5] = useState(false);
  const handleClick1 = () => {
    setShowComponent1(false);
    setShowComponent5(false);
    setShowComponent2(true);
    setShowComponent3(false);
  }
  const handleClick5 = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(false);
    setShowComponent5(true);
  }
  const handleClick3 = () => {
    setShowComponent1(false);
    setShowComponent2(false);
    setShowComponent3(true);
    setShowComponent5(false);
  }

  const handleClick2 = () => {
    setShowComponent1(true);
    setShowComponent2(false);
    setShowComponent5(false);
    setShowComponent3(false);
  }
  return (
    <div className="w-full fixed h-screen " >
   <div  >
        <div className="navbar bg-base-100">
  <div className="navbar-start  ">
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
            <li><a onClick={handleClick3} >Insta Downloader</a></li>
            <li><a  onClick={handleClick5} >Codes</a></li>
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
        <li><a onClick={handleClick3}>Insta Downloader</a></li>
            <li><a onClick={handleClick5} >Codes</a></li>
        </ul>
      </li>
      <li><a onClick={handleClick1} >Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://paytm.me/hj-Uxp7" className="btn">Buy Me a Coffee
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



    {showComponent4 && 
    
    
    <div className="alert alert-info shadow-lg">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <span>Comming Soon ....</span>
    </div>
  </div>
    
    }
    {showComponent1 && <Profile />}
      {showComponent2 && 
      
      <div className="bg-blend-screen 	h-screen justify-center flex items-center " >

      <div className="justify-center place-content-start card w-96 border-2 border-sky-400  hover:border-green-500 shadow-xl">
    
      <div className="card-body  h-max w-full	">
      <div class="flex justify-center items-center">
      <Player className=""
      autoplay
      loop
      speed="1"
      src="https://assets1.lottiefiles.com/packages/lf20_u25cckyh.json"
      style={{ height: '100px', width: '100px' }}>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>
  <div className="w-full justify-center " >
  <h1 className="animate-text bg-gradient-to-r text-center drop-shadow-xl animate-pulse from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black">
    Contact Me
   </h1>
  
  </div>
  
  
  </div>
  
  <form action="https://api-ch80.onrender.com/submit-form" method="POST" >
  <input type="text" name="name" placeholder="Enter Your Name"  required="" className="input input-bordered mt-2 ml-2 mr-2 input-error w-full max-w-xs" />
  <input type="text" name="email" placeholder="Enter Your Email" required="" className="input input-bordered m-2 input-success w-full max-w-xs" />
  <textarea  name="messages" className="textarea m-2 w-full textarea-secondary" required="" placeholder="Message"></textarea>
  <button type="submit" className="btn m-2 w-full btn-outline btn-secondary">Send</button>
  
  </form>
          </div>
  </div>
    </div>
      
      }
 




{showComponent3 && 



<div className="h-screen w-full fixed  flex-initial justify-center place-items-center  bg-cover"  >
       
   

<div className="flex justify-center h-screen items-center">
<div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure> <Player  className="blur-xl"
 autoplay 
 loop
 speed="1"
 src="https://assets5.lottiefiles.com/packages/lf20_qvjEZvgnkO.json"
 style={{ height: '100%', width: '100%' }}>
 <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} /> 
 </Player></figure>
<div className="card-body w-full text-center ">
<div className="card-actions justify-center">
<button onClick={alert12}  className="btn justify-center  btn-primary">Comming Soon !</button>
</div>
</div>
</div>
 </div>

</div>




}
{showComponent5 &&  <div class="h-screen flex items-center justify-center">
          
     
          <div className="mockup-code">
          
   
     <pre data-prefix="$"><code>npm i</code></pre> 
     <pre data-prefix=">" className="text-warning"><code>npm run build</code></pre> 
     <pre data-prefix=">" className="text-success"><code>npm start</code></pre>
     <pre data-prefix=">" className="text-warning"><code>Done!</code></pre> 
   
   
     <div class="flex justify-center items-center">
          <button onClick={codes} className="btn mt-5 btn-outline place-items-center justify-center btn-success">Get The Codes</button>
   
   </div>
        
   
   </div>
       </div>}

    </div>
  );
};

export default Home;
