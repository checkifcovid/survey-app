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

const useStyles = makeStyles((theme) => ({
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

const Dates = ({ callback }) => {
  const classes = useStyles()

  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  const options = [
    {
      key: 'tested',
      question: 'What was the date you got your test?',
    },
    {
      key: 'onset',
      question: 'What was the date your symptoms started?',
    },
    {
      key: 'subsided',
      question: 'What was the date your symptoms subsided?',
    },
  ]
  return (
    <>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          Important dates
        </Typography>
      </Container>
      <Container align="center">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {options.map((option, id) => (
            <Grid item className={classes.question}>
              <Typography className={classes.title} variant="h4" component="h4" gutterBottom>
                {option.question}
              </Typography>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id={`date-${id}`}
                value={selectedDate}
                onChange={handleDateChange}
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
