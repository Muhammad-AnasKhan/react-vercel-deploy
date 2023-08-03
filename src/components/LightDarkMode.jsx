import { useState } from "react";
import classnames from 'classnames';

export default function LightDarkMode() {
    const [isDarkMode, setDarkMode] = useState(false);
    function ToggleMode() {
        setDarkMode(!isDarkMode);
    }
    return (
        <>
            <h1>Light / Dark toggler</h1>
            <div className={classnames('lightDarkBody', {'darkMode':isDarkMode}, 'border-radius')}>
                <button onClick={ToggleMode}>Toggle</button>
                <h1>{isDarkMode ? "Dark" : "Light"}</h1>
            </div>
        </>
    );
}