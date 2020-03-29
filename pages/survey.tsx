import React, { useState, createContext, useEffect } from 'react';
import { SurveyPage } from '../components';
import { submitSurvey } from "../services/survey";

export enum SurveyState {
    SYMPTOMS = 'symptoms',
    OTHERSYMPTOMS = 'other-symptoms',
    OTHERSYMPTOMS2 = 'other-symptoms-2',
    ADDITIONALSYMPTOMINFO = 'additional-symptom-info',
    CONDITIONS = 'conditions',
    AGE = 'age',
    GENDER = 'gender',
    LOCATION = 'location',
    VACCINE = 'vaccine',
    SUBMITTING = 'submitting',
    FINISHED = 'finished',
    ERROR = 'error'
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
    other: Array<string>;
}

type MedicalConditions = {
    asthma: boolean;
    diabetes: boolean;
    highBloodPressure: boolean;
    kidneyDisease: boolean;
    liverDisease: boolean;
    other: Array<string>;
}

type CovidAnswers = {
    dateOfSymptoms: Date;
    seekedMedicalCare: boolean;
    medicalCareOptions: Array<string>;
    testedForCovid: boolean;
    covidTestResults: string;
    covidTestDiagnosis: string;
    covidTestDate: Date;
    countriesTravelled: Array<string>;
    returnDateFromCountries: Date;
}

type UserInfo = {
    age: number;
    gender: string;
    zipCode: string;
    receivedFluVaccine: string;
}

export const SurveyContext = createContext(null);

const Survey = () => {
    // State hooks for survey questions and survey itself
    const [surveyState, setSurveyState] = useState(SurveyState.SYMPTOMS);
    const [selectedAgeGroup, setAge] = useState();
    const [selectedGender, setGender] = useState();
    const [selectedSymptoms, setSymptoms] = useState([]);
    const [selectedConditions, setConditions] = useState([]);
    const [temperature, setTemperature] = useState({temperature: undefined, unit: 'F'});
    const [location, setLocation] = useState('');
    const [coordinates, setCoordinates] = useState({});
    const [geoLocationLoading, setGeoLocationLoadingState] = useState(false);

    const onSubmitSurvey = async () => {
        try {
            // TODO grab the states of all questions and merge into one object
            const surveyData = {};
            const submissionResponse = await submitSurvey(surveyData);

            // if (submissionResponse === 200) {
            //     setPage(SurveyState.FINISHED)
            // }
        } catch(error) {
            // error processing submission. We should let the user know something happened.
        }
    };

    // Triggers state change and gets caught by the useEffect below
    const geoLocateUser = () => {
        setGeoLocationLoadingState(true);
    };

    useEffect(() => {
        if (geoLocationLoading && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({coords}) => {
                setLocation('Current location');
                setCoordinates(coords);
                setGeoLocationLoadingState(false);
            });
        }
    }, [geoLocationLoading]);

    useEffect( () => {
        if (surveyState === SurveyState.SUBMITTING) {
            // do the survey submissions
            // set state to finished on complete

        }

        if (surveyState === SurveyState.FINISHED) {
            window.location.href = '/results';
        }
    }, [surveyState]);

    return (
        <SurveyContext.Provider
            value={{
                surveyState,
                setSurveyState,
                selectedAgeGroup,
                setAge,
                selectedGender,
                setGender,
                selectedSymptoms,
                setSymptoms,
                selectedConditions,
                setConditions,
                temperature,
                setTemperature,
                geoLocateUser,
                location,
                setLocation,
                geoLocationLoading
            }}
        >
            <SurveyPage/>
        </SurveyContext.Provider>
    )
};

export default Survey;
