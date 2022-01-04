import React, { Component } from 'react';
import { connect } from 'react-redux';

export class NewPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sample: 'hi'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            sample: 'newHi'
        })
        console.log(this.props.initialData);
    }

    handleClick() {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <form>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validationServer01">First name</label>
                            <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required />
                            <div class="valid-feedback">
                                Looks good!
                                </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="validationServer02">Last name</label>
                            <input type="text" class="form-control is-invalid" id="validationServer02" value="Otto" required />
                            <div class="valid-feedback">
                                Looks good!
                                    </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="validationServer03">City</label>
                            <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                            <div id="validationServer03Feedback" class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>

                    </div>
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </form>
                <button type="button" class="btn btn-primary" onClick={this.handleClick}>Primary</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        initialData: state.initialDataReducer
    }
}

export default connect(mapStateToProps)(NewPage);