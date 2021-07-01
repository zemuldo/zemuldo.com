import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import CustomLink from '../link';

const styles = theme => ({
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#08a6f3',
  },
  avatar: {
    margin: 10,
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto'
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(4),
    backgroundColor: 'transparent',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    border: 'solid 1px grey',
    borderRadius: '7px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: theme.palette.background.card,
    opacity: .2
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  }
});

function FeaturedPost({ featuredPost, classes }) {
  return (
    <CustomLink href={`/blog/${featuredPost.post.title.toLowerCase().split(' ').join('-')}-${featuredPost.post._id}`}>
      <Paper className={classes.mainFeaturedPost}>
        <div className={classes.overlay} />
        <Grid style={{ minHeight: '400px' }} className="eph" container>
          <Grid item md={6}>

            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                style={{
                  color: '#08a6f3',
                  fontSize: '3em'
                }}
              >
                {featuredPost.post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {featuredPost.post.description}
              </Typography>
              <span >Read Now</span>
            </div>

          </Grid>
          <Grid style={{backgroundImage: `url(${featuredPost.post.coverPhotoUrl})`}} item md={6}/>
        </Grid>
      </Paper>
    </CustomLink>
  );
}

FeaturedPost.propTypes = {
  classes: PropTypes.object.isRequired,
  featuredPost: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeaturedPost);