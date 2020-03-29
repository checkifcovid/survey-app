import React from 'react';
import './checkbox.scss';

export default ({ label, checked, onChange, name }) => {
    return (
        <label className='checkbox'>
            <input
                type='checkbox'
                checked={checked}
                onChange={onChange}
                name={name}
            />

            <p>{ label }</p>
        </label>
    )
}
