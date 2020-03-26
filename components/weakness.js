import React from 'react'
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

const Weakness = ({ form, update }) => {
  const classes = useStyles()

  const { weakness } = form

  return (
    <Grid className={classes.section}>
      <FormControl className={classes.formControl} component="fieldset">
        <FormLabel className={classes.label}>Are you having muscle aches, weakness, or giddiness?</FormLabel>
        <RadioGroup aria-label="fever" name="fever" value={weakness} onChange={(e) => update('weakness', e.target.value)}>
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </Grid>
  )
}

Weakness.propTypes = {
  form: PropTypes.shape({ strength: PropTypes.string.isRequired }).isRequired,
  update: PropTypes.func.isRequired,
}

export default Weakness
