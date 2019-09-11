import React from 'react';
import Select from 'react-select'
import chroma from 'chroma-js';

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
        background: "transparent",
        // match with the menu
        borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        borderColor: "green",
        boxShadow: state.isFocused ? null : null,
        "&:hover": {
            borderColor: "green",
            borderLeft: "1px solid transparent",
            borderTop: "1px solid transparent",
            borderRight: "1px solid transparent"
        },
        borderLeft: "1px solid transparent",
        borderTop: "1px solid transparent",
        borderRight: "1px solid transparent"
    }),
    menu: provided => ({ ...provided, zIndex: 9999 , backgroundColor: "black", opacity: "0.9"}),
    input: styles => ({ ...styles, ...dot() }),
    placeholder: styles => ({ ...styles, ...dot(), color: "#08a6f3", fontWeight: "2em" }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
          ...styles,
          fontWeight: "bold",
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
        fontWeight: "bold"
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

    const options = [
        { value: 'javascript', label: 'JavaCript', color: '#fcba03' },
        { value: 'reactjs', label: 'ReactJS', color: '#08a6f3' },
        { value: 'postgresql', label: 'PostgreSQL', color: 'white' },
        { value: 'elixir', label: 'Elixir', color: '#a767f5' },
        { value: 'nodejs', label: 'NodeJS', color: '#40a832' },
        { value: 'ecto', label: 'Ecto', color: '#40a832' },
        { value: 'phoenix', label: 'Phoenix', color: 'orange' },
        { value: 'python', label: 'Python', color: '#fff305' },
        { value: 'sql', label: 'SQL', color: '#05daff' },
        { value: 'data', label: 'Data', color: '#05daff' }
    ]

    return (
        <Select
            defaultValue={defaultValue}
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