import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import '../app.css'
export default function Loading() {
return(
    <div id="loading" class="h-screen flex items-center justify-center">
<div className="card  rounded-full " >
<div className="card-body">
<Player id="loading"
autoplay
loop
src="https://assets7.lottiefiles.com/packages/lf20_usmfx6bp.json"
style={{ height: '300px', width: '300px' }}
>
</Player>
</div>
</div>
</div>
)
}