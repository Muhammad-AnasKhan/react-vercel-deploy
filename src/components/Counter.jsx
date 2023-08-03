import { useState, useEffect } from "react";
export default function Counter() {
    const [count, setCounter] = useState(0);
    function incerementCount() {
        setCounter(count + 1);
    }
    const decerementCount = () => {
        setCounter(count - 1);

    };
    //called for the very first time component rendering(initilay) 
    useEffect(() => {
        console.log("initial render")
    }, [])

    //called at re-rendering(changing state) 
    useEffect(() => {
        console.log("Component was re-rendered😁😁")
    })
    
    //called when dependency array will change
    useEffect(()=>{
        console.log("Counter is changed ++")
    }, [count])

    return (
        <>
        <h1>Counter</h1>
        <div className="counterBody border-radius" >
            <h1>{count}</h1>
            <div>
                <button onClick={incerementCount}>
                    Increment +
                </button>
                <button onClick={decerementCount}>
                    Decrement -
                </button>

            </div>
        </div>
        </>
    );
}