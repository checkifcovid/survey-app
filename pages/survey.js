import React, { useState } from 'react'

import StepWizard from 'react-step-wizard'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'

import Nav from '../components/nav'
import Personal from '../components/personal'
import Cough from '../components/cough'
import Fever from '../components/fever'
import Travel from '../components/travel'
import Exposure from '../components/exposure'
import Weakness from '../components/weakness'

const useStyles = makeStyles((theme) => ({
  appbar: {
    margin: theme.spacing(0, 0, 2, 0),
    flexGrow: 1,
  },
  hero: {
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    width: '100px',
  },
  progress: {
    margin: theme.spacing(5, 0),
    height: 15,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  wizard: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
}))


export default function Index() {
  const classes = useStyles()

  const [state, updateState] = useState({
    form: {
      next: false,
      status: 10,
    },
  })

  const handleSave = () => {
    // ...
  }

  const updateForm = (key, value) => {
    const { form } = state

    form[key] = value
    updateState({
      ...state,
      form,
    })
  }

  return (
    <>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {process.env.site_name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <LinearProgress className={classes.progress} variant="determinate" value={state.form.status} />
        <StepWizard className={classes.wizard} nav={<Nav update={updateForm} />}>
          <Personal form={state.form} update={updateForm} />
          <Cough form={state.form} update={updateForm} />
          <Fever form={state.form} update={updateForm} />
          <Travel form={state.form} update={updateForm} />
          <Exposure form={state.form} update={updateForm} />
          <Weakness form={state.form} update={updateForm} />
        </StepWizard>

        <pre>
          {
          Object.keys(state.form).map((key) => (
            <div>
              {key}
              {' '}
              :
              {' '}
              {state.form[key]}
            </div>
          ))
        }
        </pre>
      </Container>
    </>
  )
}
