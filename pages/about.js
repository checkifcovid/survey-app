import React from 'react'
import Router from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    width: '80%',
    paddingLeft: '20px',
    margin: theme.spacing(2, 0),
  },
  paragraph: {
    paddingTop: 20,
  },
  primaryText: {
    color: '#1968fc',
  },
  product: {
    margin: theme.spacing(4, 0),
    padding: theme.spacing(4, 0),
    background: '#f4f4f4',
  },
  graphic: {
    textAlign: 'center',
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <>
      <Grid container md={12} className={classes.section}>
        <Container>
          <Grid container>
            <Grid item sm={7} className={classes.content}>
              <Typography
                variant="h4"
                component="h4"
                gutterBottom
                className={classes.paragraph}
              >
                {' '}
                Testing is the key. But access is limited.
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                Getting tested for COVID-19 can be challenging due to the
                limited availability of testing kits and overwhelming patient
                load on healthcare systems. Many individuals may only be mildly
                symptomatic, or asymptomatic - but they are often overlooked and
                deprioritized to undergo testing.
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                gutterBottom
                className={classes.paragraph}
              >
                Detecting outbreaks is not easy
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                We've seen outbreaks happen on long-term care homes where a lot
                of older people contract the disease. COVID-19 outbreak could be
                anywhere but might not be visible because symptoms of people
                around are mild or if most are asymptomatic. The key to
                identifying outbreaks is data and acces to it can be used to
                cluster symptoms and isolate potential local oubreaks.
              </Typography>
            </Grid>
            <Grid item sm={5} className={classes.graphic}>
              <img className={classes.image} src="/3797338.jpg" />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid container className={classes.product}>
        <Container>
          <Grid container md={12} className={classes.section}>
            <Grid item md={12} className={classes.content}>
              <Typography
                variant="h4"
                component="h4"
                gutterBottom
                className={classes.primaryText}
              >
                CheckIfCovid aims to help solve the pandemic with the use of
                data
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                We are building a solution that will enable anyone to check the
                probability of a Covid-19 based on their symptoms and location,
                even without leaving home.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid container md={12} className={classes.section}>
        <Container>
          <Grid container>
            <Grid item md={7} className={classes.content}>
              <Typography
                variant="h4"
                component="h4"
                gutterBottom
                className={classes.paragraph}
              >
                {' '}
                Check your symptoms daily
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                CheckIfCovid calculates the probability based on the collective
                and incremental data of symptoms. The probability you get today
                may not be the same tomorrow even your symptoms remain the same.
                So it's important to check again at least once per day.
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                Don't worry, we are not capturing any personally identifiable
                information so your privacy is secured.
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                gutterBottom
                className={classes.paragraph}
              >
                Clinical data is important
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                If you've been clinically tested for Covid-19, sharing your
                symptoms and diagnosis anonymously will benefit others-- whether
                your result is positive or negative. The machine learning model
                that CheckIfCovid uses is only as good as the availability of
                data it learns from.
              </Typography>
              <Typography variant="body1" component="p" gutterBottom>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => Router.push('/mycovid')}
                >
                  Click here
                </Button>{' '}
                if you want to share a diagnosis.
              </Typography>
            </Grid>
            <Grid item sm={5} className={classes.graphic}>
              <img className={classes.image} src="/3607683.jpg" />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  )
}

export default About
