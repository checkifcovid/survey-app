import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'

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
  const router = useRouter()

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
        Have you been clinically tested for COVID-19?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography variant="body2" component="p" gutterBottom>
            Use this form to self-report clinical diagnosis of COVID-19. The
            data submitted is anonymous and can't be traced back to the person
            reporting. The data collected will be used to help others and
            predict the spread of the disease.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          className={classes.continue}
          variant="outlined"
          onClick={() => router.push('/')}
        >
          No
        </Button>
        <Button
          className={classes.continue}
          color="primary"
          variant="outlined"
          onClick={handleClose}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DiagnosisIntro
