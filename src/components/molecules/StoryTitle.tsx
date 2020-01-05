import React from 'react';
import { UserLogin } from 'redux-state/login/types';
import { Story, UpdateStoryAction, CreateStoryAction } from 'redux-state/story/types';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { updateStoryAction, createStoryAction } from 'redux-state/story/actions';
import formatDate from 'utils/formatDate';
import styled from 'styled-components';
import theme from 'constants/theme';

interface Props {
    login: UserLogin;
    createStoryAction: CreateStoryAction;
    updateStoryAction: UpdateStoryAction;
    currentStory: Story;
}

const StoryTitle: React.FC<Props> = ({ login, currentStory, createStoryAction, updateStoryAction }) => {
    const [currId, setId] = React.useState(0);
    const [title, setTitle] = React.useState(currentStory.title ? currentStory.title : '');
    const [author, setAuthor] = React.useState(login.username ? login.username : 'anonymous');

    // Switches story to another story
    React.useEffect(() => {
        if (currentStory.id && currId !== currentStory.id) {
            console.log('changing story title and author');
            setId(currentStory.id);
            setTitle(currentStory.title);
            setAuthor(currentStory.author);
        }
    }, [currentStory, currId]);

    // Creates a story when a user adds a title
    React.useEffect(() => {
        if (!currentStory.createdAt && title.length === 1 && !currId) {
            createStoryAction({
                author,
                title,
                createdAt: formatDate(),
                lastUpdated: formatDate(),
                content: ''
            });
        }
    }, [title, author, currId, createStoryAction, currentStory]);

    // New Story
    React.useEffect(() => {
        if (!currentStory.id && title.length > 0) {
            setTitle('');
            setId(0);
        }
    }, [currentStory, title]);

    // Sets a username / user logged in or signed up after writing a story
    React.useEffect(() => {
        if (login.username && author !== login.username) {
            console.log('setting username');
            setAuthor(login.username);
        }
    }, [login, author]);

    // User updated story's title
    React.useEffect(() => {
        if (currId === currentStory.id) {
            if (title !== currentStory.title) {
                console.log('updating title');
                updateStoryAction({
                    ...currentStory,
                    id: currId,
                    title,
                });
            }
        }
    }, [title, updateStoryAction, currentStory, currId]);

    // Updating author
    React.useEffect(() => {
        if (currId === currentStory.id && currentStory.author === "anonymous" && author !== 'anonymous') {
            console.log('updating author');
            updateStoryAction({
                ...currentStory,
                id: currId,
                author
            });
        }
    },  [author, updateStoryAction, currentStory, currId]);

    return (
        <TitleField placeholder="Title..." type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
    )
}

export default connect(
    ({ login, stories }: AppState) => ({ login, currentStory: stories.currentStory }),
    {
        createStoryAction,
        updateStoryAction
    }
)(StoryTitle);

const TitleField = styled.input`
    font-size: 3rem;
    display: block;
    border: 0;
    outline: 0;

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
`