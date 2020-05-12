import React, { Component } from 'react';

class Cockpit extends Component {

    inputRef = React.createRef();

    inputFocus = () => this.inputRef.current.focus();

    componentDidMount() {
        this.inputFocus();
    }

    render() {
        return (
            <React.Fragment>
                <div className="input-group mb-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Tapez quelque chose..."
                        aria-label=""
                        aria-describedby="button-addon2"
                        value={this.props.value}
                        onChange={this.props.changed}
                        onKeyUp={this.props.addedByInput}
                        ref={this.inputRef} />
                    <div className="input-group-append">
                        <button 
                        className="btn btn-outline-secondary" 
                        type="button" 
                        id="button-addon2"
                        onClick={this.props.added}>Ajouter</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Cockpit;