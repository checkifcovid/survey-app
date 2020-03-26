import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

const useStyles = makeStyles((theme) => ({
  section: {
    margin: theme.spacing(2, 0),
    height: 350,
  },
  formControl: {
    margin: theme.spacing(1),
  },
  label: {
    fontSize: '1.5rem',
    color: '#000',
  },
}))

const Exposure = ({ form, update, isActive }) => {
  const classes = useStyles()

  const { personalExposure, communityExposure } = form

  useEffect(() => {
    if (isActive) {
      update('status', 70)
    }
  }, update)

  return (
    <Grid className={classes.section}>
      <FormControl className={classes.formControl} component="fieldset">
        <FormLabel className={classes.label}>Have you been exposed to any one who tested positive for COVID-19?</FormLabel>
        <RadioGroup name="personalExposure" value={personalExposure} onChange={(e) => update('personalExposure', e.target.value)}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <FormControl className={classes.formControl} component="fieldset">
        <FormLabel className={classes.label}>Have you been exposed to places with clusters (within the environment where cases of COVID-19 have been identified)?</FormLabel>
        <RadioGroup name="communityExposure" value={communityExposure} onChange={(e) => update('communityExposure', e.target.value)}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Grid>
  )
}

Exposure.propTypes = {
  form: PropTypes.shape({ personalExposure: PropTypes.string.isRequired, communityExposure: PropTypes.string.isRequired }).isRequired,
  update: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default Exposure
