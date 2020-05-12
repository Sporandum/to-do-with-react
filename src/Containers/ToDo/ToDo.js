import React, { Component } from 'react';

import Cockpit from '../../Components/Cockpit/Cockpit';
import List from '../../Components/List/List';


class Todo extends Component {

    state = {
        inputValue: '',
        listItems: [
            {
                content: 'Ligne 1',
                edited: false
            },
            {
                content: 'Ligne 2',
                edited: false
            }
        ]
    }

    inputChangedHandler = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    addedHandler = (event) => {
        const inputValue = this.state.inputValue;
        const listItems = [...this.state.listItems];

        if (event.type === 'keyup' && event.key !== 'Enter') return;

        if (inputValue) {
            listItems.push({ content: inputValue });
            this.setState({ inputValue: '', listItems: listItems });
        }
    }

    listFocusHandler = (event, index, focus) => {
        const listItems = [...this.state.listItems];

        if (event.type === 'keyup' && event.key !== 'Enter') return;

        if (focus) {
            listItems[index].edited = true;
        } else {
            listItems[index].edited = false;
        }

        this.setState({ listItems: listItems });
    }

    listChangedHandler = (event, index) => {
        const listItems = [...this.state.listItems];
        listItems[index].content = event.target.value;
        this.setState({ listItems: listItems });
    }

    listDeletedHandler = (event, index) => {
        const listItems = [...this.state.listItems];
        if (listItems[index]) {
            listItems.splice(index, 1);
        }
        this.setState({ listItems: listItems });
    }

    render() {
        return (
            <React.Fragment>
                <Cockpit value={this.state.inputValue} changed={this.inputChangedHandler} added={this.addedHandler} />
                <List listItems={this.state.listItems} focused={this.listFocusHandler} changed={this.listChangedHandler} deleted={this.listDeletedHandler} />
            </React.Fragment>
        );
    }
}

export default Todo;