import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'redux-state';
import { UserLogin } from 'redux-state/login/types';
import LogoutButton from 'components/atoms/LogoutButton';
import styled from 'styled-components';
import theme from 'constants/theme';
import ListOfStories from './ListOfStories';
import Settings from './Settings';
import { newStoryAction } from 'redux-state/story/actions';
import { NewStoryAction } from 'redux-state/story/types';

interface Props {
    login: UserLogin;
    newStoryAction: NewStoryAction;
}

const Menu: React.FC<Props> = ({ login, newStoryAction }) => {
    const [showSettings, toggleSettings] = React.useState(false);
    const [showStories, toggleStories] = React.useState(false);

    return (
        <Container>
            {!showSettings && !showStories &&
                <>
                    <h2>Hi {login.username}</h2>
                    <br />
                    <p onClick={() => newStoryAction()}>New Story</p>
                    <br />
                    <p onClick={() => toggleStories(!showStories)}>View Stories</p>
                    <br />
                    <p onClick={() => toggleSettings(!showSettings)}>Settings</p>
                    <LogoutButton />
                </>
            }
            {showStories && <ListOfStories goBack={() => toggleStories(false)} />}
            {showSettings && <Settings goBack={() => toggleSettings(false)} />}
        </Container>
    )
}

const mapStateToProps = ({ login }: AppState) => ({ login });

export default connect(
    mapStateToProps,
    { newStoryAction }
)(Menu);

const Container = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 2rem 5rem;
    background-color: ${theme.colors.darkPurple};
`;