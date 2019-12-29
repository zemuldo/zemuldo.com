import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import fetch from 'isomorphic-unfetch';
import Menu from '../../components/blog/menu';
import Head from 'next/head';
import Footer from '../../components/footer';
import PropTypes from 'prop-types';
import entry from '../../components/entry';
import { parseCookies } from 'nookies';

const api_url = process.env.API_URL;

const useStyles = makeStyles(theme => ({
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
  }
}));

function Album({images, authorization, user}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Head>
        <title>Zemuldo Blog - I write and Share my Experience.</title>
        <meta name="description" content="Blog by Danstan Onyango, Software Engineer, Nairobi, Kenya. Tech articles, Tutorials and Reviews. Sharing content that inspires." />
      </Head>
      <Container style={{ color: 'white' }} maxWidth="md">

        <Grid container justify="center" alignItems="center">
          <Menu authorization={authorization} />
        </Grid>
      </Container>
      <Container style={{ color: 'white', backgroundColor: 'rgb(23, 23, 23)' }} maxWidth="md">
        <Grid container spacing={4}>
          {images.map(image => (
            <Grid item key={image.name} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`${process.env.SITE_IMAGES_URL}/${image.name}`}
                  title={image.name.split('-').join(' ').split('.')[0]}
                />
                 
                <CardActions>
                  <Button size="small" color="primary">
                      View
                  </Button>
                  {
                    authorization && parseInt(user.oAuthId, 16) === parseInt(image.ownerId, 16) &&
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  }
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

Album.getInitialProps = async (ctx) =>{
  const { authorization } = parseCookies(ctx);
  const res = await fetch(`${api_url}/image?skip=0&limit=10`);
  const data = await res.json();
  let user;
  if (authorization) {
    const res = await fetch(`${api_url}/user`, { headers: { authorization } });
    user = await res.json();
  }

  return {
    images: data,
    user
  };
};

Album.propTypes = {
  authorization: PropTypes.string,
  images: PropTypes.array.isRequired,
  user: PropTypes.object
};

export default entry(Album);