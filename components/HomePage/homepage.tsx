import React from 'react';
import './homepage.scss';
import { PageWrapper, Button } from "../index";
import Link from 'next/link';

type HomePageProps = {
    startSurvey: () => any;

}

export default () => (
    <div className='homepage'>
        <section className='homepage__hero'>
            <div className='homepage__hero--message'>
                <h1>FindTheCluster collects and analyzes data of health symptoms of COV-19</h1>

                <p>
                    Getting tested for COVID-19 is a challenge due to limited testing kits and health care systems getting overwhelmed
                    with patients.Our aim is to collect geographic data of symptoms, analyze clusters, predict outbreaks and avoid community infection.
                </p>

                <p className='highlighted'>Wondering if you might have COVID?</p>

                <div className='homepage__buttons-group'>
                    <Link href={'/survey'}>
                        <Button onClick={() => console.log('')} variant='primary'>
                            Report your symptoms
                        </Button>
                    </Link>
                    <Link href={'/survey'}>
                        <Button onClick={() => console.log('')} variant='secondary'>
                            Report for someone
                        </Button>
                    </Link>
                </div>
            </div>

            <img className='homepage__hero--image' src={'macbook-mock.png'}/>
        </section>
    </div>
)
