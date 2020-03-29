import React from 'react';
import './simple-survey-question.scss';

type SimpleSurveyQuestionProps = {
    children: any;
    question: string;
}

export default ({ children, question }: SimpleSurveyQuestionProps) => {
    return (
        <div className='simple-survey-question'>
            <p className='simple-survey-question__question'>{ question }</p>

            { children }
        </div>
    )
}
