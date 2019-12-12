import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { deleteStoryAction } from 'redux-state/story/actions';
import { Story, DeleteStoryAction } from 'redux-state/story/types';

interface Props {
    currentStory: Story;
    deleteStoryAction: DeleteStoryAction;
}

const StorySettings: React.FC<Props> = ({ currentStory, deleteStoryAction }) => {
    return (
        <ul>
            {currentStory.id && <li onClick={() => deleteStoryAction(currentStory.id)}>Delete Story</li>}
        </ul>
    )
}

export default connect(
    ({ stories }: AppState) => ({ currentStory: stories.currentStory }),
    {
        deleteStoryAction
    }
)(StorySettings);