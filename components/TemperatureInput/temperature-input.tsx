import React, { useState } from 'react';
import './temperature-input.scss';
import {Toggle} from "../index";

type TemperatureInputFieldProps = {
    onChange: (v: {
        temperature: any;
        unit: string;
    }) => any;
    value: any;
    label?: string;
    labelPosition?: string;
}

enum TemperatureUnit {
    F = 'F',
    C = 'C'
}

export default ({ onChange, value, label, labelPosition = 'top' }: TemperatureInputFieldProps) => {
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
                    defaultOption={TemperatureUnit.F}
                />
            </div>
        </label>
    );
}
