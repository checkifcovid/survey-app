import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(15, 0),
  },
  hero: {
    padding: theme.spacing(15, 2),
    textAlign: 'center',
    background: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(hero.jpg) no-repeat 0',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color: '#dfe3ee',
    height: 500,
    [theme.breakpoints.down('sm')]: {
      height: 280,
      padding: theme.spacing(2, 1),
      backgroundAttachment: 'inherit',
      backgroundSize: '100%',
      background: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(hero.jpg) no-repeat 100%',
    },
  },
  herotext: {
    zIndex: 1,
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
  cluster: {
    width: 200,
  },
  button: {
    margin: theme.spacing(0, 1),
  },
  image: {
    maxWidth: '100%',
    width: 300,
    textAlign: 'center',
  },
  action: {
    margin: theme.spacing(2, 0),
    textAlign: 'center',
    width: '100%',
  },
  list: {
    padding: theme.spacing(0, 2),
  },
  crowdsourcing: {
    width: 200,
  },
  italics: {
    fontStyle: 'italic',
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
}))

const Index = () => {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.hero}>
        <Typography className={classes.herotext} align="center" variant="h2" component="h1" gutterBottom>
          {process.env.site_name}
          {' '}
          collects and analyzes data of health symptoms across Toronto and London
        </Typography>
        <Container>
          <Typography className={classes.text} align="center" variant="h5" component="h4" gutterBottom>
            Getting tested for COVID-19 is a challenge due to limited testing kits and health care systems getting overwhelmed with patients. There is a population of people who only experiences some of the symptoms (or even asymptomatic) but are often overlooked and less prioritized to undergo testing. Our aim is to collect geographic data of symptoms, analyze clusters, predict outbreaks and avoid community infection.
          </Typography>
        </Container>
      </Grid>
      <Container maxWidth="md">
        <Grid container>
          <Grid item>
            <Typography className={classes.italics} variant="p" component="p">
              {process.env.site_name}
              {' '}
              does not provide a medical diagnosis based on your responses but the data gathered will be used to identify patterns of symptoms across locations. This will be used for building data models and identifying clusters so that predicting outbreaks of diseases (such as COVID-19) is possible.
            </Typography>
          </Grid>
          <Grid item className={classes.action}>
            <Button className={classes.button} href="/features" variant="contained">Learn more</Button>
            <Button className={classes.button} href="/survey" variant="contained" color="primary">Start survey</Button>
          </Grid>
        </Grid>
        <Grid container className={classes.section}>
          <Grid item sm={4}>
            <img className={classes.image} src="/cluster-map.jpg" alt="Cluster Map" />
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h5" component="h5" gutterBottom>
              Get answers through data
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              The availability of data for symptoms is critical to answer questions like:
              <ul className={classes.list}>
                <li>
                  Which community or neighbourhood is
                  {' '}
                  <strong>fever</strong>
                  {' '}
                  prevalent? Which particular region experiences
                  {' '}
                  <strong>cough</strong>
                  {' '}
                  more often?
                </li>
                <li>Is there anyone within the cluster who travelled recently to hot zones such as China?</li>
                <li>How do symptoms progresses or gets trasmitted to other locations over time?</li>
                <li>
                  Is there an increasing cases of
                  {' '}
                  <strong>runny nose</strong>
                  {' '}
                  in my neighbourhood?
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Grid maxWidth="sm" container className={classes.section}>
          <Grid item sm={8}>
            <Typography variant="h5" component="h5" gutterBottom>
              The power of crowdsourcing
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              Data is very important in making decisions but isn't always available. Data for active cases (and deaths) is available but we need more data on the population who are experiencing only some of the symptoms.
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              By conducting survey sampling, especially during an outbreak, data will be collected, analyzed and made available.
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <img className={classes.crowdsourcing} src="/crowdsourcing.png" alt="Crowdsourcing" />
          </Grid>
        </Grid>
        <Grid className={classes.action}>
          <Button href="/survey" variant="contained" color="primary">Start survey</Button>
        </Grid>
      </Container>
    </>
  )
}

export default Index
