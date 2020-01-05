import React from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import PropTypes from 'prop-types';

const api_url = process.env.API_URL;
const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: (base, state) => ({
    ...base,
    background: 'transparent',
    // match with the menu
    borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
    borderColor: 'green',
    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      borderColor: 'green',
      borderLeft: '1px solid transparent',
      borderTop: '1px solid transparent',
      borderRight: '1px solid transparent'
    },
    borderLeft: '1px solid transparent',
    borderTop: '1px solid transparent',
    borderRight: '1px solid transparent'
  }),
  menu: provided => ({ ...provided, zIndex: 9999 , backgroundColor: 'rgb(23, 23, 23', }),
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot(), color: '#08a6f3', fontWeight: '2em' }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma('black');
    return {
      ...styles,
      fontWeight: 'bold',
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'black') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
    
      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),
      },
    };
  },
  multiValue: (styles, { _data }) => {
    const color = chroma('black');
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'black',
    fontWeight: 'bold'
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: 'black',
    ':hover': {
      backgroundColor: 'red',
      color: 'black',
    },
  }),
};

export default function MetaTags({ onChange, defaultValue, options }) {

  return (
    <Select
      value={defaultValue}
      instanceId="select-meta-tags"
      isMulti
      name="colors"
      options={options}
      onChange={onChange}
      className="basic-multi-select"
      classNamePrefix="select"
      styles={{...colourStyles, multiValue: null}}
    />
  );
}

MetaTags.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.array,
  options: PropTypes.array
};
