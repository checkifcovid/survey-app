import React from 'react';
import './page-wrapper.scss';

type PageWrapperProps = {
    children: any;
}

export default ({ children }: PageWrapperProps) => (
    <div className='page-wrapper'>
        {children}
    </div>
);
