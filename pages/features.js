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
    padding: theme.spacing(5, 2),
    textAlign: 'center',
    background: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(hero.jpg) no-repeat 0',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    color: '#dfe3ee',
    height: 200,
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

const Features = () => {
  const classes = useStyles()
  return (
    <>
      <Grid className={classes.hero}>
        <Typography className={classes.herotext} align="center" variant="h2" component="h1" gutterBottom>
          Features
        </Typography>
      </Grid>
      <Container maxWidth="md">
        <Grid container className={classes.section}>
          <Grid item sm={4}>
            <img className={classes.image} src="/cluster-map.jpg" alt="Cluster Map" />
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h5" component="h5" gutterBottom>
              Geolocated data
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              All health symptoms collected are geolocated and can be viewed on the Dashboard. You have the option to view it on a map and filter by symptoms, location, or date reported.
            </Typography>
          </Grid>
        </Grid>
        <Grid maxWidth="sm" container className={classes.section}>
          <Grid item sm={8}>
            <Typography variant="h5" component="h5" gutterBottom>
              Privacy safe
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              The data that we collect doesn't contain any personally identifiable information (PII)
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <img className={classes.crowdsourcing} src="/secured.png" alt="Privacy" />
          </Grid>
        </Grid>
        <Grid maxWidth="sm" container className={classes.section}>
          <Grid item sm={4}>
            <img className={classes.crowdsourcing} src="/api.jpg" alt="Search symptoms" />
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h5" component="h5" gutterBottom>
              API integration
            </Typography>
            <Typography variant="p" component="p" gutterBottom>
              Enable integration with existing health systems to publish health symptoms data and use the built-in analytics dashboard to query or analyze your data.
            </Typography>
          </Grid>
        </Grid>
        <Grid className={classes.action}>
          <Button href="/survey" variant="contained" color="primary">Start survey</Button>
        </Grid>
      </Container>
    </>
  )
}

export default Features
