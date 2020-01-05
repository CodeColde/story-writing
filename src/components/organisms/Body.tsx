import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { Story } from 'redux-state/story/types';
import Title from 'components/molecules/StoryTitle';
// import Content from 'components/molecules/Content';
import styled from 'styled-components';
import CopyButton from 'components/molecules/CopyButton';
import Editor from 'components/containers/Editor';

interface Props {
    currentStory: Story;
}

const Body: React.FC<Props> = ({ currentStory }) => {
    return (
        <Container>
            {!currentStory && <h1>Start your story here!</h1>}
            <CopyButton story={currentStory} />
            <Title />
            {/* <Content /> */}
            <Editor />
        </Container>
    )
}

export default connect(
    ({ stories }: AppState) => ({ currentStory: stories.currentStory })
)(Body);

const Container = styled.div`
    min-height: 100%;
    display: flex;
    justify-content: stretch;
    flex-direction: column;
`;