import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const Contact = () => {
   
  return (
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

<form action="http://64.227.146.2:3000/submit-form" method="POST" >
<input type="text" name="name" placeholder="Enter Your Name"  required="" className="input input-bordered mt-2 ml-2 mr-2 input-error w-full max-w-xs" />
<input type="text" name="email" placeholder="Enter Your Email" required="" className="input input-bordered m-2 input-success w-full max-w-xs" />
<textarea  name="messages" className="textarea m-2 w-full textarea-secondary" required="" placeholder="Message"></textarea>
<button type="submit" className="btn m-2 w-full btn-outline btn-secondary">Send</button>

</form>
        </div>
</div>
  </div>
  );
};
export default Contact;
