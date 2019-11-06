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

const useStyles = makeStyles(() => ({
  card: {
    color: 'white',
    boxShadow: '0 8px 15px 0 rgba(90, 91, 95, .33)',
    backgroundColor: 'rgb(23, 23, 23)',
    opacity: .8,
    display: 'flex'
  },
  cardDetails: {
    padding: '5px',
    minHeight: '280px'
  },
  cardMedia: {
    width: '70vh'
  },
  paper: {
    position: 'relative',
    backgroundColor: 'rgb(23, 23, 23)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
}));

const formatDescription = (description) => {
  if (description.length > 156) return <span>{`${description.slice(0, 156)}...`}</span>;
  else return description;
}

export default function Blogs({ posts, _infiniteScroll }) {
  const classes = useStyles();

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
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <br />
                      <Typography style={{ color: 'white' }}>
                        {formatDescription(post.description)}
                      </Typography>
                    </CardContent>
                    <CardContent>
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
