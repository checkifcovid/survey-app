import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  navigation: {
    textAlign: 'center',
    margin: theme.spacing(6, 0),
    background: '#fff',
    width: '100%',
    zIndex: 2,
    justifyContent: 'space-between',
  },
  action: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 6),
      width: 300,
    },
  },
}))


export default function Nav({
  currentStep, totalSteps, nextStep, totalSelected, handleSubmit,
}) {
  const classes = useStyles()
  const isLast = currentStep === totalSteps

  return (
    <Grid container className={classes.navigation}>
      <>
        <Grid item xs={12}>
          {totalSelected}
          {' '}
          symptoms selected
        </Grid>

        <Grid item xs={12}>
          {
            // Submit button on last slide
            isLast
              ? <Button className={classes.action} color="primary" variant="contained" onClick={handleSubmit}>Submit</Button>
              : <Button className={classes.action} disabled={isLast} color="primary" variant="contained" onClick={nextStep}>Next</Button>

            }
        </Grid>
      </>
    </Grid>
  )
}
