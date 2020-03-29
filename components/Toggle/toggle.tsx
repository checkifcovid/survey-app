import React, { useState } from 'react';
import './toggle.scss';

type ToggleProps = {
    options: Array<string>;
    onClick: (option) => any;
    defaultOption?: string;
}

export default ({ options, onClick, defaultOption }: ToggleProps) => {
    const [activeToggle, toggleOption] = useState((defaultOption && options.includes(defaultOption)) ? defaultOption : '');

    if (options.length < 2) {
        options.push(options[0]);
    }

    const onToggleOption = (option) => {
        onClick(option);
        toggleOption(option);
    };

    return (
        <div className='toggle'>
            <div onClick={() => onToggleOption(options[0])} className={`toggle__option toggle--${activeToggle === options[0] ? 'selected' : 'un-selected'}`}>{options[0]}</div>
            <div onClick={() => onToggleOption(options[1])} className={`toggle__option toggle--${activeToggle === options[1] ? 'selected' : 'un-selected'}`}>{options[1]}</div>
        </div>
    )
}
