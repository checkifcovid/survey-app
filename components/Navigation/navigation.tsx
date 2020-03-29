import React from 'react';
import Link from 'next/link';

import './navigation.scss';

import Logo from '../Icons/logo';

export default () => {
    const goHome = () => {
        window.location.href = '/';
    };

    return (
        <nav className='navigation'>
            <div className='navigation__logo-group' onClick={goHome}>
                <Logo/>
                <p className='navigation__title'>Find The Cluster</p>
            </div>


            <ul className='navigation__items'>
                <Link href={'#about'}>
                    <li className='navigation__item'>Learn More</li>
                </Link>
            </ul>
        </nav>
    )
}
