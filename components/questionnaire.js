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

const Questionnaire = ({ question, options, callback }) => {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          {question}
        </Typography>
      </Container>
      <Container align="center">
        {
          options.map((option) => (
            <Symptom key={option.label} icon={option.icon} name={option.label} active={option.active} callback={(response) => { callback(option.key, response) }} />
          ))
        }
      </Container>
    </>
  )
}

Questionnaire.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.elementType,
    label: PropTypes.string,
    key: PropTypes.string,
    active: PropTypes.bool,
  })).isRequired,
  callback: PropTypes.func.isRequired,
}

export default Questionnaire
