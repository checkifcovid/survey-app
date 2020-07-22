import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import { connect } from 'react-redux'

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

const Urgency = ({ config }) => {
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
        immediately. Please call {config.country.emergency} if experiencing:
      </DialogTitle>
      <DialogContent>
        <Container maxWidth="md" className={classes.badge}>
          <Grid container>
            <ul className={classes.list}>
              <li>Extreme difficulty breathing (gasping for air or cannot talk without catching your breath)</li>
              <li>Serious disorientation or confusion</li>
              <li>Unconscious or very difficult to wake up</li>
              <li>Persistent chest pain or pressure</li>
              <li>Bluish lips, face, or nail beds</li>
              <li>New confusion</li>
              <li>Fainting or severe lightheadedness</li>
              <li>Slurred speech (new or worsening)</li>
              <li>Seizures</li>
            </ul>
          </Grid>
        </Container>
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

const mapStateToProps = ({ config }) => ({
  config,
})

export default connect(mapStateToProps, null)(Urgency)
