import React from 'react';
import Router, { withRouter } from 'next/router';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Link from '../link';
import NewIcon from '@material-ui/icons/NoteAdd';
import ImageIcon from '@material-ui/icons/Image';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import LogOut from '@material-ui/icons/Lock';
import { destroyCookie } from 'nookies';


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

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activateLogin: 0
    };
  }

  async componentDidMount() {
    const { authorization } = this.props;
    if (authorization) {
      const res = await fetch(`${api_url}/user`, { headers: { authorization } });
      const user = await res.json();
      this.setState({ user });
    }
  }
  render() {
    const { authorization, classes, children, router } = this.props;
    const { user, activateLogin } = this.state;
    const path = currentPath();

    return (
      <div style={{ margin: '10px 0px 10px 0px', }}>
        <Grid container >
          <Link href='/'>
            <Avatar className={classes.greenAvatar}>
              <HomeIcon />
            </Avatar>
          </Link>
          {
            router && router.pathname !== '/blog' &&
            <Link href='/blog'>
              <Avatar className={classes.greenAvatar} src='/images/blog.png'>
              </Avatar>
            </Link>
          }

          {path !== '/blog/drafts' && authorization && <Link href='/blog/drafts'>
            <Avatar className={classes.greenAvatar} src='/images/draft.png'>
            </Avatar>
          </Link>
          }
          {
            path !== '/blog/new' && this.props.authorization &&
            <Link href="/blog/new">
              <Avatar className={classes.greenAvatar}>
                <NewIcon />
              </Avatar>
            </Link>
          }

          {
            path !== '/blog/upload-image' && this.props.authorization &&
            <Link href="/blog/upload-image">
              <Avatar className={classes.greenAvatar}>
                <ImageIcon />
              </Avatar>
            </Link>
          }

          {children}

          {
            path !== '/blog/images' &&
            <Link href="/blog/images">
              <Avatar className={classes.greenAvatar}>
                <PhotoLibraryIcon />
              </Avatar>
            </Link>
          }

          {user && <Avatar alt="User profile" className={classes.avatar} src={user.profilePhotoUrl} />}
          {user &&
            <Avatar onClick={() => {
              destroyCookie(null, 'authorization', {
                path: '/',
              });
              Router.reload(window.location.pathname);
              window.reload;
            }} className={classes.greenAvatar}>
              <LogOut />
            </Avatar>}

          {path.includes('/blog') && !authorization && activateLogin > 4 && <Link href={`/blog/login?redirectTo=${path}`}>
            <Avatar className={classes.greenAvatarGreen}>
              <VpnKeyIcon />
            </Avatar>
          </Link>
          }

          {!user && <div onClick = {() => this.setState({activateLogin: activateLogin + 1})} style={{width: '100px', height: '50px'}}></div>}
        </Grid>
      </div>
    );
  }
}

Menu.propTypes = {
  router: PropTypes.object,
  classes: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  user: PropTypes.object,
  authorization: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

export default withRouter(withStyles(styles)(Menu));
