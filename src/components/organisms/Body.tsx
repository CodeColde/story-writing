import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { Story } from 'redux-state/story/types';
import Title from 'components/molecules/StoryTitle';
import styled from 'styled-components';
import CopyButton from 'components/molecules/CopyButton';
import Preview from './Preview';
import Writer from 'components/organisms/Writer';

interface Props {
    currentStory: Story;
}

const Body: React.FC<Props> = ({ currentStory }) => {
    return (
        <Container>
            {!currentStory && <h1>Start your story here!</h1>}
            <CopyButton story={currentStory} />
            <Title />
            <Writer />
            {process.env.NODE_ENV === 'development' && currentStory && currentStory.content && (
                <Preview>{currentStory.content}</Preview>
            )}
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