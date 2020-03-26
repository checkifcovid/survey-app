import React from 'react';

export default ({ onClick, children }: { onClick: any, children: any }) => (
    <button
        onClick={onClick}
    >
        { children }
    </button>
)
