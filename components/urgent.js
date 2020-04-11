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

import Typography from '@material-ui/core/Typography'

import FeverIcon from './Icon/FeverIcon'
import CoughIcon from './Icon/CoughIcon'
import ShortBreathIcon from './Icon/ShortBreathIcon'


import Symptom from './symptom'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8rem',
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
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
  },
}))

export default function Urgent({ form, update }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        disableBackdropClick
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.dialogTitle} id="alert-dialog-title"> If you have any of the following symptoms, please seek medical attention immediately. Please call 911 if experiencing:</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container className={classes.badge}>
              <Container maxWidth="md">
                <Grid container>
                  <Grid item sm={6}>
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
          <Button className={classes.continue} onClick={handleClose}>
            I don't have any of these
          </Button>
        </DialogActions>
      </Dialog>
      <Container maxWidth="lg">
        <Typography className={classes.title} variant="h3" component="h3" gutterBottom>
          Are you experiencing any of these symptoms?
        </Typography>
      </Container>

      <Container align="center">
        <Symptom icon={<FeverIcon />} name="Fever" sendUpdate={(response) => { update('fever', response) }} />
        <Symptom icon={<CoughIcon />} name="Cough" sendUpdate={(response) => update('cough', response)} />
        <Symptom icon={<ShortBreathIcon />} name="Shortness of breath" sendUpdate={(response) => update('shortness', response)} />
      </Container>
    </>
  )
}
