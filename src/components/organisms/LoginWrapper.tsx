import React from 'react';
import LoginButton from 'components/atoms/LoginButton';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { loginAction } from 'redux-state/login/actions';
import { Users } from 'redux-state/users/types';
import { LoginAction, UserLogin } from 'redux-state/login/types';
import LoginForm from 'components/molecules/LoginForm';
import SignupForm from 'components/molecules/SignupForm';
import styled from 'styled-components';
import theme from 'constants/theme';
import Menu from './Menu';

interface Props {
    users: Users;
    login: UserLogin;
    loginAction: LoginAction;
}

const LoginWrapper: React.FC<Props> = ({ login }) => {
    const [showForm, setShowForm] = React.useState(false);
    const [showSignup, setShowSignup] = React.useState(false);

    const handleClick = () => {
        setShowForm(!showForm);
        setShowSignup(false);
    }

    return (
        <div>
            {login.username
                ? <>
                    <Menu />
                </>
                : <FormContainer>
                    <LoginButton onClick={handleClick} />
                    <FormWrapper>
                        {showForm && !showSignup &&
                            <LoginForm
                                showForm={(val) => setShowForm(val)}
                                showSignup = {showSignup}
                                toggleSignup={(val) => setShowSignup(val)}
                            />
                        }
                        {showForm && showSignup &&
                            <SignupForm
                                showSignup={showSignup}
                                toggleSignup={(type) => setShowSignup(type)}
                            />
                        }
                    </FormWrapper>
                </FormContainer>
            }
        </div>
    );
};

const mapStateToProps = ({ login, users }: AppState) => ({
    login, users
});

export default connect(
    mapStateToProps,
    {
        loginAction
    }
)(LoginWrapper);

const FormContainer = styled.div`
    position: relative;
`;

const FormWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 100%;
    background-color: ${theme.colors.darkPurple};
`;