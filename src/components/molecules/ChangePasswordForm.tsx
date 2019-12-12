import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { UserLogin, LogoutAction } from 'redux-state/login/types';
import { ChangePasswordAction } from 'redux-state/users/types';
import { changePassword } from 'redux-state/users/actions';
import { logout } from 'redux-state/login/actions';

interface Props {
    goBack: () => void;
    login: UserLogin;
    logout: LogoutAction;
    changePassword: ChangePasswordAction;
}

const ChangePasswordForm: React.FC<Props> = ({ goBack, login, logout, changePassword }) => {
    const [error, setError] = React.useState('');
    const [currentPassword, setCurrentPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [newPasswordTwo, setNewPasswordTwo] = React.useState('');

    const handleChangePassword = () => {
        if (currentPassword !== login.password) {
            setError(`Current Password doesn't match your actual password`);
            return;
        }
        if (newPassword === currentPassword) {
            setError(`You need to actually change your password, though...`);
            return;
        }
        if (newPassword !== newPasswordTwo) {
            setError(`New passwords don't match`);
            return;
        }
        changePassword({
            username: login.username,
            password: newPassword
        });
        logout();
    }

    return (
        <div>
            <h3>Change Password</h3>
            <p onClick={goBack}>Back...</p>
            <p>{error && error}</p>
            <input type="text" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
            <input type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <input type="text" value={newPasswordTwo} onChange={(e) => setNewPasswordTwo(e.target.value)} />
            <button onClick={handleChangePassword}>Change Password</button>
        </div>
    );
};

export default connect(
    ({ login }: AppState) => ({ login }),
    { changePassword, logout }
)(ChangePasswordForm);