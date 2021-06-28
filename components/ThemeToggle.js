import React, { useEffect } from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import PropTypes from 'prop-types';

function ThemeToggle({ darkMode }) {

  useEffect(() => {
    const listener = window.addEventListener('storage', (event) => {
      if (event.storageArea !== localStorage) return;
      const dm = localStorage.getItem('darkMode')
      dm === 'true' ? darkMode.enable() : darkMode.disable()
    });

    return () => window.removeEventListener(Animation, listener)
  }, [])

  

  const toggle = () => {
    darkMode.toggle()
  }

  if (darkMode.value === true) return (
    <div onClick={toggle} className='theme-toggle'>
      <WbSunnyIcon fontSize='large' color='primary' />
    </div>
  );
  else return (
    <div onClick={toggle} className='theme-toggle'>
      <Brightness3Icon fontSize='large' color='primary' />
    </div>
  );
 
}

ThemeToggle.propTypes = {
  currentTheme: PropTypes.string,
  onChange: PropTypes.func
};

export default ThemeToggle;