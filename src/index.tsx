import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux-state';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Root />
            </PersistGate>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));