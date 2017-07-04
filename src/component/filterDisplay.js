import React from 'react';
import PropTypes from 'prop-types';

class FilterDisplay extends React.Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {store} = this.context;
        const {display, filtertype} = this.props;
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
}

FilterDisplay.contextTypes = {
    store : PropTypes.object
}

export default FilterDisplay;