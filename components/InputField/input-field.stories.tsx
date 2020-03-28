import React, { useState } from 'react';
import InputField from './input-field';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Input Fields',
};

export const temperatureInput = () => {
    const [inputText, setInputText] = useState({temperature: undefined, unit: 'F'});

    return (
        <InputField
            onChange={(temperature) => setInputText(temperature)}
            value={inputText}
            type='temperature'
            label='What’s the highest temperature that you’ve measured?'
        />
    );
};

export const textInput = () => {
    const [inputText, setInputText] = useState('');

    return (
        <InputField
            onChange={({ target: { value } }) => setInputText(value)}
            value={inputText}
            label='Other'
            placeholder='What other conditions do you have?'
            labelPosition='left'
        />
    )
};
