import React, { useContext } from 'react';
import './survey-page.scss';
import { Button } from '../../components';
import { SurveyContext } from "../../pages/survey";

const ageGroups = [
    'Under 18',
    '18 - 30',
    '30 - 40',
    '40 - 63',
    'Above 64'
];

const AgeSection = () => {
    const { selectedAgeGroup, setAge } = useContext(SurveyContext);

    return (
        <section className='survey-page__section'>
            <div className='survey-page__section--wrapper'>
                <h2 className='survey-page__question'>How old are you?</h2>

                {ageGroups.map((group) => (
                    <div
                        onClick={() => setAge(group)}
                        className={`age-section__group-option age-section__group-option--${selectedAgeGroup === group ? 'selected' : 'un-selected'}`}
                        key={group}
                    >
                        <p>{ group }</p>
                    </div>
                ))}

                <Button
                    onClick={() => console.log('next')}
                    variant='primary'
                    style={{
                        width: '100%'
                    }}
                >
                    Next
                </Button>
            </div>
        </section>
    )
};

export default () => {
    return (
        <div className='survey-page'>
            <AgeSection/>
        </div>
    );
}
