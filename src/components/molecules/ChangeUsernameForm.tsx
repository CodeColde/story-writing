import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { UserLogin, LogoutAction } from 'redux-state/login/types';
import { ChangeUsernameAction, Users, User } from 'redux-state/users/types';
import { changeUsername } from 'redux-state/users/actions';
import { logout } from 'redux-state/login/actions';
import { updateAuthorAction } from 'redux-state/story/actions';
import { UpdateAuthorAction } from 'redux-state/story/types';

interface Props {
    goBack: () => void;
    login: UserLogin;
    users: Users;
    logout: LogoutAction;
    changeUsername: ChangeUsernameAction;
    updateAuthorAction: UpdateAuthorAction;
}

const ChangeUsernameForm: React.FC<Props> = ({ goBack, login, users, logout, updateAuthorAction, changeUsername }) => {
    const [error, setError] = React.useState('');
    const [currentUsername, setCurrentUsername] = React.useState('');
    const [newUsername, setNewUsername] = React.useState('');
    const [newUsernameTwo, setNewUsernameTwo] = React.useState('');

    const handleChangeUsername = () => {
        if (currentUsername !== login.username) {
            setError(`Current username doesn't match your actual username`);
            return;
        }
        if (newUsername === currentUsername) {
            setError(`You need to actually change your username, though...`);
            return;
        }
        if (newUsername !== newUsernameTwo) {
            setError(`New usernames don't match`);
            return;
        }
        if (!!users.find((entry: User) => entry.username === newUsername)) {
            setError(`That username has been taken, please choose another`);
            return;
        }
        changeUsername({
            username: login.username,
            password: login.password,
            newUsername
        });
        updateAuthorAction(login.username, newUsername);
        logout();
    }

    return (
        <div>
            <h3>Change Username</h3>
            <p onClick={goBack}>Back...</p>
            <p>{error && error}</p>
            <input type="text" value={currentUsername} onChange={(e) => setCurrentUsername(e.target.value)} />
            <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
            <input type="text" value={newUsernameTwo} onChange={(e) => setNewUsernameTwo(e.target.value)} />
            <button onClick={handleChangeUsername}>Change Username</button>
        </div>
    );
};

export default connect(
    ({ login, users }: AppState) => ({ login, users }),
    { changeUsername, logout, updateAuthorAction }
)(ChangeUsernameForm);