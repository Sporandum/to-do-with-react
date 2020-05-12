import React, { Component } from 'react';

class List extends Component {


    inputsRef = [];

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
                                onFocus={(event) => this.props.edited(event, i)}
                                onBlur={(event) => this.props.edited(event, i)}
                                ref={el => this.inputsRef.push(el)}
                            />
                            <button
                                className="btn btn-outline-success"
                                onClick={() => this.inputsRef[i].focus()} >
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