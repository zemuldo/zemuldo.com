import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { Theme, createStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles(theme => ({
  
  card: {
    color: "white",
    boxShadow: "0 8px 15px 0 rgba(90, 91, 95, .33)",
    backgroundColor: "transparent",
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
}));

const featuredPosts = [
  {
    id: "f8a77bc3d",
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  },
  {
    id: "7bf8a2c3d",
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  },
  {
    id: "7bf8a223d",
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  },
  {
    id: "7bf8a2d3d",
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  },
  {
    id: "7bf8a243d",
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  }
];

export default function Blogs() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {featuredPosts.map(post => (
        <Grid item key={post.id} xs={12} md={6}>
          <CardActionArea component="a" href={`/blog/${post.id}`}>
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
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
}
