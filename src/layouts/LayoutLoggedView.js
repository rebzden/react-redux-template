import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import RootRoute from '../routes/RootRoute';

class LayoutLoggedView extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        this.props.logout();
    }
    render(){
        return (
            <div>
        Logged
        <main>
            <button type="button" onClick={this.logout}>Logout</button>
            <RootRoute/>
            </main>
        </div>
        );
    }
}

LayoutLoggedView.propTypes = {
  logout: PropTypes.func.isRequired
}

export default LayoutLoggedView