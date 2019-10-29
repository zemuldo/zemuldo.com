import React from 'react';
import Select from 'react-select';
import chroma from 'chroma-js';
import PropTypes from 'prop-types';
import {options} from './tools/stacks';

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
    const color = chroma(data.color);
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
          ? chroma.contrast(color, 'white') > 2
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
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
    fontWeight: 'bold'
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};

export default function Tags({ onChange, defaultValue }) {

  return (
    <Select
      value={defaultValue}
      instanceId="select-tags"
      isMulti
      name="colors"
      options={options}
      onChange={onChange}
      className="basic-multi-select"
      classNamePrefix="select"
      styles={colourStyles}
    />
  );
}

Tags.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.array
};