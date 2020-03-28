import React, { useState } from 'react';
import InputField from './input-field';

export default {
    title: 'Input Field',
};

export const TextInput = () => {
    const [inputText, setInputText] = useState('');

    return (
        <InputField
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            label='Test Input'
        />
    );
}
