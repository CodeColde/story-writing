import React from 'react';
import { connect } from 'react-redux';
import { logout } from 'redux-state/login/actions';
import { LogoutAction } from 'redux-state/login/types';
import { newStoryAction } from 'redux-state/story/actions';
import { NewStoryAction } from 'redux-state/story/types';

interface Props {
    logout: LogoutAction;
    clearCurrentStory: NewStoryAction;
}

const LogoutButton: React.FC<Props> = ({ logout, clearCurrentStory }) => {

    const handleClick = () => {
        logout();
        clearCurrentStory();
    }

    return (
        <button onClick={handleClick}>Logout</button>
    )
}

export default connect(
    null,
    { logout, clearCurrentStory: newStoryAction }
)(LogoutButton);