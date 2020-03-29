import React, { useState } from 'react';
import Checkbox from './checkbox';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Checkbox'
};

export const single = () => {
    const [checked, toggleChecked] = useState(false);

    return <Checkbox onChange={() => toggleChecked(!checked)} name='single' checked={checked} label='Single Option'/>
};
