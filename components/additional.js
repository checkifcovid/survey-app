import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

import Typography from '@material-ui/core/Typography'

import Symptom from './symptom'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
}))

const Additional = ({ symptoms, update }) => {
  const classes = useStyles()

  const options = [
    {
      name: 'Sneezing',
      key: 'sneezing',
    },
    {
      name: 'Runny nose',
      key: 'runny_nose',
    },
    {
      name: 'Rash',
      key: 'rash',
    },
    {
      name: 'Sore throat',
      key: 'sore_throat',
    },
    {
      name: 'Abdominal pain',
      key: 'abdominal_pain',
    },
    {
      name: 'Nausea or vomitting',
      key: 'nausea',
    },
    {
      name: 'Fatigue and/or weakness',
      key: 'fatigue',
    },
    {
      name: 'Reduced sense of taste and/or smell',
      key: 'reduced_smell_taste',
    },
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          Are you experiencing any of these other symptoms? (Additional)
        </Typography>
      </Container>
      <Container align="center">
        {
          options.map((option) => {
            const active = (symptoms[option.key] === 'true')
            return (
              <Symptom name={option.name} active={active} callback={(response) => { update(option.key, response) }} />
            )
          })
        }
      </Container>
    </>
  )
}

Additional.propTypes = {
  update: PropTypes.func.isRequired,
  symptoms: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.elementType,
    callback: PropTypes.func.isRequired,
  }).isRequired,
}

export default Additional
