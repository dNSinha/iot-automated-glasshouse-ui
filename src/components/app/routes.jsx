import React, { Component, lazy } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router';

const Home = lazy(() => import("Components/home"));
const NewPage = lazy(() => import("Components/newPage"));

export class Routes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFirstTime: true
        };
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }


    componentDidUpdate(previousProps) {

    }

    componentDidCatch() {

    }


    render() {
        return (
            < Switch >
                <Route exact path="/" component={() => (<Redirect to="home" />)} />
                <Route exact path="/home" component={(props) => <Home {...props} />} />
                <Route exact path="/newPage" component={(props) => <NewPage {...props} />} />
                <Route path='*' exact={true} component={() => (<Redirect to="/home" />)} />
            </Switch >
        );
    }
}
export default withRouter(Routes);
