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
  badge: {
    background: '#fff8ea',
    color: '#f44336',
    textAlign: 'center',
    padding: theme.spacing(3, 0),
  },
  list: {
    textAlign: 'left',
    color: '#000',
    padding: theme.spacing(0, 7),
    lineHeight: 2,
    fontSize: '18px',
  },
}))

const Underlying = ({ symptoms, update }) => {
  const classes = useStyles()

  const options = [
    {
      name: 'Asthma or chronic lung disease',
      key: 'asthma',
    },
    {
      name: 'Diabetes',
      key: 'diabetes',
    },
    {
      name: 'High blood pressure',
      key: 'high_blood',
    },
    {
      name: 'Kidney disease',
      key: 'kidney_disease',
    },
    {
      name: 'Liver disease',
      key: 'liver_disease',
    },
    {
      name: 'Cardiovascular disease',
      key: 'cardiovascular_disease',
    },
    {
      name: 'Congestive heart failure',
      key: 'congestive_heart',
    },
    {
      name: 'Obesity',
      key: 'obesity',
    },
    {
      name: 'Pregnancy',
      key: 'pregnancy',
    },
    {
      name: 'Weakened immune system',
      key: 'weakened_immune',
    },
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          Do you have any of the following conditions?
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

Underlying.propTypes = {
  update: PropTypes.func.isRequired,
  symptoms: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.elementType,
    callback: PropTypes.func.isRequired,
  }).isRequired,
}

export default Underlying
