import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  section: {
    margin: theme.spacing(5),
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
    padding: theme.spacing(4, 2),
    background: 'url(macbook-mock.png) no-repeat 150% 25px',
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
    margin: theme.spacing(0),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  list: {
    padding: theme.spacing(0, 2),
    lineHeight: '40px',
  },
  italics: {
    fontStyle: 'italic',
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
  },
  open: {
    padding: theme.spacing(5, 0),
    marginBottom: theme.spacing(10),
    background: '#f4f4f4',
  },
  buttongroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1, 3),
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0),
      padding: theme.spacing(1, 3),
      fontSize: '12px',
    },
  },
}))

const Index = () => {
  const classes = useStyles()
  const router = useRouter()

  return (
    <>
      <Head>
        <title>
          CheckIfCovid - Calculate the probability of COVID-19 based on symptoms
          and location
        </title>
        <meta property="og:title" content="CheckIfCovid" key="title" />
        <meta
          property="og:description"
          content="Calculate the probability of COVID-19 based on symptoms and location"
          key="description"
        />
      </Head>
      <Grid container className={classes.hero}>
        <Grid item sm={6}>
          <Container>
            <Typography
              className={classes.herotext}
              variant="h2"
              component="h1"
              gutterBottom
            >
              <span className={classes.bold}>{process.env.site_name}</span>{' '}
              calculates the probability of{' '}
              <span className={classes.primaryText}>
                {process.env.disease.name}
              </span>{' '}
              based on symptoms and location
            </Typography>
          </Container>
          <Container>
            <Typography
              className={classes.subText}
              variant="body1"
              component="body1"
              gutterBottom
            >
              The availability and speed of testing for COVID-19 is limited.
              This tool calculates the likelihood of an infection by comparing
              your symptoms with the data from confirmed{' '}
              {process.env.disease.name} cases and previously self-reported
              symptoms.
            </Typography>
            <Typography
              className={classes.primaryText}
              variant="h6"
              component="h6"
              gutterBottom
            >
              Wondering if you or someone you know may have COVID-19?
            </Typography>
            <Grid container className={classes.action}>
              <Grid item className={classes.buttongroup}>
                <Button
                  className={classes.button}
                  onClick={() => router.push('/survey')}
                  variant="contained"
                  color="primary"
                >
                  Check your symptoms
                </Button>
              </Grid>
              <Grid item className={classes.buttongroup}>
                <Button
                  className={classes.button}
                  onClick={() => router.push('/mycovid')}
                  variant="contained"
                >
                  Report a diagnosis
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container className={classes.map}>
          <Container>
            <Grid container>
              <Grid item sm={5}>
                <img
                  className={classes.image}
                  src="/cluster-map.png"
                  alt="Cluster Map"
                />
              </Grid>
              <Grid item sm={7}>
                <Typography variant="h3" component="h3" gutterBottom>
                  How it works
                </Typography>
                <ol className={classes.list}>
                  <li>
                    We scrape data on confirmed Covid-19 patients and their
                    symptoms from online sources such as CSSEGIS, ECDC, GISAID,
                    and Kaggle{' '}
                  </li>
                  <li>
                    Collect data from self-reported symptoms through our tool
                  </li>
                  <li>Apply machine learning to all collected data</li>
                  <li>Use the trained data to calculate the probability</li>
                  <li>Open the data for other use cases</li>
                </ol>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid container className={classes.section}>
          <Container>
            <Typography variant="h3" component="h3" gutterBottom>
              Features
            </Typography>
            <Grid container>
              <Grid item sm={6}>
                <Typography variant="h6" component="h6" gutterBottom>
                  For the General Public
                </Typography>
                <ul className={classes.list}>
                  <li>
                    Help make smart decision when to seek urgent medical help
                  </li>
                  <li>
                    Get realtime information about your neighbourhood and areas
                    to avoid
                  </li>
                </ul>
              </Grid>
              <Grid item sm={6}>
                <Typography variant="h6" component="h6" gutterBottom>
                  For the Authorities
                </Typography>
                <ul className={classes.list}>
                  <li>
                    Get insights on clusters of symptoms within your
                    jurisdiction
                  </li>
                  <li>Enable targeted testing based on data collected</li>
                  <li>
                    Deploy your own self-assessment tool using the open source
                    survey app
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid container className={classes.open}>
          <Container>
            <Grid id="share" container>
              <Grid item align="center" sm={4}>
                <img
                  className={classes.crowdsourcing}
                  src="/crowdsource.png"
                  alt="Crowdsourcing"
                />
              </Grid>
              <Grid item sm={8}>
                <Typography variant="h3" component="h3" gutterBottom>
                  MyCOVID: A Call for Help
                </Typography>
                <Typography variant="body1" component="body1" gutterBottom>
                  We want to get as much information about COVID-19 as possible
                  to people who need it. That starts with reporting COVID-19
                  diagnoses. We are asking individuals who've been tested to
                  self-report their symptoms and clinical information. The data
                  is anonymous and can't be traced back to the person reporting
                  it. This reporting method aims to set the stage for a globally
                  shared database useful for COVID-19 diagnostics.
                </Typography>
                <Grid item sm={12}>
                  <Button
                    href="/mycovid"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                  >
                    Report my diagnosis
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Container>
          <Grid container>
            <Grid item sm={12}>
              <Typography variant="h3" component="h3" gutterBottom>
                The Power of Open Source
              </Typography>
              <Typography variant="body1" component="body1" gutterBottom>
                We are a group of volunteers and this project is non-profit. All
                the data produced will be open and available through the API. If
                you are a developer who wants to contribute, or has a network
                who will benefit from the software and data, please get in
                touch.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  )
}

export default Index
