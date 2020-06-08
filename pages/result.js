import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import fetch from 'isomorphic-unfetch'
import { connect } from 'react-redux'
import clx from 'classnames'

import NumberFormat from 'react-number-format'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Statistics from '../components/statistics'
import StatisticsCountry from '../components/Statistics/country'

import ResultLinks from '../components/Result/links'
import Accuracy from '../components/Result/accuracy'

const useStyles = makeStyles(theme => ({
  result: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '18vh',
    width: '100%',
    backgroundColor: '#013A6B',
    borderRadius: '15px',
    backgroundImage:
      '-webkit-linear-gradient(-30deg, #00D081 35%, #F6F8FB 35%)',
    [theme.breakpoints.down('sm')]: {
      height: '9vh',
      backgroundImage:
        '-webkit-linear-gradient(-30deg, #00D081 45%, #F6F8FB 45%)',
    },
  },
  Positive: {
    backgroundImage: '-webkit-linear-gradient(-30deg, red 35%, #F6F8FB 35%)',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: '-webkit-linear-gradient(-30deg, red 40%, #F6F8FB 40%)',
    },
  },
  Negative: {
    backgroundImage:
      '-webkit-linear-gradient(-30deg, #00D081 35%, #F6F8FB 35%)',
    [theme.breakpoints.down('sm')]: {
      backgroundImage:
        '-webkit-linear-gradient(-30deg, #00D081 40%, #F6F8FB 40%)',
    },
  },
  diagnosis: {
    fontSize: 60,
    color: '#fff',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
      padding: theme.spacing(2),
    },
  },
  diagnosistext: {
    padding: theme.spacing(6, 8),
    color: '#515861',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
      fontSize: 18,
    },
  },
  warning: {
    color: 'red',
  },
  probability: {
    background: '#ccc',
    padding: theme.spacing(1, 2),
    borderRadius: 5,
  },
  summary: {
    padding: theme.spacing(3, 0),
  },
  statistics: {
    padding: theme.spacing(1, 1),
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  postal_code: {
    textDecoration: 'underline',
    color: '#1968fc',
    fontWeight: 'bold',
  },
  tip: {
    marginTop: '20px',
  },
}))

const Result = ({ symptoms, user }) => {
  const classes = useStyles()
  const [result, setResult] = useState({
    probability: null,
    diagnosis: null,
  })

  useEffect(() => {
    fetch('/api/stats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.api.key,
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(response => {
        setResult({
          probability: response.probability.toFixed(4) * 100,
          diagnosis: response.diagnosis,
        })
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Container>
        <Grid container>
          <Grid className={classes.summary} item sm={8}>
            <Typography
              style={{ color: '#515861', fontSize: '2em' }}
              variant="h3"
              component="h3"
              gutterBottom
            >
              Your Results:
            </Typography>
            <Grid container>
              <Grid
                item
                className={clx(classes.result, classes[result.diagnosis])}
              >
                {result.probability ? (
                  <span className={classes.diagnosis}>
                    <NumberFormat
                      value={result.probability}
                      displayType="text"
                      suffix="%"
                      decimalScale={2}
                    />{' '}
                  </span>
                ) : (
                    <span>Inconclusive</span>
                  )}
                <Typography
                  className={classes.diagnosistext}
                  variant="h3"
                  component="h3"
                  gutterBottom
                >
                  Probability of {process.env.disease.name}
                </Typography>
              </Grid>
            </Grid>

            <Typography
              variant="body1"
              component="body1"
              className={classes.warning}
              gutterBottom
            >
              Percentage is still a work in progress. We are still building the
              model and gathering data. You'll get a random result here.
            </Typography>
            <Grid container>
              <Grid item sm={6} className={classes.statistics}>
                <Typography variant="h6" component="h6">
                  Symptoms near{' '}
                  <span className={classes.postal_code}>{user.postcode}</span>
                </Typography>
                <Statistics title="Symptom" data={symptoms} />
              </Grid>
              <Grid item sm={6} className={classes.statistics}></Grid>
            </Grid>
            <Typography variant="h5" component="h5" gutterBottom>
              Your Next Steps
            </Typography>
            <Grid container>
              <Grid item sm={8} style={{ paddingRight: '15px' }}>
                <Typography variant="body1" component="body1" gutterBottom>
                  You should try to stay away from others for at least 7 days
                  from when your symptoms first appeared. Your isolation can end
                  if your symptoms improve significantly and if you have had no
                  fever for at least 72 hours without the use of medicine. By
                  isolating yourself, you can slow the spread of COVID‑19 and
                  protect others.
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="body1" component="body1" gutterBottom>
                  Eat well, drink fluids, and get plenty of rest.
                </Typography>
                <Typography variant="body1" component="body1" gutterBottom>
                  Watch for COVID‑19 symptoms such as cough, fever, and
                  difficulty breathing. If your symptoms get worse, contact your
                  doctor’s office.
                </Typography>
              </Grid>
            </Grid>
            <Accuracy />
          </Grid>
          <Grid container sm={4}>
            <Grid className={classes.statistics} item>
              <Typography variant="h6" component="h6">
                Confirmed COVID-19 near{' '}
                <span className={classes.postal_code}>{user.postcode}</span>
              </Typography>
              <div
                style={{
                  width: '100%',
                  height: '200px',
                  background: 'url(map-stock.jpg)',
                }}
              ></div>
              <StatisticsCountry country="US" postal_code="12345" />
              <hr
                style={{
                  borderColor: '#f4f4f4',
                  borderStyle: 'solid',
                  margin: '20px',
                }}
              />
              <ResultLinks />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

const mapStateToProps = ({ symptoms, user }) => ({
  symptoms,
  user,
})

export default connect(mapStateToProps, null)(Result)
