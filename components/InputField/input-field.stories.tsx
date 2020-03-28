import React, { useState } from 'react';
import InputField from './input-field';

export default {
    title: 'Text Input Field',
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
