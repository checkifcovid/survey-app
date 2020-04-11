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

export default function Age({ form, update }) {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          How old are you?
        </Typography>
      </Container>
      <Container className={classes.options} align="center">
        <Option label="0-10" style={{ width: 400 }} sendUpdate={() => { update('age', '0-10') }} />
        <Option label="10-20" style={{ width: 400 }} sendUpdate={() => { update('age', '10-20') }} />
        <Option label="20-30" style={{ width: 400 }} sendUpdate={() => { update('age', '20-30') }} />
        <Option label="30-40" style={{ width: 400 }} sendUpdate={() => { update('age', '30-40') }} />
      </Container>
    </>
  )
}
