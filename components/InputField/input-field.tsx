import React, { useState, useEffect } from 'react';
import './input-field.scss';

import { Toggle } from '../index';

type InputFieldProps = {
    onChange: (v) => void;
    value: any;
    label?: string;
    labelPosition?: string;
    type?: string;
    placeholder?: string;
}

enum TemperatureUnit {
    F = 'F',
    C = 'C'
}


// TODO Need to separate Input types into their own component
export default ({ onChange, value, label, labelPosition = 'top', type, placeholder }: InputFieldProps) => {
    switch(type) {
        case 'temperature': {
            const [unit, changeUnit] = useState(TemperatureUnit.F);

            const createTemperatureData = (temperature) => {
                const temperatureData = {
                    temperature,
                    unit,
                };

                return onChange(temperatureData);
            };

            const onUnitChange = (option) => {
                changeUnit(option);

                return onChange({
                    temperature: value.temperature,
                    unit: option
                })
            };

            return (
                <label className={`input-field__label--${labelPosition}`}>
                    <p>{label}</p>
                    <div className='input-field__temperature'>
                        <input
                            className='input-field'
                            onChange={({ target: { value } } )=> createTemperatureData(value)}
                            value={value && parseFloat(value.temperature)}
                            type='number'
                        />
                        <Toggle
                            options={[TemperatureUnit.F, TemperatureUnit.C]}
                            onClick={(option) => onUnitChange(option)}
                        />
                    </div>
                </label>
            );
        }
        // TODO WIP
        case 'multi-select': {
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
        }
        default:
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
    }
};
