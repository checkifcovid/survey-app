import React, { useContext } from 'react';
import './survey-page.scss';

import { Button, OtherSymptomSelect, TemperatureInputField, InputField } from '../../components';
import FeverIcon from '../../components/Icons/fever';
import CoughIcon from '../../components/Icons/cough';
import ShortBreathIcon from '../../components/Icons/short-breath';
import MarkerIcon from '../../components/Icons/marker';

import { CircularProgress } from "@material-ui/core";

import { SurveyContext } from "../../pages/survey";
import { SurveyState } from '../../pages/survey';
import { symptomsList, otherSymptomsList, conditionsList, ageGroups } from "../../constants/survey.constants";

const SurveyWrapper = ({question, children, nextState}) => {
    // onclick calculate next state from survey context.
    const {setSurveyState} = useContext(SurveyContext);

    return (
        <section className='survey-page__section'>
            <div className='survey-page__section--wrapper'>
                <h2 className='survey-page__question'>{question}</h2>

                {children}

                <Button
                    onClick={() => setSurveyState(nextState)}
                    variant='primary'
                    style={{
                        minWidth: '400px'
                    }}
                >
                    Next
                </Button>
            </div>
        </section>
    )
};


const AgeSection = () => {
    const {selectedAgeGroup, setAge} = useContext(SurveyContext);

    return (
        <>
            <div className='age-section'>
                {ageGroups.map((group) => (
                    <div
                        onClick={() => setAge(group)}
                        className={`age-section__group-option age-section__group-option--${selectedAgeGroup === group ? 'selected' : 'un-selected'}`}
                        key={group}
                    >
                        <p>{group}</p>
                    </div>
                ))}
            </div>
        </>
    )
};

const symptomsLogoMapper = {
    'Fever': <FeverIcon width={'50px'} height={'58px'}/>,
    'Cough': <CoughIcon width={'50px'} height={'58px'}/>,
    'Shortness of breath': <ShortBreathIcon width={'50px'} height={'58px'}/>
};

const SymptomsSection = () => {
    const { selectedSymptoms, setSymptoms, temperature, setTemperature } = useContext(SurveyContext);

    // TODO can extract to own hook. see other symptoms select component
    const updateSymptomsSelection = (selectedSymptom) => {
        let updatedSymptomsSelection = [...selectedSymptoms];

        if (selectedSymptoms.includes(selectedSymptom)) {
            updatedSymptomsSelection = updatedSymptomsSelection.filter(symptom => symptom !== selectedSymptom);
        } else {
            updatedSymptomsSelection.push(selectedSymptom);
        }

        return setSymptoms(updatedSymptomsSelection);
    };

    return (
        <>
            <section className='warning'>
                <h1>
                    If you have any of the following symptoms, please seek medical
                    attention immediately. Please call 911 if experiencing:
                </h1>
                <ul>
                    <li>Difficulty breathing</li>
                    <li>Persistent chest pain or pressure</li>
                    <li>Brush lips or face</li>
                    <li>New confusion</li>
                    <li>Fainting or sever lightheadedness</li>
                    <li>Any other new and concerning symptoms</li>
                </ul>
            </section>
            <div className='symptoms-section'>
                {symptomsList.map((symptom) => {
                    return (
                        
                            <div
                                onClick={() => updateSymptomsSelection(symptom)}
                                className={`symptoms-section__option symptoms-section__option--${selectedSymptoms.includes(symptom) ? 'selected' : 'un-selected'}`}
                                key={symptom}
                            >
                                {symptomsLogoMapper[symptom]}
                                <p>{ symptom }</p>
                            </div>
                        
                    );
                })}
            </div>
            {selectedSymptoms.includes('Fever') &&
                <TemperatureInputField
                  value={temperature}
                  onChange={(temperature) => setTemperature(temperature)}
                  label={`What's the highest temperature that you've measured`}
                />
            }
        </>
    )
};

// TODO
const OtherSymptomsSection = () => {
    return (
        <>
            <div className='other-symptoms-section'>
                <OtherSymptomSelect
                    symptoms={otherSymptomsList}
                    onClick={() => console.log('hi')}
                />
            </div>
        </>
    )
};

// TODO
const ConditionsSection = () => {
    return (
        <>
            <div className='conditions-section'>
                <OtherSymptomSelect
                    symptoms={conditionsList}
                    onClick={() => console.log('hi')}
                />
            </div>
        </>
    )
};

const LocationSection = () => {
    const { geoLocateUser, location, setLocation, geoLocationLoading } = useContext(SurveyContext);

    return (
        <>
            <div className='location-section'>
                {/*TODO move to its owwn component*/}
                <input
                    value={location}
                    className='location-input-field__input'
                    onChange={({ target: { value } }) => setLocation(value)}
                />
                <div
                    className='location-input-field__current-location'
                    onClick={geoLocateUser}
                >
                    {geoLocationLoading ?
                        <p>
                            <CircularProgress size={16}/>
                        </p>
                        :
                        <>
                            <MarkerIcon height='18px'/>
                            <p>Current Location</p>
                        </>
                    }
                </div>
            </div>
        </>
    )
};



const RenderCurrentSection = () => {
    const {surveyState} = useContext(SurveyContext);

    switch (surveyState) {
        case 'age': {
            return (
                <SurveyWrapper
                    question='How old are you?'
                    nextState={SurveyState.SYMPTOMS}
                >
                    <AgeSection/>
                </SurveyWrapper>
            )
        }
        case 'symptoms': {
            return (
                <SurveyWrapper
                    question='Are you experiencing any of these symptoms?'
                    nextState={SurveyState.OTHERSYMPTOMS}
                >
                    <SymptomsSection/>
                </SurveyWrapper>
            )
        }
        case 'other-symptoms': {
            return (
                <SurveyWrapper
                    question='Are you experiencing any of these other symptoms?'
                    nextState={SurveyState.CONDITIONS}
                >
                    <OtherSymptomsSection/>
                </SurveyWrapper>
            )
        }
        case 'conditions': {
            return (
                <SurveyWrapper
                    question='Do you have any of the following conditions?'
                    nextState={SurveyState.LOCATION}
                >
                    <ConditionsSection/>
                </SurveyWrapper>
            )
        }
        case 'location': {
            return (
                <SurveyWrapper
                    question='What is your zip code?'
                    nextState={SurveyState.FINISHED}
                >
                    <LocationSection/>
                </SurveyWrapper>
            )
        }
        default:
            return null;
    }
};

export default () => {

    return (
        <div className='survey-page'>
            <RenderCurrentSection/>
        </div>
    );
}
