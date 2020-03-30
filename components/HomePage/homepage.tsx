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
        <section className='homepage__mid'>
        <img className='homepage__mid--worldimage' src={'cluster-map.jpg'}/> 
            <div className='homepage__mid--midmessage'>
                
                <h1>Get answers through data</h1>

                <p>The availability of data for symptoms is critical to answer questions like:</p>
                
                   
                <ul>
                    <li>Which community or neighbourhood is fever prevalent?</li>
                    <li>Which particular region experiences cough more often?</li>
                    <li>Is there anyone within the cluster who travelled recently to hot zones such as China?</li>
                    <li>How do symptoms progresses or gets transmitted to other locations over time?</li>
                    <li>Is there an increasing cases of runny nose in my neighbourhood?</li>
                </ul>
                
            </div>
        </section>
        <section className='homepage__last'>
        
            <div className='homepage__last--message'>
                <h1>The power of crowdsourcing</h1>
                
                <p>
                    Data is very important in making decisions but isn't always available. 
                    Data for active cases (and deaths) is available but we need more data 
                    on the population who are experiencing only some of the symptoms.
                </p>
                <p>
                    By conducting survey sampling, especially during an outbreak, data will
                    be collected, analyzed and made availabile.
                </p>
            </div>
            <img className='homepage__last--crowdimage' src={'crowdsource.png'}/>
        </section>
        <section>
            <div className='homepage__last--footbtns'>
                <Link href={'/survey'}>
                    <Button onClick={() => console.log('')} variant='primary'>
                        Do you have symptoms?
                    </Button>
                </Link>
                <Link href={'/survey'}>
                    <Button onClick={() => console.log('')} variant='secondary'>
                        Feeling great?
                    </Button>
                </Link>
            </div>
        </section>
        <footer className='homepage__foot'></footer>
    </div>
)
