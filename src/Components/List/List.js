import React, { Component } from 'react';

class List extends Component {

    listItemsRef = React.createRef();

    render() {
        let listItems = null;

        listItems = (
            this.props.listItems.map((item, i) => {
                return (
                    <div
                        key={i}
                        className="form-group row">

                        <div className="input-group col">
                            <input
                                type="text"
                                readOnly={item.edited ? false : true}
                                className={item.edited ? "form-control" : "form-control-plaintext"}
                                value={item.content}
                                onChange={(event) => this.props.changed(event, i)}
                            />
                            <button
                                className="btn btn-outline-success"
                                onClick={(event) => this.props.edited(event, i)} >
                                {item.edited ? "Valider" : "Editer"}
                            </button>
                            {item.edited ? null : 
                            <button
                                className="btn btn-outline-danger ml-2"
                                onClick={(event) => this.props.deleted(event, i)}>Supprimer</button>

                            }
                        </div>
                    </div>
                )

            })
        );
        return (
            <div ref={this.listItemsRef}>
                {listItems}
            </div>
        );
    }





};

export default List;