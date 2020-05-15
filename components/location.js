import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

// Redux
import { connect } from 'react-redux'
import { setCountry } from '../redux/actions/configActions'
import { updateUser } from '../redux/actions/userActions'

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

const Location = ({ config, user, updateUser }) => {
  const classes = useStyles()

  console.log('u', user)
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
            countryCode={config.country.short}
            className={classes.site}
          />{' '}
          {config.country.name}
        </Typography>
        <Formik
          initialValues={{ postcode: '' }}
          validationSchema={Yup.object().shape({
            postcode: Yup.string()
              .min(
                config.country.zip.min,
                `Must not be less than ${config.country.zip.min} characters`
              )
              .max(
                config.country.zip.max,
                `Must not be more than ${config.country.zip.max} characters`
              )
              .matches(
                config.country.zip.regex,
                `Invalid ${config.country.short} location`
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
                      updateUser({ field: 'postcode', value: value })
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

const mapStateToProps = ({ config, user }) => ({
  config,
  user,
})

const mapDispatchToProps = {
  setCountry,
  updateUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(Location)
