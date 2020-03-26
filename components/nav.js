import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  navigation: {
    margin: theme.spacing(1),
  },
  action: {
    margin: theme.spacing(1),
  },
}))

export default function Nav(props) {
  const classes = useStyles()
  const isFirst = props.currentStep === 1
  const isLast = props.currentStep == props.totalSteps

  return (
    <Grid className={classes.navigation}>
      <Button className={classes.action} disabled={isFirst} variant="contained" onClick={props.previousStep}>Previous</Button>
      <Button className={classes.action} disabled={isLast} color="primary" variant="contained" onClick={props.nextStep}>Next</Button>
    </Grid>
  )
}
