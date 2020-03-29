import React from 'react';
import { OtherSymptomSelect } from "../index";
import { action } from "@storybook/addon-actions";
import { symptomsList } from "../../constants/survey.constants";

export default {
    title: 'Other Symptom Select'
};

export const M = () => {
  return (
      <OtherSymptomSelect
          onClick={action('selected')}
          symptoms={symptomsList}
      />
  )
};
