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

export default function Additional({ form, update }) {
  const classes = useStyles()

  const symptoms = [
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
        <Typography align="center" variant="h3" component="h3" gutterBottom>
          Are you experiencing any of these other symptoms? (Additional)
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
