import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import fetch from 'isomorphic-unfetch';
import Menu from '../../components/blog/Menu';
import Head from 'next/head';
import Footer from '../../components/footer';
import PropTypes from 'prop-types';
import entry from '../../components/entry';

const api_url = process.env.API_URL;
const images_url = process.env.SITE_IMAGES_URL;

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
}));

function Album({images, authorized, user}) {
  const [search, setSearch] = useState('');
  const [stateImages, setStateImages] = useState(images);
  const classes = useStyles();

  const  fetchImages = async (e) => {
    if (e.key === 'Enter') {
      const res = await fetch(`${api_url}/image?skip=0&limit=50&search=${search}`);
      const data = await res.json();
      setStateImages(data);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Zemuldo Blog - I write and Share my Experience.</title>
        <meta name="description" content="Blog by Danstan Onyango, Software Engineer, Nairobi, Kenya. Tech articles, Tutorials and Reviews. Sharing content that inspires." />
      </Head>
      <Menu authorized={authorized} />
      <Container style={{ color: 'white', backgroundColor: 'rgb(23, 23, 23)' }} maxWidth="md">
        <TextField
          value={search}
          id="coverPhotoUrl"
          label="Search"
          fullWidth={true}
          InputProps={{
            className: classes.materialInput
          }}
          InputLabelProps={{
            className: classes.floatingLabelFocusStyle,
          }}
          onKeyDown={fetchImages}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Container>
      <br/>
      <Container style={{ color: 'white', backgroundColor: 'rgb(23, 23, 23)' }} maxWidth="md">
        <Grid container spacing={4}>
          {stateImages.map(image => (
            <Grid item key={image.name} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`${images_url}/${image.name}`}
                  title={image.name.split('-').join(' ').split('.')[0]}
                />
                 
                <CardActions>
                  <Button 
                    onClick={() => {
                      navigator.clipboard.writeText(`${images_url}/${image.name}`);
                    }} 
                    size="small" color="primary"
                  >
                      Copy Link
                  </Button>
                  {
                    authorized && user.id === image.ownerId &&
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

Album.getInitialProps = async (_) =>{
  const res = await fetch(`${api_url}/image?skip=0&limit=10`);
  const data = await res.json();
  return {
    images: data,
  };
};

Album.propTypes = {
  authorized: PropTypes.bool,
  images: PropTypes.array.isRequired,
  user: PropTypes.object
};

export default entry(Album);