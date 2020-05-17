import React from 'react'
import Router from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {},
  section: {
    margin: theme.spacing(5, 0),
  },
  image: {
    width: '80%',
    paddingLeft: '20px',
    margin: theme.spacing(2, 0),
  },
  content: {
    padding: theme.spacing(2, 0),
  },
  paragraph: {
    paddingTop: 20,
  },
  graphic: {
    textAlign: 'center',
  },
}))

const About = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.root}>
        <Grid container md={12} className={classes.section}>
          <Grid item sm={7} className={classes.content}>
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
              className={classes.paragraph}
            >
              {' '}
              Testing is important. But access is limited.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              Getting tested for COVID-19 can be challenging due to the limited
              availability of testing kits and overwhelming patient load on
              healthcare systems. Many individuals may only be mildly
              symptomatic, or asymptomatic - but they are often overlooked and
              deprioritized to undergo testing.
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
              className={classes.paragraph}
            >
              Outbreak is real
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              We've seen outbreaks happen on long-term care homes where a lot of
              older people succomb to the disease. COVID-19 outbreak could be
              anywhere. We need to have more data to identify and isolate
              potential local oubreaks. With access to this information, you can
              be aware of the risks by location and take appropriate actions.
            </Typography>
          </Grid>
          <Grid item sm={5} className={classes.graphic}>
            <img className={classes.image} src="/3797338.jpg" />
          </Grid>
        </Grid>
        <Grid container md={12} className={classes.section}>
          <Grid item md={7} className={classes.content}>
            <Typography
              variant="h4"
              component="h4"
              gutterBottom
              className={classes.paragraph}
            >
              {' '}
              Checking your symptom(s) daily helps
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              CheckIfCovid calculates the probability based on the collective
              data of people. The probability you get today may not be the same
              tomorrow even your symptoms remain the same. So it's important to
              check your symptom(s) at least once per day. The more you use
              CheckIfCovid, whether you have just one symptom or more, the more
              accurate it becomes, benefiting you and other people.
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
              Clinical diagnosis data is equally important
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              If you've been clinically tested for Covid-19, sharing your
              symptoms and diagnosis anonymously will hugely benefit others--
              whether you are positive or negative. The machine learning model
              that CheckIfCovid uses is only as good as the abundance of data it
              learns from.{' '}
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
    </>
  )
}

export default About
