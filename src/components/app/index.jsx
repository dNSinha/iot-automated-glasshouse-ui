import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Routes from 'Components/App/routes';
import Loader from 'Components/loader';
import Header from 'Components/headers';


export class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Router>
                    <Suspense fallback={<Loader />}>
                        <Routes />
                    </Suspense>
                </Router>
            </div>
        );
    }
}

export default App;
