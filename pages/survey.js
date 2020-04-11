import React, { useState, useEffect } from 'react'

import StepWizard from 'react-step-wizard'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Nav from '../components/nav'
import Urgent from '../components/urgent'
import Others from '../components/others'
import Additional from '../components/additional'
import Underlying from '../components/underlying'
import Age from '../components/age'
import Gender from '../components/gender'
import Location from '../components/location'
import Result from '../components/result'


const useStyles = makeStyles((theme) => ({
  appbar: {
    margin: theme.spacing(0, 0, 2, 0),
    flexGrow: 1,
  },
  logo: {
    width: 200,
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
    alignContent: 'top',
    margin: theme.spacing(5, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0),
    },
  },
}))


export default function Index() {
  const classes = useStyles()

  const [state, updateState] = useState({
    form: {
      next: false,
    },
    symptoms: {
      total: 0,
    },
  })

  const handleSave = () => {
    // ...
  }

  const updateForm = (key, value) => {
    const { symptoms } = state

    // Symptoms block: Only increment/decrement symptoms
    const dontCount = ['age', 'gender', 'location']
    if (!dontCount.includes(key)) {
      symptoms.total = (value === 'true') ? symptoms.total + 1 : symptoms.total - 1
      symptoms[key] = value
    }

    // form[key] = value
    updateState({
      ...state,
      symptoms,
    })
  }

  return (
    <>
      <AppBar color="transparent" className={classes.appbar} position="static">
        <Toolbar>
          <img src="/logo.png" alt={process.env.site_name} className={classes.logo} />
        </Toolbar>
      </AppBar>
      <Grid container>
        <StepWizard className={classes.wizard} isLazyMount nav={<Nav update={updateForm} totalSelected={state.symptoms.total} />}>
          <Urgent symptoms={state.symptoms} update={updateForm} />
          <Others symptoms={state.symptoms} update={updateForm} />
          <Additional symptoms={state.symptoms} update={updateForm} />
          <Underlying symptoms={state.symptoms} update={updateForm} />
          <Age form={state.form} update={updateForm} />
          <Gender form={state.form} update={updateForm} />
          <Location form={state.form} update={updateForm} />
          <Result form={state.form} />
        </StepWizard>
      </Grid>
      <pre>
        {
          Object.keys(state.symptoms).map((key) => (
            <div>
              {key}
              {' '}
              :
              {' '}
              {state.symptoms[key]}
            </div>
          ))
        }
      </pre>
    </>
  )
}
