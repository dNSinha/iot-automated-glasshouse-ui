import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Routes from 'Components/App/routes';
import Home from 'Components/home';
import RealTime from 'Components/realTime';
import Loader from 'Components/loader';
import Header from 'Components/headers';


export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHome: true
        };
        this.chnangeLayout = this.chnangeLayout.bind(this);
    }

    chnangeLayout() {
        this.setState({
            isHome: !this.state.isHome
        })
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Header />
                <Router>
                    <Suspense fallback={<Loader />}>
                        {/* <Routes /> */}
                        <button type="button" className="btn btn-success" onClick={this.chnangeLayout}>{this.state.isHome ? "Real Time" : "Past Records"}</button>
                        {this.state.isHome ? <Home /> : <RealTime /> }
                        
                    </Suspense>
                </Router>
            </div>
        );
    }
}

export default App;
