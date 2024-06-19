import React, { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Link from '../link';
import NewIcon from '@material-ui/icons/NoteAdd';
import ImageIcon from '@material-ui/icons/Image';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import LogOut from '@material-ui/icons/Lock';
import ShouldRender from '../tools/ShoulRender';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Container, makeStyles, useTheme } from '@material-ui/core';
import BubbleChartRoundedIcon from '@material-ui/icons/BubbleChartRounded';
import CustomMenuItem from './MenuItem';

const api_url = process.env.NEXT_PUBLIC_API_URL;
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const useStyles = makeStyles(theme => ({
  greenAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: 10,
    color: '#fff',
    backgroundColor: '#08a6f3',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  greenAvatarGreen: {
    width: theme.spacing(3),
    height: theme.spacing(3),
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
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontSize: '24px',
    '& span': {
      marginLeft: '-6px'
    }
  },
  menuIcon: {
    fontSize: '16px'
  }

}));

const Menu = (props) => {
  const { authorized, children, router } = props;
  const classes = useStyles();
  const [activateLogin, setActivateLogin] = useState(0);
  const [user, setUser] = useState(null);

  const theme = useTheme();
    
  
  const fetchUser = async () => {
    if (authorized) {
      const res = await fetch(`${api_url}/user`, { credentials: 'include' });
      if (res.status === 401) {
        window.open(`${api_url}/user/auth/github?redirectTo=${window.location.href || base_url}&exit=true`, 'Signing in', 'width=700,height=700,top=70,left=500,resizable=0,menubar=yes');
      }
      const user = await res.json();
      setUser(user);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <Container maxWidth="sm">

        <div style={{ margin: '10px 0px 10px 0px', }}>
          <Grid justify="space-around" alignItems="center" container >
            <CustomMenuItem themeColor={theme.palette.text.primary} isActive={router.pathname === '/'} classes={classes} >
              <Link href='/'>
                <span className={classes.menuItem} >
                  <Avatar component='span' className={classes.greenAvatar}>
                    <HomeIcon className={classes.menuIcon} />
                  </Avatar>
                  <span>About Me</span>
                </span>
              </Link>
            </CustomMenuItem>
            <CustomMenuItem themeColor={theme.palette.text.primary} isActive={router.pathname === '/journey'} classes={classes} >
              <Link href='/journey'>

                <span className={classes.menuItem}>
                  <Avatar className={classes.greenAvatar}>
                    <TrendingUpIcon className={classes.menuIcon} />
                  </Avatar>
                  <span>My Journey</span>
                </span>
              </Link>
            </CustomMenuItem>
            
            <CustomMenuItem themeColor={theme.palette.text.primary} isActive={router.pathname === '/blog'} classes={classes} >
              <Link href='/blog'>
                <span className={classes.menuItem}>
                  <Avatar className={classes.greenAvatar} src='/images/blog.png'>
                  </Avatar>
                  <span>My Blog</span>
                </span>
              </Link>
            </CustomMenuItem>

            <ShouldRender condition={authorized}>
             

              <CustomMenuItem themeColor={theme.palette.text.primary} isActive={router.pathname === '/blog/drafts'} classes={classes} >
                <Link href='/blog/drafts'>
                  <span className={classes.menuItem}>
                    <Avatar className={classes.greenAvatar} src='/images/draft.png'>
                    </Avatar>
                    <span>Drafts</span>
                  </span>
                </Link>
              </CustomMenuItem>

            

              <CustomMenuItem themeColor={theme.palette.text.primary} isActive={router.pathname === '/blog/new'} classes={classes} >
                <Link href="/blog/new">
                  <span className={classes.menuItem}>
                    <Avatar className={classes.greenAvatar}>
                      <NewIcon className={classes.menuIcon} />
                    </Avatar>
                    <span>New Post</span>
                  </span>
                </Link>
              </CustomMenuItem>

              <CustomMenuItem themeColor={theme.palette.text.primary} isActive={router.pathname === '/blog/upload-image'} classes={classes} >
                <Link href="/blog/upload-image">
                  <span className={classes.menuItem}>
                    <Avatar className={classes.greenAvatar}>
                      <ImageIcon className={classes.menuIcon} />
                    </Avatar>
                    <span>Uplod Image</span>
                  </span>
                </Link>
              </CustomMenuItem>

              <CustomMenuItem themeColor={theme.palette.text.primary} isActive={router.pathname === '/blog/images'} classes={classes} >
                <Link href="/blog/images">

                  <span className={classes.menuItem}>
                    <Avatar className={classes.greenAvatar}>
                      <PhotoLibraryIcon className={classes.menuIcon} />
                    </Avatar>
                    <span>Images</span>
                  </span>
                </Link>
              </CustomMenuItem>
            </ShouldRender>

            {router.pathname.includes('/blog') && !authorized && activateLogin < 4 &&
              <Avatar
                onClick={() => setActivateLogin(activateLogin + 1)}
                className={classes.greenAvatarGreen}>
                <VpnKeyIcon className={classes.menuIcon} />
              </Avatar>
            }

            {user && <Avatar alt="User profile" className={classes.avatar} src={user.profilePhotoUrl} />}

            {router.pathname.includes('/blog') && !authorized && activateLogin >= 4 &&
              <Link href={`${api_url}/user/auth/github?redirectTo=${window.location.href || `${base_url}/blog`}`}>
                <Avatar className={classes.greenAvatarGreen}>
                  <VpnKeyIcon className={classes.menuIcon} />
                </Avatar>

              </Link>
            }

            {user &&
              <Avatar onClick={() => {
                window.location.href = '/logout';
              }} className={classes.greenAvatar}>
                <LogOut className={classes.menuIcon} />
              </Avatar>
            }
          </Grid>
          <Grid container>
            {children}
          </Grid>
        </div>
      </Container>
      <Container maxWidth="md">
        <div className={classes.hrRoot}>
          <Grid
            justify="center"
            alignItems="center"
            container
            item
            xs={12}
            spacing={2}
          >
            <Grid item xs={5}>
              <hr style={{ background: 'linear-gradient(to left, #08a6f3, rgba(255, 0, 0, 0))' }} />
            </Grid>
            <Grid container item justify="center" xs={1}>
              <BubbleChartRoundedIcon style={{ fill: '#08a6f3' }} />
            </Grid>
            <Grid item xs={5}>
              <hr style={{ background: 'linear-gradient(to right, #08a6f3, rgba(255, 0, 0, 0))' }} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

Menu.propTypes = {
  router: PropTypes.object,
  classes: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  user: PropTypes.object,
  authorized: PropTypes.bool,
};

export default withRouter(Menu);
