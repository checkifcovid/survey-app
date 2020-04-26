import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const Accuracy = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Grid item className={classes.info}>
        <Typography variant="h6" component="h6" gutterBottom>
          About accuracy
        </Typography>
        <InfoOutlinedIcon color="primary" />
      </Grid>
      <Typography variant="body2" component="body2" gutterBottom>
        This tool currently has an accuracy level of <strong>48%</strong>. We
        use a threshold of > 75% to identify a positive probability (coloured as
        red).
      </Typography>
      <Typography variant="body2" component="body2" gutterBottom>
        This is based on the current data we have and improves over time as we
        get more data. The result you get now might be different from what you
        will get tomorrow. We suggest to keep using this tool each day as long
        as you have your symptoms present.
      </Typography>
    </Paper>
  )
}

Accuracy.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Accuracy
