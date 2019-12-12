import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { loginAction } from 'redux-state/login/actions';
import { LoginAction } from 'redux-state/login/types';
import { Users } from 'redux-state/users/types';

interface Props {
    showForm: (val: boolean) => void;
    showSignup: boolean;
    toggleSignup: (val: boolean) => void;
    users: Users;
    loginAction: LoginAction;
}

const LoginForm: React.FC<Props> = ({ showForm, showSignup, toggleSignup, loginAction, users }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleLogin = async () => {
        if (!username || !password) {
            setError("Please fill in all details");
            return;
        }
        const user = users.find(user => user.username === username);
        if (!user) {
            setError("This user does not exist");
            return;
        }
        if (user && user.password !== password) {
            setError("Incorrect Password, please try again");
            return;
        }
        await loginAction(user);
        showForm(false);
    };

    return (
        <div>
            <h4>Login</h4>
            {error && <p>{error}</p>}
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Log in</button>
            <p>or</p>
            <span onClick={() => toggleSignup(!showSignup)}>Sign up</span>
        </div>
    );
};

const mapStateToProps = ({ users }: AppState) => ({
    users
});

export default connect(
    mapStateToProps,
    {
        loginAction
    }
)(LoginForm);