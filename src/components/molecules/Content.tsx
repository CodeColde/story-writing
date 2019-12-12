import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { UserLogin } from 'redux-state/login/types';
import { createStoryAction, updateStoryAction } from 'redux-state/story/actions';
import { CreateStoryAction, Story, UpdateStoryAction } from 'redux-state/story/types';
import formatDate from 'utils/formatDate';
import styled from 'styled-components';
import theme from 'constants/theme';

interface Props {
    login: UserLogin;
    createStoryAction: CreateStoryAction;
    updateStoryAction: UpdateStoryAction;
    currentStory: Story;
}

const Content: React.FC<Props> = ({ createStoryAction, currentStory, updateStoryAction }) => {
    const [currId, setId] = React.useState(0);
    const [story, writeStory] = React.useState(currentStory.content ? currentStory.content : '');

    // New Story
    React.useEffect(() => {
        if (!currentStory.id && story.length > 0) {
            writeStory('');
            setId(0);
        }
    }, [currentStory, story]);

    // Switches story to another story
    React.useEffect(() => {
        if (currentStory.id && currId !== currentStory.id) {
            setId(currentStory.id);
            writeStory(currentStory.content);
        }
    }, [currentStory, currId]);

    // Reset story
    React.useEffect(() => {
        if (!currentStory.id && story.length > 0 && !currId) {
            writeStory('');
        }
    }, [currentStory, currId, story]);

    // Creating a new story when a user started writing their story
    React.useEffect(() => {
        if (!currentStory && story.length === 1 && !currId) {
            createStoryAction({
                author: 'anonymous',
                title: '',
                createdAt: formatDate(),
                lastUpdated: formatDate(),
                content: story
            });
        }
    }, [story, currId, createStoryAction, currentStory]);

    // Writing story
    React.useEffect(() => {
        if (currId === currentStory.id && story !== currentStory.content) {
            updateStoryAction({
                ...currentStory,
                id: currId,
                lastUpdated: formatDate(),
                content: story
            });
        }
    }, [currentStory, updateStoryAction, currId, story]);

    return (
        <ContentField
            placeholder="Start writing here..."
            onChange={(e) => writeStory(e.target.value)}
            value={story}
        />
    )
}

export default connect(
    ({ login, stories }: AppState) => ({ login, currentStory: stories.currentStory }),
    {
        createStoryAction,
        updateStoryAction
    }
)(Content);

const ContentField = styled.textarea`
    display: block;
    margin-top: 2rem;
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    border: 0;
    outline: 0;
    flex: 1;

    &::placeholder {
        color: ${theme.colors.black};
        opacity: 0.7;
        transition: opacity 0.2s ease-in-out;
    }

    &:focus, &:active {
        &::placeholder {
            opacity: 1;
        }
    }
`;