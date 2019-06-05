import React from 'react';
import Router from 'next/router';

import User from '../../components/User';

const authIndexPage = (props) => (
    <div>
        <h1>The Auth Index Page - {props.appName}</h1>
        <User name="Max" age="30" />
        <button onClick={() => Router.push('/')}>Go home</button>
    </div>
);

// REM: this method can be used to fetch data from a server, using axios or a custom promise to return a prop (eg: appName) before rendering the component as shown below
// REM: this method can be used to initialize the props before the page is actually loaded
authIndexPage.getInitialProps = context => {
    console.log('[AuthIndexPage] context: ', context);
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'Super App using NextJS' });
        }, 2000);
    });
    return promise; // getInitialProps should resolve to an object
};

export default authIndexPage;