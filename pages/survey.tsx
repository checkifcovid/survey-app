import React, { useState, useEffect } from 'react';
import { PageWrapper } from '../components';
import { submitSurvey } from "../services/survey";

enum SurveyState {
    INITIAL = 'initial',
    ONE = 'one',
    TWO = 'two',
    FINISHED = 'finished'
}

type Symptoms = {
    fever: boolean;
    highestTemperature: number;
    cough: boolean;
    shortnessOfBreath: boolean;
    chills: boolean;
    chestPain: boolean;
    bodyAches: boolean;
    nausea: boolean;
    diarrhea: boolean;
    abdominalPain: boolean;
    fatigue: boolean;
    sneezing: boolean;
    soreThroat: boolean;
    runnyNose: boolean;
    headAche: boolean;
    rash: boolean;
    other: [string];
}

type MedicalConditions = {
    asthma: boolean;
    diabetes: boolean;
    highBloodPressure: boolean;
    kidneyDisease: boolean;
    liverDisease: boolean;
    other: [string];
}

type CovidAnswers = {
    dateOfSymptoms: Date;
    seekedMedicalCare: boolean;
    medicalCareOptions: [string];
    testedForCovid: boolean;
    covidTestResults: string;
    covidTestDiagnosis: string;
    covidTestDate: Date;
    countriesTravelled: [string];
    returnDateFromCountries: Date;
}

type UserInfo = {
    age: number;
    gender: string;
    zipCode: string;
    receivedFluVaccine: string;
}

const Survey = () => {
    // State hooks for survey questions and survey itself
    const [currentPage, setPage] = useState(SurveyState.INITIAL);

    const onSubmitSurvey = async () => {
        try {
            // grab the states of all questions and merge into one object
            const surveyData = {};
            const submissionResponse = await submitSurvey(surveyData);

            if (submissionResponse === 200) {
                setPage(SurveyState.FINISHED)
            }
        } catch(error) {
            // error processing submission. We should let the user know something happened.
        }
    };

    // TODO create the state machine for the survey.
    // basically handle moving the state to the next corret one after each answer.

    return (
        <PageWrapper>

        </PageWrapper>
    )
};

export default Survey;
