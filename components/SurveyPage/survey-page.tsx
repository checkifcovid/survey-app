import React, { useContext } from 'react';
import './survey-page.scss';

import { Button, OtherSymptomSelect } from '../../components';

import { SurveyContext } from "../../pages/survey";
import { SurveyState } from '../../pages/survey';
import { symptomsList, ageGroups } from "../../constants/survey.constants";

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
                        width: '100%'
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
            {ageGroups.map((group) => (
                <div
                    onClick={() => setAge(group)}
                    className={`age-section__group-option age-section__group-option--${selectedAgeGroup === group ? 'selected' : 'un-selected'}`}
                    key={group}
                >
                    <p>{group}</p>
                </div>
            ))}
        </>
    )
};

const SymptomsSection = () => {
    const {selectedSymptoms, setSymptoms} = useContext(SurveyContext);

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
            <p>symptoms</p>
        </>
    )
};

const OtherSymptomsSection = () => {
    return (
        <>
            <OtherSymptomSelect
                symptoms={symptomsList}
                onClick={() => console.log('hi')}
            />
        </>
    )
};

const ConditionsSection = () => {
    return (
        <>
            <p>Condtions</p>
        </>
    )
};

const LocationSection = () => {
    return (
        <>
            <p>Location</p>
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
