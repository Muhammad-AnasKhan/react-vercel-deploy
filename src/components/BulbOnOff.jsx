import '../styles/Style.css';
import bulbOff from '../img/bulb-off.jpg'
import bulbOn from '../img/bulb-on.jpg'
import { useState } from 'react';
export default function BulbOnOff(){
     
    const [isBulbOn, toggleBulb] = useState(false);
    function ToggleBulb(){
        toggleBulb(!isBulbOn);
    }
    return (
        <>
        <h1>Toggle Bulb</h1>
        <div className="bulbBody border-radius">
            <button onClick={ToggleBulb}>Toggle</button>
            <img src={isBulbOn?bulbOn:bulbOff} alt="" />
            <h1>{isBulbOn?"On":"Off"}</h1>
        </div>
        </>
    );

}
