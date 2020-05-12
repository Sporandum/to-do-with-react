import React from 'react';

const List = props => {
    return (
        props.listItems.map((item, i) => (

                <input
                    key={i}
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    value={item.content}
                />

        ))
    );
};

export default List;