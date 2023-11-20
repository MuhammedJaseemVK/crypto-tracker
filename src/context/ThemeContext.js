import React, { createContext, useState } from 'react';
import {FaMoon} from 'react-icons/fa';

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
            {props.children}
            <div className={`${darkTheme ? 'bg-white' : 'bg-black'} p-1 absolute top-5 right-5 rounded-full shadow-md`} onClick={() => setDarkTheme(!darkTheme)}>
                {
                    darkTheme ? <FaMoon className='text-yellow-500' size={50} /> : <FaMoon className='text-white' size={50} />
                }
            </div>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;