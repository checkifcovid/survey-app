import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'

import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'


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

const Personal = ({
  form, update,
}) => {
  const classes = useStyles()


  return (
    <Grid className={classes.section}>
      <Typography variant="h5" component="h5" gutterBottom>
        A little hint about you
      </Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>City</InputLabel>
        <Select
          id="age-input"
          value={form.age}
          onChange={(e) => update('city', e.target.value)}
          label="City"
        >
          <MenuItem value="toronto">Toronto</MenuItem>
          <MenuItem value="london">London</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <TextField
          id="postcode-input"
          label="Post Code"
          variant="outlined"
          value={form.postcode}
          onChange={(e) => update('postcode', e.target.value.toUpperCase())}
        />
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Age</InputLabel>
        <Select
          id="age-input"
          value={form.age}
          onChange={(e) => update('age', e.target.value)}
          label="Age"
        >
          <MenuItem value={0}>17 years old and below</MenuItem>
          <MenuItem value={1}>18-24 years old</MenuItem>
          <MenuItem value={2}>25-34 years old</MenuItem>
          <MenuItem value={3}>35-44 years old</MenuItem>
          <MenuItem value={4}>45-64 years old</MenuItem>
          <MenuItem value={5}>65 years old and above</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Gender</InputLabel>
        <Select
          id="gender-input"
          value={form.gender}
          onChange={(e) => update('gender', e.target.value)}
          label="Gender"
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  )
}

Personal.propTypes = {
  form: PropTypes.shape({ age: PropTypes.string.isRequired, gender: PropTypes.string.isRequired, postcode: PropTypes.string.isRequired }).isRequired,
  update: PropTypes.func.isRequired,
}

export default Personal
