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

const Others = ({ symptoms, update }) => {
  const classes = useStyles()

  const options = [
    {
      name: 'Chills or sweating',
      key: 'chills',
    },
    {
      name: 'Chest pain or pressure',
      key: 'chest_pain',
    },
    {
      name: 'Body aches',
      key: 'body_pain',
    },
    {
      name: 'Headache',
      key: 'headache',
    },
    {
      name: 'Diarrhea',
      key: 'diarrhea',
    },
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          Are you experiencing any of these other symptoms?
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

Others.propTypes = {
  update: PropTypes.func.isRequired,
  symptoms: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.elementType,
    callback: PropTypes.func.isRequired,
  }).isRequired,
}

export default Others
