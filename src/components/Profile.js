import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
document.title = "Arman Mondal";
const Profile = () => {
    
  return (
   <div className="bg-blend-screen 	h-screen justify-center flex items-center " >

     <div className="justify-center place-content-start card w-96 border-2 border-sky-400  hover:border-green-500 shadow-xl">
   
  <div className="card-body  h-max	">
  
  <label className="swap swap-flip text-9xl">
<input type="checkbox" />
  
  <div className="swap-on"> <div className="avatar drop-shadow-2xl		 justify-center ">
  <div className="w-24 justify-center drop-shadow-2xl		 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://raw.githubusercontent.com/arman-mondal/images/dce0a9a4bdde23179284cc0b1a2dcc93c20f0f49/WhatsApp%20Image%202023-05-05%20at%203.25.30%20PM.jpeg" />
  </div>
</div></div>
  <div className="swap-off"><div className="avatar drop-shadow-2xl 	 justify-center ">
  <div className="w-24 justify-center drop-shadow-2xl		  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <Player className="mb-5" 
    autoplay
    loop
    speed="1"
    src="https://assets3.lottiefiles.com/packages/lf20_14uss47o.json"
    style={{ height: '100px', width: '100px' }}>
<Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
  </div>


</div>

</div>
</label>



<div className="w-full justify-center " >
 <h1 className="animate-text bg-gradient-to-r text-center drop-shadow-xl animate-pulse from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black">
  Arman Mondal
 </h1>
 <div class="flex justify-center text-center items-center">
  <p className="text-center" >I am a Professional Software Developer </p>  


</div>
<div class="flex justify-center text-center items-center">
<a href="https://www.facebook.com/arman.mondal.821" ><img src="https://img.icons8.com/color/48/facebook-new.png" className="w-10 h-10" /></a>
<a className="pl-5" href="https://www.instagram.com/arman.mondal.821/" ><img src="https://img.icons8.com/color/48/instagram-new--v1.png" className="w-10 h-10" /></a>
<a className="pl-5" href="https://github.com/arman-mondal" ><img src="https://img.icons8.com/fluency/48/github.png" className="w-10 h-10" /></a>

    </div>
 </div>



  </div>
</div>
   </div>
  );
};
export default Profile;