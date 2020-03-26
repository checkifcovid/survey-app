import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

export default function Breathing() {
  const classes = useStyles()

  const [fever, setFever] = useState('')

  return (
    <Grid>
      <Typography variant="h5" component="h5" gutterBottom>
        Breathing difficulty
      </Typography>
      <FormControl className={classes.formControl} component="fieldset">
        <FormLabel component="legend">Are you currently experiencing any difficulty in breathing?</FormLabel>
        <RadioGroup aria-label="fever" name="fever" value={fever} onChange={(e) => setFever(e.target.value)}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Grid>
  )
}
