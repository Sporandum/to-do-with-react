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

    componentDidUpdate() {
        console.log(this.state);
    }


    inputChangedHandler = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    addedHandler = () => {
        const inputValue = this.state.inputValue;
        const listItems = [...this.state.listItems];
        if (inputValue) {
            listItems.push({ content: inputValue });
            this.setState({ inputValue: '', listItems: listItems });
        }
    }

    addedByInputHandler = event => {
        if (event.key === 'Enter') {
            this.addedHandler();
        }
    }

    editedHandler = (event, index) => {
        if (this.state.listItems[index].content) {
            const listItems = [...this.state.listItems];
            listItems[index].edited = !listItems[index].edited;
            this.setState({listItems: listItems})
        }
    }

    listChangedHandler = (event, index) => {
        const listItems = [...this.state.listItems];
        listItems[index].content = event.target.value;
        this.setState({listItems: listItems});
    }
    
    listDeletedHandler = (event, index) => {
        const listItems = [...this.state.listItems];
        if (listItems[index]) {
            listItems.splice(index, 1);
        }
        this.setState({listItems: listItems});
    }

     

    render() {
        return (
            <React.Fragment>
                <Cockpit value={this.state.inputValue} changed={this.inputChangedHandler} added={this.addedHandler} addedByInput={this.addedByInputHandler} inputRef={this.inputRef} />
                <List listItems={this.state.listItems} edited={this.editedHandler} changed={this.listChangedHandler} deleted={this.listDeletedHandler}/>
            </React.Fragment>
        );
    }
}

export default Todo;