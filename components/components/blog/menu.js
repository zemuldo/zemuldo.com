import React from 'react';
import { withRouter } from 'next/router';
import HomeIcon from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from '../link';

const useStyles = makeStyles(theme => ({
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#08a6f3',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  root: {
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
  floatingLabelFocusStyle: {
    color: '#08a6f3',
    '&:after': {
      color: '#08a6f3',
    },
  },
  materialInput: {
    borderBottom: '1px solid green',
    '&:after': {
      borderBottom: '1px solid green',
    },
    fontSize: '28px',
    color: '#08a6f3'
  },
  materialTextArea: {
    border: '1px solid transparent',
    '&:after': {
      border: '1px solid transparent',
    },
    fontSize: '16px',
    color: 'white',
    '& label.Mui-focused': {
      color: '#08a6f3',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'transparent',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'green',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    }
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

function Menu({ router }) {


  const classes = useStyles();

  return (
    <div style={{ margin: '10px 0px 10px 0px', }}>
      <Grid container >
        <Link href='/'>
          <Avatar className={classes.greenAvatar}>
            <HomeIcon />
          </Avatar>
        </Link>
        
        {
          router && router.route !== '/blog' &&
          <Link href='/blog'>
            <Avatar className={classes.greenAvatar} src='/static/images/blog.png'>
            </Avatar>
          </Link>
        }

      </Grid>
    </div>
  );
}

Menu.propTypes = {
  router: PropTypes.object
};

export default withRouter(Menu);
