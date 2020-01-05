import React from 'react';

const Quote: React.FC<{}> = ({ children }) => {
    return (
        <blockquote>{children}</blockquote>
    )
}

export default Quote;