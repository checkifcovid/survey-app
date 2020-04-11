import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

import Typography from '@material-ui/core/Typography'

import Symptom from './symptom'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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

export default function Others({ form, update }) {
  const classes = useStyles()

  const symptoms = [
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
        <Typography align="center" variant="h3" component="h3" gutterBottom>
          Are you experiencing any of these other symptoms?
        </Typography>
      </Container>
      <Container align="center">
        {
          symptoms.map((symptom) => (
            <Symptom name={symptom.name} sendUpdate={(response) => { update(symptom.key, response) }} />
          ))
        }
      </Container>
    </>
  )
}
