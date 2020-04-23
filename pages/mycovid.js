import React, { useState } from 'react'
import uuid from 'react-uuid'
import StepWizard from 'react-step-wizard'
import Router from 'next/router'
import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Nav from '../components/nav'
import Dates from '../components/Mycovid/Dates'
import Diagnosis from '../components/Mycovid/Diagnosis'
import DiagnosisCheck from '../components/Mycovid/DiagnosisCheck'
import DiagnosisIntro from '../components/Mycovid/DiagnosisIntro'
import Questionnaire from '../components/questionnaire'

import Age from '../components/age'
import Gender from '../components/gender'
import Location from '../components/location'

import { updateCalendar } from '../redux/actions/calendarActions'
import { updateDiagnosis } from '../redux/actions/diagnosisActions'
import { updateSymptom } from '../redux/actions/symptomActions'
import { updateUser } from '../redux/actions/userActions'

const useStyles = makeStyles((theme) => ({
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


const Mycovid = ({
  calendar, diagnosis, symptoms, user, updateCalendar, updateDiagnosis, updateSymptom, updateUser,
}) => {
  const classes = useStyles()

  const handleErrors = (response) => {
    if (response.status !== 200) {
      throw Error(response.statusText)
    }
    return response
  }

  const handleSubmit = () => {
    // @TODO: Clean this up
    const sessionId = uuid()
    const payload = {
      survey_id: '001',
      user_id: sessionId,
      report_date: new Date(),
      report_source: 'survey_app',
      gender: user.gender,
      age: user.age,
      postcode: user.postcode,
      country: process.env.country.name,
      country_code: process.env.country.short,
      calendar,
      diagnosis,
      symptoms,
    }

    console.log('p', payload)
    fetch('/api/survey', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(handleErrors)
      .then((response) => response.json())
      .then(() => {
        Router.push({ pathname: '/thanks' })
      })
      .catch((error) => console.log(error))
  }

  const options = [
    {
      label: 'Fever',
      key: 'fever',
      active: false,
    },
    {
      label: 'Cough',
      key: 'cough',
      active: false,
    },
    {
      label: 'Shortness of breath',
      key: 'shortness_breath',
      active: false,
    },
    {
      label: 'Chills or sweating',
      key: 'chills',
      active: false,
    },
    {
      label: 'Chest pain or pressure',
      key: 'chest_pain',
      active: false,
    },
    {
      label: 'Body aches',
      key: 'body_pain',
      active: false,
    },
    {
      label: 'Headache',
      key: 'headache',
      active: false,
    },
    {
      label: 'Sneezing',
      key: 'sneezing',
      active: false,
    },
    {
      label: 'Runny nose',
      key: 'runny_nose',
      active: false,
    },
    {
      label: 'Fatigue and/or weakness',
      key: 'fatigue',
      active: false,
    },
    {
      label: 'Diarrhea',
      key: 'diarrhea',
      active: false,
    },
  ]

  return (
    <>
      <Grid container>
        <DiagnosisIntro />
        <StepWizard className={classes.wizard} nav={<Nav handleSubmit={handleSubmit} />}>
          <DiagnosisCheck callback={updateDiagnosis} />
          <Diagnosis callback={updateDiagnosis} />
          <Questionnaire question="What were your symptoms?" options={options} callback={updateSymptom} />
          <Dates calendar={calendar} callback={updateCalendar} />
          <Age callback={updateUser} />
          <Gender callback={updateUser} />
          <Location callback={updateUser} />
        </StepWizard>
      </Grid>
    </>
  )
}

const mapStateToProps = ({
  calendar, diagnosis, symptoms, user,
}) => ({
  calendar,
  diagnosis,
  symptoms,
  user,
})

const mapDispatchToProps = {
  updateCalendar,
  updateDiagnosis,
  updateSymptom,
  updateUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(Mycovid)
