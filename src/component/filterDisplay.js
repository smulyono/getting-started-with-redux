import React from 'react';
import PropTypes from 'prop-types';

const FilterDisplay = ({
    display,
    filtertype
}, { store }) => {
    const {visibility} = store.getState();
    return (
        <button
            onClick={() => {
                if (visibility !== filtertype) {
                    store.dispatch({
                        filter: filtertype,
                        type : "SET_FILTER"
                    })
                }
            }}
            style={{
                borderStyle: "none",
                backgroundColor: "transparent",
                cursor: visibility === filtertype ? "not-allowed" : "pointer",
                textDecoration: visibility === filtertype ? "none" : "underline",
                fontWeight: "bold",
                color: visibility === filtertype ? "black" : "blue",
                outline: "none",
            }}
        >
            {display}
        </button>
    );
}

FilterDisplay.contextTypes = {
    store : PropTypes.object
}

export default FilterDisplay;