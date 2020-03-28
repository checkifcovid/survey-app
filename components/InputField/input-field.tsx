import React from 'react';
import './input-field.scss';

type InputFieldProps = {
    onChange: (e) => any;
    value: any;
    label?: string;
    labelPosition?: string;
    type?: string;
    placeholder?: string;
}

export default ({ onChange, value, label, labelPosition = 'top', placeholder }: InputFieldProps) => {
    return (
        <label className={`input-field__label--${labelPosition}`}>
            <p>{label}</p>
            <input
                className='input-field__text'
                onChange={(e) => onChange(e)}
                value={value}
                placeholder={placeholder}
            />
        </label>
    )
};
