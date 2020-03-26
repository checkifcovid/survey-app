// FIXME: currently a template for writing stories. Implement actual button eventually...

import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
    title: 'Button',
};


export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;
