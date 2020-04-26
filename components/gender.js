import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'

import Typography from '@material-ui/core/Typography'

import Options from './Button/options'

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
  },
}))

export default function Gender({ callback }) {
  const classes = useStyles()

  const options = [
    {
      key: 'male',
      label: 'Male',
    },
    {
      key: 'female',
      label: 'Female',
    },
    {
      key: 'nonbinary',
      label: 'Non-binary',
    },
    {
      key: 'others',
      label: 'Others',
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
          What is your gender?
        </Typography>
      </Container>
      <Container className={classes.options} align="center">
        <Options
          options={options}
          style={{ width: 400 }}
          sendUpdate={response => {
            callback({ field: 'gender', value: response })
          }}
        />
      </Container>
    </>
  )
}
