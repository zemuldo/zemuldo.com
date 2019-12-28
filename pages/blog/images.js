import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import fetch from 'isomorphic-unfetch';

const api_url = process.env.API_URL;

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album({images}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main> <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {images.map(image => (
            <Grid item key={image.name} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`${process.env.Z_SITE_IMAGES_URL}/${image.name}`}
                  title="Image title"
                />
                 
                <CardActions>
                  <Button size="small" color="primary">
                      View
                  </Button>
                  <Button size="small" color="primary">
                      Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </main>
    </React.Fragment>
  );
}

Album.getInitialProps = async () =>{
  const res = await fetch(`${api_url}/image?skip=0&limit=10`);
  const data = await res.json();

  return {
    images: data
  };
};