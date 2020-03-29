import React, { useState, createContext, useEffect } from 'react';
import { SurveyPage } from '../components';
import { submitSurvey } from "../services/survey";

export enum SurveyState {
    SYMPTOMS = 'symptoms',
    OTHERSYMPTOMS = 'other-symptoms',
    OTHERSYMPTOMS2 = 'other-symptoms-2',
    ADDITIONALSYMPTOMINFO = 'additional-symptom-info',
    SYMPTOMSFOLLOWUP = 'symptoms-follow-up',
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

    // Symptom Follow up states. Need to refactor this soon.
    const [symptomFollowUpAnswers, setFollowUpAnswers] = useState({});

    // Triggers state change and gets caught by the useEffect below
    const geoLocateUser = () => {
        setGeoLocationLoadingState(true);
    };

    useEffect(() => {
        if (geoLocationLoading && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({coords}) => {
                setLocation('Current Location');
                setCoordinates(coords);
                setGeoLocationLoadingState(false);
            });
        }
    }, [geoLocationLoading]);

    useEffect(() => {
        switch (surveyState) {
            case SurveyState.SUBMITTING: {
                const onSubmitSurvey = async () => {
                    try {
                        // TODO need to shape data to match API call expectations
                        const surveyData = {
                            gender: selectedGender,
                            age: selectedAgeGroup,
                            location,
                            coordinates,
                            symptoms: selectedSymptoms,
                            reportSource: 'Survey App',
                            reportDate: new Date()
                        };

                        console.log({surveyData})

                        await submitSurvey(surveyData);

                        // return setSurveyState(SurveyState.FINISHED)
                    } catch(error) {
                        // TODO if they survey doesn't submit, we need to elegantly handle this.
                        return setSurveyState(SurveyState.ERROR);
                    }
                };

                onSubmitSurvey();
                break;
            }
            case SurveyState.FINISHED: {
               window.location.href = '/results';
               break;
            }
            default:
                break;
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
                geoLocationLoading,
                symptomFollowUpAnswers,
                setFollowUpAnswers
            }}
        >
            <SurveyPage/>
        </SurveyContext.Provider>
    )
};

export default Survey;
