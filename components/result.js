import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Statistics from './statistics'

const useStyles = makeStyles((theme) => ({
  result: {

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
    padding: theme.spacing(1),
  },
  postal_code: {
    textDecoration: 'underline',
    color: '#1968fc',
    fontWeight: 'bold',
  },
}))

export default function Result({ symptoms, user }) {
  const classes = useStyles()

  return (
    <>
      <Container>
        <Grid container>
          <Grid item sm={12}>
            <Typography className={classes.result} variant="h3" component="h3" gutterBottom>
              Result:
              {' '}
              <span className={classes.probability}>__ %</span>
              {' '}
              probability for
              {' '}
              {process.env.disease}
            </Typography>
          </Grid>
          <Grid className={classes.summary} item sm={6}>
            <Typography variant="h5" component="h5" gutterBottom>
              Your Next Steps
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
              Isolate From Others
            </Typography>
            <Typography variant="body1" component="body1" gutterBottom>
              You should try to stay away from others for at least 7 days from when your symptoms first appeared. Your isolation can end if your symptoms improve significantly and if you have had no fever for at least 72 hours without the use of medicine.

              By isolating yourself, you can slow the spread of COVID‑19 and protect others.
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
              Rest and Take Care
            </Typography>
            <Typography variant="body1" component="body1" gutterBottom>
              Eat well, drink fluids, and get plenty of rest.
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
              Talk to Someone About Testing
            </Typography>
            <Typography variant="body1" component="body1" gutterBottom>
              Your answers suggest you may need to get tested for COVID‑19. You should get in touch with your doctor’s office or your state or local health department for more information.

              Testing access may vary by location and provider.
            </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
              Monitor Symptoms
            </Typography>
            <Typography variant="body1" component="body1" gutterBottom>
              Watch for COVID‑19 symptoms such as cough, fever, and difficulty breathing. If your symptoms get worse, contact your doctor’s office.
            </Typography>
          </Grid>
          <Grid container sm={6}>
            <Grid container sm={12} alignItems="flex-end">
              <Typography variant="h6" component="h6">
                Available Data for
                {' '}
                <span className={classes.postal_code}>{user.postal_code}</span>
              </Typography>
            </Grid>
            <Grid container>
              <Grid className={classes.statistics} item sm={6} xs={6}>
                <Statistics title="Symptoms" data={symptoms} />
              </Grid>
              <Grid className={classes.statistics} item sm={6} xs={6}>
                <Statistics title="Results" data={symptoms} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
