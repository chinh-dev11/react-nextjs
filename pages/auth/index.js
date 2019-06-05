import React, { Component } from 'react';

import User from '../../components/User';

class AuthIndexPage extends Component {
    render() {
        return (
            <div>
                <h1>The Auth Index Page</h1>
                <User name="Max" age="30" />
            </div>
        );
    };
};

export default AuthIndexPage;