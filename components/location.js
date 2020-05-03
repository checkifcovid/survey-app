import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import ReactCountryFlag from 'react-country-flag'
import { Formik } from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles(theme => ({
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

const Location = ({ user, callback }) => {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          className={classes.title}
          variant="h3"
          component="h3"
          gutterBottom
        >
          Where are you located?
        </Typography>
      </Container>
      <Container align="center">
        <Typography variant="h4" component="h4" gutterBottom>
          <ReactCountryFlag
            countryCode={process.env.country.short}
            className={classes.site}
          />{' '}
          {process.env.country.name}
        </Typography>
        <Formik
          initialValues={{ postcode: user.postcode }}
          validationSchema={Yup.object().shape({
            postcode: Yup.string()
              .test(
                'len',
                `Must be exactly ${process.env.country.zip.min} characters`,
                val => val.toString().length === process.env.country.zip.min
              )
              .matches(
                process.env.country.zip.regex,
                `Invalid ${process.env.country.short} zip code`
              ),
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleSubmit,
              setFieldValue,
            } = props
            return (
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Zip code"
                  name="postcode"
                  className={classes.textField}
                  value={values.postcode}
                  onChange={e => {
                    if (e.keyCode === 32) {
                      e.preventDefault()
                    } else {
                      const value = e.target.value
                        .toUpperCase()
                        .replace(/\s/g, '')
                      setFieldValue('postcode', value)
                      callback({ field: 'postcode', value })
                    }
                  }}
                  onBlur={handleBlur}
                  helperText={
                    errors.postcode && touched.postcode && errors.postcode
                  }
                  margin="normal"
                />
              </form>
            )
          }}
        </Formik>
      </Container>
    </>
  )
}

Location.propTypes = {
  callback: PropTypes.func.isRequired,
}

export default Location
