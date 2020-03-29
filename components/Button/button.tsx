import React from 'react';
import './button.scss';
type ButtonProps = {
    onClick?: () => any;
    children: any;
    variant: string;
    style?: object;
}

export default ({ onClick, children, variant, style }: ButtonProps) => (
    <button
        onClick={onClick}
        className={`button button--${variant}`}
        style={style}
    >
        { children }
    </button>
)
