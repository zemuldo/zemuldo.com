import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../components/footer';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import entry from '../../components/entry';
import Head from 'next/head';
import Menu from '../../components/blog/menu';
import CardActionArea from '@material-ui/core/CardActionArea';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import NavigationIcon from '@material-ui/icons/Navigation';
import fetch from 'isomorphic-unfetch';

const api_url = process.env.API_URL;

const useStyles = makeStyles((theme) => ({
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
  },
  root: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  }
}));

function DropZone({ authorization }) {
  useEffect(() => {
    if (!authorization) window.location = '/blog/login?redirectTo=/blog/upload-image';
  });

  const classes = useStyles();

  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles);

  }, []);

  const handleUpload = async () => {

    const data = new FormData();
    for (const file of files) {
      data.append(file.name, file, file.name);
    }

    const res = await fetch(`${api_url}/image`, {
      method: 'POST',
      headers: { authorization },
      body: data
    });

    if (res.status === 200) setFiles([]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <React.Fragment>
      <Head>
        <title>Zemuldo Blog - Upload Image</title>
        <meta name="description" content="Blog by Danstan Onyango, Software Engineer, Nairobi, Kenya. Tech articles, Tutorials and Reviews. Sharing content that inspires." />
      </Head>
      <Container style={{ color: 'white' }} maxWidth="md">

        <Grid container justify="center" alignItems="center">
          <Menu authorization={authorization} />
        </Grid>
      </Container>
      <Container style={{ color: 'white' }} maxWidth="md">
        <div style={{ maxWidth: '600px', margin: 'auto' }} {...getRootProps()}>
          <input {...getInputProps()} />
          <Paper className={classes.paper}>
            <CardActionArea component="div" >
              <Card className={classes.card}>
                <div style={{ fontSize: '12px' }} className={classes.cardDetails}>
                  <CardContent>
                    <Typography component="h3" variant="h3">
                      {
                        files[0] ?
                          <div>
                            {
                              files.map(f => <p style={{ fontSize: '12px' }} key={f.name}>{f.name}</p>)
                            }
                          </div> :
                          isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag and drop some files here, or click to select files</p>
                      }
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </CardActionArea>
          </Paper>
        </div>
        <br />
        <div className={classes.root}>
          <Fab disabled={!files[0]} onClick={() => setFiles([])} variant="extended">
            <DeleteSweepIcon className={classes.extendedIcon} />
            Clear
          </Fab>
          <Fab disabled={!files[0]} onClick={handleUpload} variant="extended">
            <NavigationIcon className={classes.extendedIcon} />
            Upload
          </Fab>
        </div>

      </Container>
      <Footer />
    </React.Fragment>
  );
}

DropZone.propTypes = {
  authorization: PropTypes.string.isRequired
};

export default entry(DropZone);