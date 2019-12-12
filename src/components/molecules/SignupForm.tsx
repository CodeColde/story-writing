import React from 'react';
import { AppState } from 'redux-state';
import { connect } from 'react-redux';
import { createUser } from "redux-state/users/actions";
import { Users, CreateUserAction } from 'redux-state/users/types';

interface Props {
    showSignup: boolean;
    toggleSignup: (val: boolean) => void;
    createUser: CreateUserAction;
    users: Users;
}

const SignupForm: React.FC<Props> = ({ showSignup, createUser, users, toggleSignup }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const handleClick = () => {
        const userExists = users.find(user => user.username === username);
        if (!userExists) {
            createUser({ username, password });
            setError("");
            toggleSignup(false);
        } else {
            setError(`Username "${username}" already exists!`);
        }
    };

    return (
        <div>
            <h4>Sign Up</h4>
            {error && <p>{error}</p>}
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick}>Sign up</button>
            <p>or</p>
            <span onClick={( ) => toggleSignup(!showSignup)}>Log in</span>
        </div>
    )
}

const mapStateToProps = ({ users }: AppState) => ({
    users
});

export default connect(
    mapStateToProps,
    { createUser }
)(SignupForm);