import React from 'react';
import NavMenu from './molecules/NavMenu';
import Body from './organisms/Body';
import styled from 'styled-components';
import StorySettings from './organisms/StorySettings';

const App: React.FC = () => {
    return (
        <Wrapper>
            <NavMenu />
            <Container>
                <StorySettings />
                <Body />
            </Container>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.main`
    width: 100%;
    height: 100vh;
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 10rem 5rem 0;
    box-sizing: border-box;
`;

//https://theopendiaries.com/read-public-diaries