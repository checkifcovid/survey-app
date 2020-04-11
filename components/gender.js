import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

import Typography from '@material-ui/core/Typography'

import Option from './Button/option'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default function Gender({ form, update }) {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          What is your gender?
        </Typography>
      </Container>
      <Container className={classes.options} align="center">
        <Option label="Male" style={{ width: 400 }} sendUpdate={() => { update('gender', 'male') }} />
        <Option label="Female" style={{ width: 400 }} sendUpdate={() => { update('gender', 'female') }} />
        <Option label="Non-binary" style={{ width: 400 }} sendUpdate={() => { update('gender', 'nonbinary') }} />
        <Option label="Other" style={{ width: 400 }} sendUpdate={() => { update('age', 'other') }} />
      </Container>
    </>
  )
}
