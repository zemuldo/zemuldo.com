import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 6px',
    border: '1px solid',
    lineHeight: 1.1,
    borderColor: '#08a6f3',
    color: '#08a6f3',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      borderColor: 'grey',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'grey',
      borderColor: 'grey',
    },
    '&:focus': {
      borderColor: 'grey',
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    }
  },
}));

const TopTags = ({tags, onSelect}) => {
  const classes = useStyles();

  return (
    <div style={{margin: '20px 0px 20px 0px'}}>
      <Grid className={classes.root} justify="center" alignItems="center" container >
        <span style={{fontSize: '28px'}}>Top Tags:</span>
        {
          tags.map((tag) =>{
            return (
              <BootstrapButton onClick={() => onSelect(tag.name)} key={tag.name} variant="outlined" color="primary">
                {tag.name.toUpperCase()}
              </BootstrapButton>
            );
          })
        }
        <BootstrapButton onClick={() => onSelect()} style={{backgroundColor: '#08a6f3', color: 'white'}} variant="contained" color="primary">
               All
        </BootstrapButton>
      </Grid>
    </div>
  );
};

TopTags.propTypes = {
  tags: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TopTags;