import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

const useStyles = makeStyles(theme => ({
  dialogTitle: {
    color: '#f44336',
    textAlign: 'center',
  },
  continue: {
    color: '#1968fc',
  },
  badge: {
    background: '#fff8ea',
    color: '#f44336',
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

const Urgency = () => {
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
      <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
        If you have any of the following symptoms, please seek medical attention
        immediately. Please call {process.env.country.emergency} if
        experiencing:
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container className={classes.badge}>
            <Container maxWidth="md">
              <Grid container>
                <Grid item sm={12}>
                  <ul className={classes.list}>
                    <li>Difficulty breathing</li>
                    <li>Persistent chest pain or pressure</li>
                    <li>Brush lips or face</li>
                    <li>New confusion</li>
                    <li>Fainting or severe lightheadedness</li>
                    <li>Any other new and concerning symptoms</li>
                  </ul>
                </Grid>
              </Grid>
            </Container>
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

export default Urgency
