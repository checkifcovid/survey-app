import React from 'react';
import { OtherSymptomSelect } from "../index";
import { action } from "@storybook/addon-actions";

export default {
    title: 'Other Symptom Select'
};

export const M = () => {
    const symptomsList = [
        'Asthma or chronic lung disease',
        'Diabetes',
        'High Blood Pressure',
        'Kidney disease',
        'Liver disease',
        'Cardiovascular Disease',
        'Congestive heart failure',
        'Obesity',
        'Pregnancy',
        'Weakened immune system'
    ];
  return (
      <OtherSymptomSelect
          onClick={action('selected')}
          symptoms={symptomsList}
      />
  )
};
