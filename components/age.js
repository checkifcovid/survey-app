import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Options from './Button/Options'

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 300,
    },
  },
}))

export default function Age({ user, callback }) {
  const classes = useStyles()

  const options = [
    {
      key: '0-10',
      label: '0-10',
    },
    {
      key: '11-30',
      label: '11-30',
    },
    {
      key: '31-50',
      label: '31-50',
    },
    {
      key: '51-70',
      label: '51-70',
    },
    {
      key: 'above-70',
      label: 'Above 70',
    },
  ]

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          className={classes.title}
          variant="h3"
          component="h3"
          gutterBottom
        >
          How old are you?
        </Typography>
      </Container>
      <Container className={classes.options} align="center">
        <Options
          value={user.age}
          options={options}
          sendUpdate={response => {
            callback({ field: 'age', value: response })
          }}
        />
      </Container>
    </>
  )
}
