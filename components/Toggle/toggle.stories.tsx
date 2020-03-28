import React, { useState } from 'react';
import Toggle from './toggle';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Toggle',
};

export const temperature = () => {
    return (
        <Toggle
            options={['F', 'C']}
            onClick={action('Toggled')}
        />
    );
};

export const yesOrNo = () => {
    return (
        <Toggle
            options={['Yes', 'No']}
            onClick={action('Toggled')}
        />
    );
};

