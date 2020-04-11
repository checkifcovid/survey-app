import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

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

export default function Urgent({ form, update }) {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth="lg">
        <Typography align="center" variant="h3" component="h3" gutterBottom>
          Are you experiencing any of these symptoms?
        </Typography>
      </Container>
      <Grid container className={classes.badge}>
        <Container maxWidth="md">
          <Typography variant="h5" component="h5" gutterBottom>
            If you have any of the following symptoms, please seek medical attention immediately. Please call 911 if experiencing:
          </Typography>
          <Grid container>
            <Grid item sm={6}>
              <ul className={classes.list}>
                <li>Difficulty breathing</li>
                <li>Persistent chest pain or pressure</li>
                <li>Brush lips or face</li>
              </ul>
            </Grid>
            <Grid item sm={6}>
              <ul className={classes.list}>
                <li>New confusion</li>
                <li>Fainting or severe lightheadedness</li>
                <li>Any other new and concerning symptoms</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Container align="center">
        <Symptom name="Fever" sendUpdate={(response) => { update('fever', response) }} />
        <Symptom name="Cough" sendUpdate={(response) => update('cough', response)} />
        <Symptom name="Shortness of breath" sendUpdate={(response) => update('shortness', response)} />
      </Container>
    </>
  )
}
