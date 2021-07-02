import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import CustomLink from '../link';
import { Paper } from '@material-ui/core';
import { format } from 'date-fns';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: '0 8px 15px 0 rgba(90, 91, 95, .33)',
    backgroundColor: theme.palette.background.card,
    display: 'flex'
  },
  cardDetails: {
    padding: '5px',
    height: '360px',
    overflow: 'hidden'
  },
  cardMedia: {
    width: '70vh'
  },
  paper: {
    position: 'relative',
    backgroundColor: theme.palette.background.card,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:hover': {
      backgroundColor: 'black'
    }
  }
}));

const formatDescription = (description) => {
  if (description.length > 156) return <span>{`${description.slice(0, 156)}`}<span style={{color: '#08a6f3'}}>...</span></span>;
  else return description;
};

export default function Blogs({ posts, _infiniteScroll }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container spacing={4}>
      {posts.map(post => (
        <Grid style={{ height: 'auto !important' }} item key={post._id} xs={12} md={6}>
          <Paper className={classes.paper}>
            <CustomLink href={`/blog/${post.title.toLowerCase().split(' ').join('-')}-${post._id}`}>
              <CardActionArea component="div" >
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography style={{ color: '#08a6f3' }} component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <div style={{padding: '15px 0px 15px'}}>
                        <hr style={{ background: theme.palette.text.primary }} />
                      </div>
                    </CardContent>
                    <CardContent style={{marginTop: '-35px', fontSize: '12px'}}>
                      {format(new Date(post.createdAt), 'PPPP')}
                      {' ~ '}
                      {
                        post.tags.map(tag =>
                          <span key={tag.value}>
                            {' '}
                            <span className='blog-tags' style={{ color: tag.color, boxShadow: '0 8px 15px 0 rgba(95, 91, 95, .33)', backgroundColor: 'black', border: 'solid 2px transparent', borderRadius: '3px', cursor: 'pointer' }} >
                              {tag.label}
                            </span>
                          </span>
                        )
                      }
                    </CardContent>
                    
                    <CardContent>
                      <Typography>
                        {formatDescription(post.description)}
                      </Typography>
                    </CardContent>

                  </div>
                </Card>
              </CardActionArea>
            </CustomLink>
          </Paper>
        </Grid>
      ))}
      {/* <InView as="div" onChange={infiniteScroll}></InView> */}
    </Grid>
  );
}

Blogs.propTypes = {
  _infiniteScroll: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};
