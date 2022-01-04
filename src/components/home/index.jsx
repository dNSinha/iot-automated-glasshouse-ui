import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as StoreActions from 'Store/actions/storeActions';
import './style.scss';

export class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sample: 'hi'
    }
    this.handleClick = this.handleClick.bind(this);
    this.initialData = [
      { name: 'durgesh' },
      { name: 'abc' }
    ]
  }

  componentDidMount() {
    this.props.dispatch(StoreActions.setInitialData(this.initialData));
    this.setState({
      sample: 'newHi'
    })
  }

  handleClick() {
    console.log(this);
    this.props.history.push('/newPage');
  }

  render() {
    return (
      <div>
        <p className="home">Home Works!</p>
        <p>{process.env.GOOGLE_URL}</p>
        {this.state.sample}
        <button type="button" class="btn btn-primary" onClick={this.handleClick}>Primary</button>
      </div>
    );
  }
}

export default connect()(Home);