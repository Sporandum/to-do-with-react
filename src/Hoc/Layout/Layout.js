import React from 'react';

const Layout = props => (
    <div className="container mt-5">
        <div className="row">
            <div className="mx-auto col-12 col-md-8">
                {props.children}
            </div>
        </div>
    </div>
);

export default Layout;