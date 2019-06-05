import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
    /* REM: static async
        static: means the method can be called without the component gets instantiated
        async: means the method does not return something instantly
    */
    // REM: this method can be used to fetch data from a server, using axios or a custom promise to return a prop (eg: appName) before rendering the component as shown below
    // REM: this method can be used to initialize the props before the page is actually loaded
    static async getInitialProps(context) {
        console.log('[IndexPage] context: ', context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'Super App using NextJS'});
            }, 2000);
        });
        return promise; // getInitialProps should resolve to an object
    }

    render() {
        return (
            <div>
                <h1>The Main Page - {this.props.appName}</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Go to Auth</button>
            </div>
        );
    };
}

export default IndexPage;