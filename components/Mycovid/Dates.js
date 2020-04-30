import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  question: {
    padding: theme.spacing(2),
  },
}))

const Dates = ({ calendar, callback }) => {
  const classes = useStyles()

  const options = [
    {
      key: 'tested',
      question: 'When did you get tested?',
    },
    {
      key: 'onset',
      question: 'When did the first symptom start?',
    },
    {
      key: 'subsided',
      question: 'When did the symptoms subsided?',
    },
  ]

  return (
    <>
      <Container align="center">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {options.map((option, id) => (
            <Grid key={`key-${id}`} item className={classes.question}>
              <Typography
                className={classes.title}
                variant="h4"
                component="h4"
                gutterBottom
              >
                {option.question}
              </Typography>
              <KeyboardDatePicker
                autoOk
                disableToolbar
                disableFuture
                variant="dialog"
                format="MM/dd/yyyy"
                margin="normal"
                id={`date-${id}`}
                value={calendar[option.key]}
                onChange={(raw, value) =>
                  callback({ field: option.key, value })
                }
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          ))}
        </MuiPickersUtilsProvider>
      </Container>
    </>
  )
}

export default Dates
