import React, { Component } from 'react';

import Cockpit from '../../Components/Cockpit/Cockpit';
import List from '../../Components/List/List';


class Todo extends Component {

    state = {
        inputValue: '',
        listItems: [
            { content: 'Ligne 1' },
            { content: 'Ligne 2' }
        ]
    }

    
    inputChangedHandler = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    addedHandler = () => {
        const inputValue = this.state.inputValue;
        const listItems = [...this.state.listItems];
        if (inputValue) {
            listItems.push({ content: inputValue });
            this.setState({inputValue: '', listItems: listItems});
        }
    }

    addedByInputHandler = event => {
        if (event.key === 'Enter') {
            this.addedHandler();
        }
    }

    render() {
        return (
            <React.Fragment>
                <Cockpit value={this.state.inputValue} changed={this.inputChangedHandler} added={this.addedHandler} addedByInput={this.addedByInputHandler} inputRef={this.inputRef} />
                <List listItems={this.state.listItems} />
            </React.Fragment>
        );
    }
}

export default Todo;