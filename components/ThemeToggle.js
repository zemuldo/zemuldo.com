import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';

export default function ThemeToggle({ currentTheme, onChange}) {

    return (
        <div onClick={onChange} className='theme-toggle'>
            {currentTheme === 'dark' && <WbSunnyIcon fontSize='large' color='primary' />}
            {currentTheme === 'light' && <Brightness3Icon fontSize='large' color='primary' />}
        </div>
    );
}
