import React, { Fragment } from 'react';

const Layout = props => (
    <Fragment>
        <nav className="navbar navbar-light bg-light">
            <span>ToDo React</span>
        </nav>
        <div className="container mt-5">
            <div className="row">
                <div className="mx-auto col-12 col-md-8">
                    {props.children}
                </div>
            </div>
        </div>
    </Fragment>
);

export default Layout;