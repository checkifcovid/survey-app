import React from 'react';
import './homepage.scss';
import {Button} from "../index";
import Link from 'next/link';


export default () => (
    <div className='homepage'>
        <section className='homepage__hero'>
            <div className='homepage__hero--message'>
                <h1><strong>FindTheCluster</strong> collects and analyzes data for symptoms of <span
                    className='highlighted'>COVID-19</span></h1>

                <p>
                    The availability of testing for COVID-19 is limited. Our aim is to collect geographic data of
                    symptoms, analyze clusters, and predict outbreaks. Our ultimate goal is to recognize and prevent
                    community infection.
                </p>

                <p className='highlighted'>Wondering if you or someone you know may have COVID-19?</p>

                <div className='homepage__buttons-group'>
                    <Link href={'/survey'}>
                        <Button variant='primary'>
                            Report your symptoms
                        </Button>
                    </Link>
                    <Link href={'/survey'}>
                        <Button variant='secondary'>
                            Report for someone
                        </Button>
                    </Link>
                </div>
            </div>

            <img className='homepage__hero--image' src={'macbook-mock.png'}/>
        </section>
    </div>
)
