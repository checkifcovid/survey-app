import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'


const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    width: 250,
    padding: theme.spacing(2, 0),
  },
  input: {
    padding: theme.spacing(1, 0),
  },
}))

const Location = ({ callback }) => {
  const classes = useStyles()

  const handleChange = (e) => {
    callback('postal_code', e.target.value)
  }

  const handleCountry = (e) => {
    callback('country', e.target.value)
  }

  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          Where are you located?
        </Typography>
      </Container>
      <Container align="center">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Select
            native
            onChange={handleCountry}
            inputProps={{
              name: 'country',
              id: 'country',
            }}
          >
            <option aria-label="None" value="" />
            <option value="United States of America">United States of America</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField className={classes.input} id="zip-code" label="Zip code" onChange={handleChange} />
        </FormControl>
      </Container>
    </>
  )
}

Location.propTypes = {
  callback: PropTypes.func.isRequired,
}

export default Location
