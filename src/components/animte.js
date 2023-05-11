import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

document.title = "Comming Soon !";

function Animate() {

function alert1() {
alert("Comming Soon !");
}
    


    return (

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
      <button onClick={alert1} className="btn justify-center  btn-primary">Comming Soon !</button>
    </div>
  </div>
</div>
        </div>

</div>

       

        )
};

export default Animate;