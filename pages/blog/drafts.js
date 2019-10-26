import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import fetch from 'isomorphic-unfetch';
import { parseCookies } from 'nookies';
import PropTypes from 'prop-types';
import CustomLink from '../../components/link';
import Menu from '../../components/blog/menu';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Head from 'next/head';
import Router from 'next/router';


const api_url = process.env.API_URL;

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: 'transparent',
    boxShadow: '0 8px 15px 0 rgba(90, 91, 95, .33)',
    overflow: 'hidden',
    color: 'white'
  },
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
    color: 'white',
    boxShadow: '0 8px 15px 0 rgba(90, 91, 95, .33)',
    backgroundColor: 'transparent',
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

export default function Drafts({ drafts, authorization }) {
  const classes = useStyles();

  const [data, setDrafts] = useState(drafts);

  const [open, switchDeleteModal] = useState(null);

  async function deleteDraft() {

    await fetch(`${api_url}/post/draft/${open}`, {
      method: 'delete',
      headers: { authorization, 'Accept': 'application/json', 'Content-Type': 'application/json' }
    });

    const draftRes = await fetch(`${api_url}/post/draft`, {
      method: 'get',
      headers: { authorization, 'Accept': 'application/json', 'Content-Type': 'application/json' }
    });

    const data = await draftRes.json();
    switchDeleteModal(null);
    setDrafts(data);
  }

  return (
    <React.Fragment>
      <Head>
        <title>Zemuldo Blog ~ Drafts</title>
      </Head>
      <Dialog
        BackdropProps={{
          classes: {
            root: classes.root
          }
        }
        }
        PaperProps={{
          classes: {
            root: classes.paper
          }
        }}
        open={open ? true : false}
        onClose={() => switchDeleteModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Please confirm'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <span style={{ color: 'white' }}>Are you sure to Delete?</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => switchDeleteModal(false)} color="primary">
            Cancel
          </Button>
          <Button style={{ color: 'red' }} onClick={deleteDraft} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Container style={{ color: 'white' }} maxWidth="md">

        <Grid container justify="center" alignItems="center">
          <Menu authorization={authorization} />
          <Grid container spacing={4}>
            {
              !data[0] && 
              <div className='center-content'>
                <h1>Sorry Nothing here 😭😭</h1>
              </div>
             
            }
            {data[0] && data.map(draft => (
              <Grid item key={draft._id} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={draft.coverPhotoUrl || '/static/images/miscellaneous/rocket_large.png'}
                    title="Zemuldo Blog Draft Cover Image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {draft.title || 'Post Title Here'}
                    </Typography>
                    <Typography>
                      {draft.description || 'Some cool post description will go here'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <CustomLink href={`/blog/draft/${draft._id}`}>
                      Edit Now
                    </CustomLink>
                    <Button onClick={() => switchDeleteModal(draft._id)} style={{ color: 'red' }} size="small" color="primary">
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

Drafts.propTypes = {
  drafts: PropTypes.array.isRequired,
  authorization: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])])
};

Drafts.getInitialProps = async (ctx) => {
  const { authorization } = parseCookies(ctx);

  const draftRes = await fetch(`${api_url}/post/draft`, {
    method: 'get',
    headers: { authorization, 'Accept': 'application/json', 'Content-Type': 'application/json' }
  });

  let data;
  try {
    data = await draftRes.json();
  } catch (_e) {
    data = []; 
  }
  return { drafts: data, authorization };
};