import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import CustomLink from '../link';
import { format } from 'date-fns';
const { STATIC_IMAGES_URL } = process.env

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
    <CustomLink href={`/blog/${featuredPost.title.toLowerCase().split(' ').join('-')}-${featuredPost._id}`}>
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
                {featuredPost.title}
              </Typography>
              <Typography style={{fontSize: '24px'}} variant="p" color="inherit" paragraph>
                {featuredPost.description}
              </Typography>
              <p style={{ marginTop: '50px' }} >Published: {format(new Date(featuredPost.createdAt), 'PPPP')}</p>
              <div className="blog-tags">
                {featuredPost.tags.map((tag) => (
                  <span
                    className="blog-tags"
                    style={{
                      color: tag.color,
                      boxShadow: '0 8px 15px 0 rgba(95, 91, 95, .33)',
                      backgroundColor: 'black',
                      border: 'solid 2px transparent',
                      borderRadius: '3px',
                      cursor: 'pointer',
                      marginRight: '10px'
                    }}
                    key={tag.value}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </Grid>
          <Grid
            style={{ backgroundImage: `url(${featuredPost.coverPhotoUrl.replace('https://zemuldo.com/z-site-images', STATIC_IMAGES_URL) })` }}
            item md={6} />
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