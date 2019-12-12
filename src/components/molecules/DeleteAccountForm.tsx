import React from 'react';
import { connect } from 'react-redux';
import { deleteAccount } from 'redux-state/users/actions';
import { logout } from 'redux-state/login/actions';
import { AppState } from 'redux-state';
import { LogoutAction, UserLogin } from 'redux-state/login/types';
import { DeleteAccountAction } from 'redux-state/users/types';
import { clearUserStoriesAction } from 'redux-state/story/actions';
import { ClearStoriesAction } from 'redux-state/story/types';

interface Props {
    goBack: () => void;
    login: UserLogin;
    logout: LogoutAction;
    deleteAccount: DeleteAccountAction;
    clearUserStoriesAction: ClearStoriesAction;
}

const DeleteAccountForm: React.FC<Props> = ({ login, logout, deleteAccount, goBack, clearUserStoriesAction }) => {
    const handleDelete = () => {
        // Remove stories from the user
        deleteAccount(login.username);
        clearUserStoriesAction(login.username);
        logout();
    }

    return (
        <div>
            <h2>Are you sure about that? You will lose all stories</h2>
            <div>
                <button onClick={goBack}>Oh no, please no</button>
            </div>
            <div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default connect(
    ({ login }: AppState) => ({  login }),
    { deleteAccount, logout, clearUserStoriesAction }
)(DeleteAccountForm);