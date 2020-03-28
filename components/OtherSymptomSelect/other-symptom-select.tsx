import React, { useState } from 'react';
import './other-symptom-select.scss';

type OtherSymptomSelectProps = {
    onClick: (s) => any;
    symptoms: Array<string>;
}

type SymptomOption = {
    onClick: () => any;
    symptom: string;
    selected: boolean;
}

const SymptomOption = ({ onClick, symptom, selected }: SymptomOption) => {
    return (
        <div className={`other-symptoms-select__option other-symptoms-select__option--${selected ? 'selected' : 'un-selected'}`} onClick={onClick}>
            <p className='other-symptoms-select__option__symptom'>{symptom}</p>
        </div>
    )
};

export default ({ onClick, symptoms }: OtherSymptomSelectProps) => {
    const [selectedSymptoms, toggleSelected] = useState([]);

    // could extract to own hook. basically updates an array of values by removing it if it exists or adding if not exist.
    const updateSymptomSelectState = (selectedSymptom) => {
        let updatedSymptomsSelection = [...selectedSymptoms];

        if (selectedSymptoms.includes(selectedSymptom)) {
            updatedSymptomsSelection = updatedSymptomsSelection.filter(symptom => symptom !== selectedSymptom);
        } else {
            updatedSymptomsSelection.push(selectedSymptom);
        }

        onClick(selectedSymptom);

        return toggleSelected(updatedSymptomsSelection);
    };

    return (
        <div className='other-symptoms-select'>
            {symptoms.map((symptom) => {
                return (
                    <SymptomOption
                        onClick={() => updateSymptomSelectState(symptom)}
                        symptom={symptom}
                        selected={selectedSymptoms.includes(symptom)}
                    />
                )
            })}
        </div>
    )
}
