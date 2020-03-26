// FIXME: currently a template for writing stories. Implement actual button eventually...

import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Button',
};

export const text = () => <button onClick={action('clicked')}>Hello Button</button>;
