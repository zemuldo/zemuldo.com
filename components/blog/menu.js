import React from 'react';
import { withRouter } from 'next/router';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from '../link';

const api_url = process.env.API_URL;

const currentPath = () => {
  if (typeof window === 'object') {
    return window.location.pathname;
  } else {
    return '/blog';
  }
};

const styles = theme => ({
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#08a6f3',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  greenAvatarGreen: {
    margin: 10,
    color: '#fff',
    backgroundColor: 'green',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  avatar: {
    margin: 10,
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
});

class Menu extends React.Component{

  constructor(props){
    super(props);
    this.state = {};
  }

  async componentDidMount(){
    const {authorization} = this.props;
    if (authorization) {
      const res = await fetch(`${api_url}/user`, { headers: { authorization } });
      const user = await res.json();
      this.setState({user});
    }
  }
  render () {
    const { authorization, classes, children, router } = this.props;
    const {user} = this.state; 

    return (
      <div style={{ margin: '10px 0px 10px 0px', }}>
        <Grid container >
          <Link href='/'>
            <Avatar className={classes.greenAvatar}>
              <HomeIcon />
            </Avatar>
          </Link>
        {
          router.pathname !== '/blog' &&
          <Link href='/blog'>
            <Avatar className={classes.greenAvatar} src='/static/images/blog.png'>
            </Avatar>
          </Link>
        }
          

          {authorization && <Link href='/blog/drafts'>
            <Avatar className={classes.greenAvatar} src='/static/images/draft.png'>
            </Avatar>
          </Link>
          }
          {children}

          {!authorization && <Link href={`/blog/login?redirectTo=${currentPath()}`}>
            <Avatar className={classes.greenAvatarGreen}>
              <VpnKeyIcon/>
            </Avatar>
          </Link>
          }

          {user && <Avatar alt="User profile" className={classes.avatar} src={user.profilePhotoUrl} />}
        </Grid>
      </div>
    );
  }
}

Menu.propTypes = {
  router: PropTypes.object,
  classes: PropTypes.object,
  children: PropTypes.array,
  user: PropTypes.object,
  authorization: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

export default withRouter(withStyles(styles)(Menu));
