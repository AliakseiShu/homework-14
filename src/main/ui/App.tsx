import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <>
                    <Switch>
                        <Route{/*<Main/>*/}/>
                    </Switch>
                </>
            </div>
        </BrowserRouter>
    );
}

export default App;

