import React from 'react';
import styled from 'styled-components';

const Title: React.FC<{}> = ({ children }) => {
    return (
        <Style>{children}</Style>
    );
}

export default Title;

const Style = styled.h1`
    font-size: 3rem;
    font-weight: normal;
`;