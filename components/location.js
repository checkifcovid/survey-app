import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  input: {
    margin: theme.spacing(2, 0),
  },
}))

const Location = ({ callback }) => {
  const classes = useStyles()

  const handleChange = (e) => {
    callback('postal_code', e.target.value)
  }

  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          What is your Zip Code?
        </Typography>
      </Container>
      <Container align="center">
        <TextField className={classes.input} id="zip-code" label="Zip code" variant="filled" onChange={handleChange} />
      </Container>
    </>
  )
}

Location.propTypes = {
  callback: PropTypes.func.isRequired,
}

export default Location
