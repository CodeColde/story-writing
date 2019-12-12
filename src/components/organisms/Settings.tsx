import React from 'react';
import ChangePasswordForm from 'components/molecules/ChangePasswordForm';
import ChangeUsernameForm from 'components/molecules/ChangeUsernameForm';
import DeleteAccountForm from 'components/molecules/DeleteAccountForm';

interface Props {
    goBack: () => void;
}
const Settings: React.FC<Props> = ({ goBack }) => {
    const [changePassword, showChangePassword] = React.useState(false);
    const [changeUsername, showChangeUsername] = React.useState(false);
    const [deleteUser, showDelete] = React.useState(false);

    return (
        <div>
            {!changePassword && !changeUsername && !deleteUser &&
                <>
                    <h3>Settings</h3>
                    <p onClick={goBack}>Back...</p>
                    <p onClick={() => showChangeUsername(!changeUsername)}>Change Username</p>
                    <p onClick={() => showChangePassword(!changePassword)}>Change Password</p>
                    <p onClick={() => showDelete(!deleteUser)}>Delete Account</p>
                </>
            }
            {changePassword &&
                <ChangePasswordForm goBack={() => showChangePassword(false)} />
            }
            {changeUsername &&
                <ChangeUsernameForm goBack={() => showChangeUsername(false)} />
            }
            {deleteUser &&
                <DeleteAccountForm goBack={() => showDelete(false)} />
            }
        </div>
    );
};

export default Settings;