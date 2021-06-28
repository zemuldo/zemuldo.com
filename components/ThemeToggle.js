import React from 'react';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import PropTypes from 'prop-types';

function ThemeToggle({ darkMode}) {

  if (darkMode.value === true) return (
    <div onClick={darkMode.toggle} className='theme-toggle'>
      <WbSunnyIcon fontSize='large' color='primary' />
    </div>
  );
  else return (
    <div onClick={darkMode.toggle} className='theme-toggle'>
      <Brightness3Icon fontSize='large' color='primary' />
    </div>
  );
 
}

ThemeToggle.propTypes = {
  currentTheme: PropTypes.string,
  onChange: PropTypes.func
};

export default ThemeToggle;