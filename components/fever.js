import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(2, 0),
    height: 350,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const Fever = ({ form, update }) => {
  const classes = useStyles()

  const { fever } = form

  useEffect(() => {
    update('status', 30)
  }, update)

  return (
    <Grid className={classes.section}>
      <Typography variant="h5" component="h5" gutterBottom>
        Are you currently experiencing any fever of 38 degrees or higher for the past 24 hours?
      </Typography>
      <FormControl className={classes.formControl} component="fieldset">
        <RadioGroup aria-label="fever" name="fever" value={fever} onChange={(e) => update('fever', e.target.value)}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Grid>
  )
}

Fever.propTypes = {
  form: PropTypes.shape({ fever: PropTypes.string.isRequired }).isRequired,
  update: PropTypes.func.isRequired,
}

export default Fever
