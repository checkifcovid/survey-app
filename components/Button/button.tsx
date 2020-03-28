import React from 'react';

type ButtonProps = {
    onClick: any,
    children: any
}

export default ({ onClick, children }: ButtonProps) => (
    <button
        onClick={onClick}
        className='button'
    >
        { children }
    </button>
)
