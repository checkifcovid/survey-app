import React, { useState } from 'react'
import uuid from 'react-uuid'
import StepWizard from 'react-step-wizard'
import Router from 'next/router'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Nav from '../components/nav'
import Urgency from '../components/urgency'
import Questionnaire from '../components/questionnaire'
import Menu from '../components/menu'

import Age from '../components/age'
import Gender from '../components/gender'
import Location from '../components/location'

import FeverIcon from '../components/Icon/FeverIcon'
import CoughIcon from '../components/Icon/CoughIcon'
import ShortBreathIcon from '../components/Icon/ShortBreathIcon'

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


export default function Index() {
  const classes = useStyles()

  const [state, updateState] = useState({
    user: {
      total: 0,
    },
    symptoms: {},
  })

  const updateSymptom = (key, value) => {
    const { symptoms, user } = state

    user.total = (value === true) ? user.total + 1 : user.total - 1
    symptoms[key] = value

    updateState({
      ...state,
      symptoms,
    })
  }

  const updateUser = (key, value) => {
    const { user } = state

    user[key] = value

    updateState({
      ...state,
      user,
    })
  }

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
      gender: state.user.gender,
      age: state.user.age,
      postcode: state.user.postal_code,
      country: 'United States of America',
      country_code: 'USA',
      symptoms: state.symptoms,
    }

    fetch('/api/survey', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(handleErrors)
      .then((response) => {
        if (response.status === 200) {
          Router.push({ pathname: '/result', query: { id: sessionId } })
        }
      })
      .catch((error) => console.log(error))
  }

  const questionnaires = [
    {
      title: 'Are you experiencing any of these symptoms?',
      options: [
        {
          icon: <FeverIcon />,
          label: 'Fever',
          key: 'fever',
          active: false,
        },
        {
          icon: <CoughIcon />,
          label: 'Cough',
          key: 'cough',
          active: false,
        },
        {
          icon: <ShortBreathIcon />,
          label: 'Shortness of breath',
          key: 'shortness_breath',
          active: false,
        },
      ],
    },
    { // Slide 2
      title: 'Are you experiencing any of these other symptoms?',
      options: [
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
          label: 'Diarrhea',
          key: 'diarrhea',
          active: false,
        },
      ],
    },
    { // Slide 3
      title: 'Are you experiencing any of these other symptoms? (Additional)',
      options: [
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
          label: 'Rash',
          key: 'rash',
          active: false,
        },
        {
          label: 'Sore throat',
          key: 'sore_throat',
          active: false,
        },
        {
          label: 'Abdominal pain',
          key: 'abdominal_pain',
          active: false,
        },
        {
          label: 'Nausea or vomitting',
          key: 'nausea',
          active: false,
        },
        {
          label: 'Fatigue and/or weakness',
          key: 'fatigue',
          active: false,
        },
        {
          label: 'Reduced sense of taste and/or smell',
          key: 'reduced_smell_taste',
          active: false,
        },
      ],
    },
    { // Slide 4
      title: 'Do you have any of the following conditions?',
      options: [
        {
          label: 'Asthma or chronic lung disease',
          key: 'asthma',
          active: false,
        },
        {
          label: 'Diabetes',
          key: 'diabetes',
          active: false,
        },
        {
          label: 'High blood pressure',
          key: 'high_blood',
          active: false,
        },
        {
          label: 'Kidney disease',
          key: 'kidney_disease',
          active: false,
        },
        {
          label: 'Liver disease',
          key: 'liver_disease',
          active: false,
        },
        {
          label: 'Cardiovascular disease',
          key: 'cardiovascular_disease',
          active: false,
        },
        {
          label: 'Congestive heart failure',
          key: 'congestive_heart',
          active: false,
        },
        {
          label: 'Obesity',
          key: 'obesity',
          active: false,
        },
        {
          label: 'Pregnancy',
          key: 'pregnancy',
          active: false,
        },
        {
          label: 'Weakened immune system',
          key: 'weakened_immune',
          active: false,
        },
      ],
    },
  ]

  return (
    <>
      <Menu />
      <Grid container>
        <Urgency />
        <StepWizard className={classes.wizard} nav={<Nav handleSubmit={handleSubmit} totalSelected={state.user.total} />}>
          { /* looping this doesn't work. Manual work needed */ }
          <Questionnaire question={questionnaires[0].title} options={questionnaires[0].options} callback={updateSymptom} />
          <Questionnaire question={questionnaires[1].title} options={questionnaires[1].options} callback={updateSymptom} />
          <Questionnaire question={questionnaires[2].title} options={questionnaires[2].options} callback={updateSymptom} />
          <Questionnaire question={questionnaires[3].title} options={questionnaires[3].options} callback={updateSymptom} />
          <Age callback={updateUser} />
          <Gender callback={updateUser} />
          <Location callback={updateUser} />
        </StepWizard>
      </Grid>
      {/* <pre>
        {
          Object.keys(state.symptoms).map((key) => (
            <div>
              {key}
              {' '}
              :
              {' '}
              {state.symptoms[key].toString()}
            </div>
          ))
        }
        {
          Object.keys(state.user).map((key) => (
            <div>
              {key}
              {' '}
              :
              {' '}
              {state.user[key].toString()}
            </div>
          ))
        }
      </pre> */}
    </>
  )
}
