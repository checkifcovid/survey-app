import React from 'react'
import uuid from 'react-uuid'
import StepWizard from 'react-step-wizard'
import Router from 'next/router'
import { connect } from 'react-redux'

// Material UI
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

// Components
import Nav from '../components/nav'
import Urgency from '../components/urgency'
import Questionnaire from '../components/questionnaire'
import Age from '../components/age'
import Gender from '../components/gender'
import Location from '../components/location'

// Icons
import FeverIcon from '../components/Icon/FeverIcon'
import CoughIcon from '../components/Icon/CoughIcon'
import ShortBreathIcon from '../components/Icon/ShortBreathIcon'

// Redux
import { updateSymptom } from '../redux/actions/symptomActions'
import { updateUser } from '../redux/actions/userActions'

const useStyles = makeStyles(theme => ({
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

const Survey = ({ symptoms, user, updateSymptom, updateUser }) => {
  const classes = useStyles()

  const handleErrors = response => {
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
      symptoms,
    }

    console.log('p', payload)
    fetch('/api/survey', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(response => {
        Router.push({ pathname: '/result', query: { id: response.user_id } })
      })
      .catch(error => console.log(error))
  }

  // Pre-format symptoms for UI. Add icons if they exist. Group by weight
  const prepareSymptoms = symptoms => {
    const icons = {
      fever: <FeverIcon />,
      cough: <CoughIcon />,
      shortness_breath: <ShortBreathIcon />,
    }
    let processed = []
    symptoms.map(symptom => {
      processed[symptom.weight] = processed[symptom.weight] || []
      processed[symptom.weight].push({
        ...symptom,
        active: false,
        icon: icons[symptom.key],
      })
    })
    return processed
  }

  // Load symptoms from config and prepare
  const options = prepareSymptoms(process.env.disease.symptoms)
  const questionnaires = [
    {
      title: 'Are you experiencing any of these symptoms?',
      options: options[0],
    },
    {
      // Slide 2
      title: 'Are you experiencing any of these other symptoms?',
      options: options[1],
    },
    {
      // Slide 3
      title: 'Are you experiencing any of these other symptoms? (Additional)',
      options: options[2],
    },
    {
      // Slide 4
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
      <Grid container>
        <Urgency />
        <StepWizard
          className={classes.wizard}
          nav={<Nav handleSubmit={handleSubmit} />}
        >
          {/* looping this doesn't work. Manual work needed */}
          <Questionnaire
            question={questionnaires[0].title}
            options={questionnaires[0].options}
            callback={updateSymptom}
          />
          <Questionnaire
            question={questionnaires[1].title}
            options={questionnaires[1].options}
            callback={updateSymptom}
          />
          <Questionnaire
            question={questionnaires[2].title}
            options={questionnaires[2].options}
            callback={updateSymptom}
          />
          <Questionnaire
            question={questionnaires[3].title}
            options={questionnaires[3].options}
            callback={updateSymptom}
          />
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

const mapStateToProps = ({ symptoms, user }) => ({
  symptoms,
  user,
})

const mapDispatchToProps = {
  updateSymptom,
  updateUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(Survey)
