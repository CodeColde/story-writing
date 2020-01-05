import React from 'react';

const Anchor: React.FC<{}> = ({ children }) => {
    return (
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">{children}</a>
    )
}

export default Anchor;