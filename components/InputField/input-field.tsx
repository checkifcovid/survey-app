import React from 'react';

type InputFieldProps = {
    onChange: (e) => void;
    value: any;
    label?: string;
}

export default ({ onChange, value, label }: InputFieldProps) => (
    <label>
        <p className='input-field__label'>{label}</p>
        <input
            className='input-field'
            onChange={(e) => onChange(e)}
            value={value}
        />
    </label>
);
