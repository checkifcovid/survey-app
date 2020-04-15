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
  footer: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(5, 0),

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
                  How it works
                </Typography>
                <ol className={classes.list}>
                  <li>We scrape data from online sources such as CSSEGIS, ECDC, GISAID, and KAGGLE </li>
                  <li>Collect data from self-reported symptoms through our tool</li>
                  <li>Apply machine learning to all collected data</li>
                  <li>Use the trained data to calculate the probability</li>
                  <li>Open the data for other use cases</li>
                </ol>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid container>
          <Grid container>
            <Container className={classes.section}>
              <Grid container>
                <Grid item sm={12}>
                  <Typography variant="h3" component="h3" gutterBottom>
                    Features
                  </Typography>
                  <Grid container>
                    <Grid item sm={6}>
                      <Typography variant="h6" component="h6" gutterBottom>
                        For the General Public
                      </Typography>
                      <ul className={classes.list}>
                        <li>Help make smart decision when to seek urgent medical help</li>
                        <li>Get realtime information about your neighbourhood and areas to avoid</li>
                      </ul>
                    </Grid>
                    <Grid item sm={6}>
                      <Typography variant="h6" component="h6" gutterBottom>
                        For the Authorities
                      </Typography>
                      <ul className={classes.list}>
                        <li>Get insights on clusters of symptoms within your jurisdiction</li>
                        <li>Enable targeted testing based on data collected</li>
                        <li>Deploy your own self-assessment tool using the open source survey app</li>
                      </ul>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid container className={classes.open}>
            <Container>
              <Grid container>
                <Grid item align="center" sm={4}>
                  <img className={classes.crowdsourcing} src="/crowdsource.png" alt="Crowdsourcing" />
                </Grid>
                <Grid item sm={8}>
                  <Typography variant="h3" component="h3" gutterBottom>
                    The Power of Open Source
                  </Typography>
                  <Typography variant="body1" component="body1" gutterBottom>
                    We are a group of volunteers and this project is non-profit. All the data produced will be open and available through the API. If you are a developer who wants to contribute, or has a network who will benefit from the software and data, please get in touch.
                  </Typography>
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
            <Link target="_blank" className={classes.footerlinks} href="https://github.com/findthecluster/api-app/wiki">Developer API</Link>
            <Link className={classes.footerlinks} href="/">Privacy Policy</Link>
            <Link className={classes.footerlinks} href="https://github.com/findthecluster" target="_blank">Contact Us</Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Index
