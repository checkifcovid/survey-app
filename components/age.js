import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Options from './Button/options'

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

  const options = [
    {
      key: '0-10',
      label: '0-10',
    },
    {
      key: '11-20',
      label: '11-20',
    },
    {
      key: '21-30',
      label: '21-30',
    },
    {
      key: '31-40',
      label: '31-40',
    },
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          How old are you?
        </Typography>
      </Container>
      <Container className={classes.options} align="center">
        <Options options={options} style={{ width: 400 }} sendUpdate={(response) => { update('age', response) }} />
      </Container>
    </>
  )
}
