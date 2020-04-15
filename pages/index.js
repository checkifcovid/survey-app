import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

import Menu from '../components/menu'


const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(15, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0),
    },
  },
  map: {
    background: theme.palette.primary.main,
    color: '#fff',
    padding: theme.spacing(15, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  hero: {
    padding: theme.spacing(8, 2),
    background: 'url(macbook-mock.png) no-repeat 150% 50px',
    backgroundSize: 'contain',
    height: 680,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      height: 430,
      padding: theme.spacing(2, 1),
      background: 'none',
    },
  },
  bold: {
    fontWeight: 'bold',
  },
  primaryText: {
    padding: theme.spacing(3, 0),
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 0),
      textAlign: 'center',
    },
  },
  subText: {
    fontSize: '1.6rem',
    padding: theme.spacing(3, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 0),
      lineHeight: '20px',
      fontSize: '12px',
    },
  },
  herotext: {
    zIndex: 1,
    fontSize: '50px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  cluster: {
    width: 200,
  },
  image: {
    maxWidth: '100%',
    textAlign: 'center',
  },
  action: {
    margin: theme.spacing(3, 0),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  list: {
    padding: theme.spacing(0, 2),
  },
  italics: {
    fontStyle: 'italic',
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
  footer: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  footerlinks: {
    padding: theme.spacing(1),
  },
}))

const Index = () => {
  const classes = useStyles()
  return (
    <>
      <Menu />
      <Grid container className={classes.hero}>
        <Grid item sm={6}>
          <Container>
            <Typography className={classes.herotext} variant="h2" component="h1" gutterBottom>
              <span className={classes.bold}>{process.env.site_name}</span>
              {' '}
              calculates the probability of
              {' '}
              <span className={classes.primaryText}>{process.env.disease}</span>
              {' '}
              based on symptoms and location
            </Typography>
          </Container>
          <Container>
            <Typography className={classes.subText} variant="body1" component="body1" gutterBottom>
              The availability and speed of testing for COVID-19 is limited. This online tool calculates the likelihood of an infection using the data from confirmed
              {' '}
              {process.env.disease}
              {' '}
              cases and previously self-reported symptoms.
            </Typography>
            <Typography className={classes.primaryText} variant="h6" component="h6" gutterBottom>
              Wondering if you or someone you know may have COVID-19?
            </Typography>
            <Grid className={classes.action}>
              <Button href="/survey" variant="contained" color="primary">Check your symptoms</Button>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container className={classes.map}>
          <Container>
            <Grid container>
              <Grid item sm={5}>
                <img className={classes.image} src="/cluster-map.png" alt="Cluster Map" />
              </Grid>
              <Grid item sm={7}>
                <Typography variant="h3" component="h3" gutterBottom>
                  Get answers through data
                </Typography>
                <Typography variant="body1" component="body1" gutterBottom>
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
          </Container>
        </Grid>
        <Grid container className={classes.section}>
          <Grid container>
            <Container>
              <Grid container>
                <Grid item sm={7}>
                  <Typography variant="h3" component="h3" gutterBottom>
                    The power of crowdsourcing
                  </Typography>
                  <Typography variant="body1" component="body1" gutterBottom>
                    Data is very important in making decisions but isn't always available. Data for active cases (and deaths) is available but we need more data on the population who are experiencing only some of the symptoms.
                  </Typography>
                  <Typography variant="body1" component="body1" gutterBottom>
                    By conducting survey sampling, especially during an outbreak, data will be collected, analyzed and made available.
                  </Typography>
                </Grid>
                <Grid item align="center" sm={5}>
                  <img className={classes.crowdsourcing} src="/crowdsource.png" alt="Crowdsourcing" />
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        <Grid className={classes.footer} container>
          <Grid item>
            <Typography variant="body2" color="textSecondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="/">
                {process.env.site_name}
              </Link>
              {' '}
              {new Date().getFullYear()}
              .
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary" align="center">
              Powered by: FindTheCluster
            </Typography>
          </Grid>
          <Grid item>
            <Link target="_blank" className={classes.footerlinks} href="https://github.com/findthecluster/api-app/wiki">Developer API</Link>
            <Link className={classes.footerlinks} href="/">Privacy Policy</Link>
            <Link className={classes.footerlinks} href="/">Contact Us</Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Index
