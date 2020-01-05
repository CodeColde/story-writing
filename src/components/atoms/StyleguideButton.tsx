import React from 'react';
import Styleguide from 'components/organisms/Styleguide';

const StyleguideButtons = () => {
    const [showStyleguide, toggleStyleguide] = React.useState(false);
    return (
        <div>
            <p onClick={() => toggleStyleguide(true)}>Styleguide</p>
            {showStyleguide && <Styleguide close={() => toggleStyleguide(false)} />}
        </div>
    );
}

export default StyleguideButtons;

