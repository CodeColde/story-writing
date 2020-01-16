import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { Story, SelectStoryAction } from 'redux-state/story/types';
import { selectStoryAction } from 'redux-state/story/actions';
import { UserLogin } from 'redux-state/login/types';

interface Props {
    goBack: () => void;
    login: UserLogin;
    stories: Story[];
    selectStoryAction: SelectStoryAction;
}

const ListOfStories: React.FC<Props> = ({ goBack, stories, selectStoryAction, login }) => {
    return (
        <div>
            <h3>Showing All Stories</h3>
            <p onClick={goBack}>Back...</p>
            <ul>
                {stories.map((story) => story.author === login.username && (
                    <li
                        key={story.id}
                        onClick={() => selectStoryAction(story.id)}
                    >
                        {story.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default connect(
    ({ stories, login }: AppState) => ({ login, stories: stories.stories }),
    { selectStoryAction }
)(ListOfStories);