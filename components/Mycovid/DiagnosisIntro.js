import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const useStyles = makeStyles(theme => ({
  continue: {
    color: '#1968fc',
  },
  list: {
    textAlign: 'left',
    color: '#000',
    lineHeight: 2,
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
}))

const DiagnosisIntro = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableBackdropClick
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        About reporting diagnosis
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container className={classes.badge}>
            This form is used to self-report diagnosis of COVID-19. The data
            submitted is anonymous and can't be traced back to the person
            reporting. This method aims to set the stage for a globally shared
            database of symptoms useful for COVID-19 diagnostics.
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.continue}
          color="primary"
          variant="outlined"
          onClick={handleClose}
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DiagnosisIntro
