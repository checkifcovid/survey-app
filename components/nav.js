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
  },
  action: {
    margin: theme.spacing(1),
    padding: theme.spacing(1, 10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 6),
    },
  },
}))

export default function Nav({
  currentStep, totalSteps, previousStep, nextStep, totalSelected,
}) {
  const classes = useStyles()
  const isFirst = currentStep === 1
  const isLast = currentStep === totalSteps

  return (
    <Grid container className={classes.navigation}>
      { !isLast
      && (
      <>
        <Grid item xs={12}>
          (
          {totalSelected}
          )
          {' '}
          symptoms selected
        </Grid>
        <Grid item xs={6} align="right">
          <Button className={classes.action} disabled={isFirst} variant="contained" onClick={previousStep}>Previous</Button>
        </Grid>
        <Grid item xs={6} align="left">
          <Button className={classes.action} disabled={isLast} color="primary" variant="contained" onClick={nextStep}>Next</Button>
        </Grid>
      </>
      )}
    </Grid>
  )
}
