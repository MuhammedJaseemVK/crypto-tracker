import React, { createContext, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import LoadingBar from 'react-top-loading-bar'

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [darkTheme, setDarkTheme] = useState(true);
    const [progress, setProgress] = useState(0);
    return (
        <ThemeContext.Provider value={[darkTheme, setProgress]}>
            {props.children}
            <LoadingBar color={'rgb(14 165 233)'} progress={progress}
                onLoaderFinished={() => setProgress(0)} />
            <div className={`${darkTheme ? 'bg-white' : 'bg-black'} p-1 absolute top-5 right-5 rounded-full shadow-md`} onClick={() => setDarkTheme(!darkTheme)}>
                {
                    darkTheme ? <FaMoon className='text-yellow-500' size={50} /> : <FaMoon className='text-white' size={50} />
                }
            </div>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;