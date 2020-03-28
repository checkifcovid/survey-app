import React from 'react';

type ButtonProps = {
    onClick: () => any;
    children: any;
    variant: string;
}

export default ({ onClick, children, variant }: ButtonProps) => (
    <button
        onClick={onClick}
        className={`button button--${variant}`}
    >
        { children }
    </button>
)
