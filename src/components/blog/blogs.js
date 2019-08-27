import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { InView } from 'react-intersection-observer'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  card: {
    color: "white",
    boxShadow: "0 8px 15px 0 rgba(90, 91, 95, .33)",
    backgroundColor: "transparent",
    display: "flex"
  },
  cardDetails: {
    flex: 1,
    padding: '5px'
  },
  cardMedia: {
    width: 160
  }
}));


export default function Blogs({ posts, infiniteScroll }) {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {posts.map(post => (
        <Grid style={{height: "auto !important"}} item key={post._id} xs={12} md={6}>
          <CardActionArea component="a" href={`/blog/${post._id}`}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {post.date}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.description}
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image={post.coverPhotoUrl}
                  title="Image title"
                />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
      <InView as="div" onChange={infiniteScroll}>
  </InView>
    </Grid>
  );
}
