import React from 'react';
import SimpleSurveyQuestion from './simple-survey-question';
import { Toggle } from "../index";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Simple Survey Question'
}

export const base = () => (
    <SimpleSurveyQuestion
        question='Did you seek medical care for these symptoms?'
    >
        <Toggle options={['Yes', 'No']} onClick={action('toggle click')}/>
    </SimpleSurveyQuestion>
)
