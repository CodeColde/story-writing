import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { Story } from 'redux-state/story/types';

interface Props {
    currentStory: Story;
}

const Preview: React.FC<Props> = ({ currentStory }) => {
    return (
        <div>
            {currentStory.content}
        </div>
    )
}

export default connect(
    ({ stories }: AppState) => ({ currentStory: stories.currentStory }),
)(Preview);