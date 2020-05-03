import React from 'react'
import FeverIcon from '../components/Icon/FeverIcon'
import CoughIcon from '../components/Icon/CoughIcon'
import ShortBreathIcon from '../components/Icon/ShortBreathIcon'

export const prepareSymptoms = symptoms => {
  const icons = {
    fever: <FeverIcon />,
    cough: <CoughIcon />,
    shortness_breath: <ShortBreathIcon />,
  }
  let processed = []
  symptoms.map(symptom => {
    processed[symptom.weight] = processed[symptom.weight] || []
    processed[symptom.weight].push({
      ...symptom,
      active: false,
      icon: icons[symptom.key],
    })
  })
  return processed
}
