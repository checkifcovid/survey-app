import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
    title: 'Buttons',
};

export const primary = () => (
    <Button
        onClick={action('clicked')}
        variant='primary'
    >
        Primary Button
    </Button>
);

export const secondary = () => (
    <Button
        onClick={action('clicked')}
        variant='secondary'
    >
        Secondary Button
    </Button>
);

export const ternary = () => (
    <Button
        onClick={action('clicked')}
        variant='ternary'
    >
        Ternary Button
    </Button>
);
