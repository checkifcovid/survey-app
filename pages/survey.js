import React, { useState } from 'react'

import StepWizard from 'react-step-wizard'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Nav from '../components/nav'
import Urgent from '../components/urgent'
import Others from '../components/others'
import Additional from '../components/additional'
import Underlying from '../components/underlying'
import Result from '../components/result'


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
    justifyContent: 'flex-end',
    width: '100%',
    height: 600,
    alignContent: 'top',
  },
}))


export default function Index() {
  const classes = useStyles()

  const [state, updateState] = useState({
    form: {
      next: false,
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
      <AppBar color="transparent" className={classes.appbar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {process.env.site_name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <StepWizard isHashEnabled className={classes.wizard} nav={<Nav update={updateForm} />}>
          <Urgent form={state.form} update={updateForm} />
          <Others form={state.form} update={updateForm} />
          <Additional form={state.form} update={updateForm} />
          <Underlying form={state.form} update={updateForm} />
          <Result hashKey="result" form={state.form} />
        </StepWizard>
      </Grid>
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
    </>
  )
}
