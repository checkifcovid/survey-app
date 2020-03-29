import React, { useContext } from 'react';
import './survey-page.scss';

import { Button, OtherSymptomSelect, TemperatureInputField } from '../../components';
import FeverIcon from '../../components/Icons/fever';
import CoughIcon from '../../components/Icons/cough';
import ShortBreathIcon from '../../components/Icons/short-breath';
import MarkerIcon from '../../components/Icons/marker';

import { CircularProgress } from "@material-ui/core";

import { SurveyContext } from "../../pages/survey";
import { SurveyState } from '../../pages/survey';
import { symptomsList, otherSymptomsList, otherSymptomsContinuedList, conditionsList, ageGroups, genderOptions } from "../../constants/survey.constants";

type SurveyWrapperProps = {
    question: string;
    children: any;
    nextState: string;
}

const SurveyWrapper = ({question, children, nextState}: SurveyWrapperProps) => {
    const { setSurveyState, surveyState } = useContext(SurveyContext);

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
                    { (surveyState === SurveyState.VACCINE) ? 'Submit' : 'Next' }
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

const GenderSection = () => {
    const {selectedGender, setGender} = useContext(SurveyContext);

    return (
        <>
            <div className='age-section'>
                {genderOptions.map((gender) => (
                    <div
                        onClick={() => setGender(gender)}
                        className={`age-section__group-option age-section__group-option--${selectedGender === gender ? 'selected' : 'un-selected'}`}
                        key={gender}
                    >
                        <p>{gender}</p>
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

const OtherSymptomsSection = () => {
    const { selectedSymptoms, setSymptoms } = useContext(SurveyContext);

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
            <div className='other-symptoms-section'>
                <OtherSymptomSelect
                    symptoms={otherSymptomsList}
                    onClick={updateSymptomsSelection}
                />
            </div>
        </>
    )
};

const OtherSymptomsContinuedSection = () => {
    const { selectedSymptoms, setSymptoms } = useContext(SurveyContext);

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
            <div className='other-symptoms-section'>
                <OtherSymptomSelect
                    symptoms={otherSymptomsContinuedList}
                    onClick={updateSymptomsSelection}
                />
            </div>
        </>
    )
};

const ConditionsSection = () => {
    const { selectedConditions, setConditions } = useContext(SurveyContext);

    // TODO can extract to own hook. see other symptoms select component
    const updateSymptomsSelection = (selectedCondition) => {
        let updatedConditionsSelection = [...selectedConditions];

        if (selectedConditions.includes(selectedCondition)) {
            updatedConditionsSelection = updatedConditionsSelection.filter(symptom => symptom !== selectedCondition);
        } else {
            updatedConditionsSelection.push(selectedCondition);
        }

        return setConditions(updatedConditionsSelection);
    };

    return (
        <>
            <div className='conditions-section'>
                <OtherSymptomSelect
                    symptoms={conditionsList}
                    onClick={updateSymptomsSelection}
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
                    nextState={SurveyState.OTHERSYMPTOMS2}
                >
                    <OtherSymptomsSection/>
                </SurveyWrapper>
            )
        }
        case 'other-symptoms-2': {
            return (
                <SurveyWrapper
                    question='Are you experiencing any of these other symptoms? (Continued)'
                    nextState={SurveyState.CONDITIONS}
                >
                    <OtherSymptomsContinuedSection/>
                </SurveyWrapper>
            )
        }
        case 'conditions': {
            return (
                <SurveyWrapper
                    question='Do you have any of the following conditions?'
                    nextState={SurveyState.AGE}
                >
                    <ConditionsSection/>
                </SurveyWrapper>
            )
        }
        case 'age': {
            return (
                <SurveyWrapper
                    question='How old are you?'
                    nextState={SurveyState.GENDER}
                >
                    <AgeSection/>
                </SurveyWrapper>
            )
        }
        case 'gender': {
            return (
                <SurveyWrapper
                    question='What is your Gender?'
                    nextState={SurveyState.LOCATION}
                >
                    <GenderSection/>
                </SurveyWrapper>
            )
        }
        case 'location': {
            return (
                <SurveyWrapper
                    question='What is your zip code?'
                    nextState={SurveyState.SUBMITTING}
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
