import React from 'react';

class FilterDisplay extends React.Component {
    render() {
        const {
            display,
            filtertype,
            clickEventCallback,
            visibility
        } = this.props;
        return (
            <button 
                onClick={() => {
                    if (visibility !== filtertype) {
                        clickEventCallback({
                            filter : filtertype
                        });
                    }
                }}
                style={{
                    borderStyle:"none",
                    backgroundColor:"transparent",
                    cursor: visibility === filtertype ? "not-allowed" : "pointer",
                    textDecoration: visibility === filtertype ? "none" : "underline",
                    fontWeight:"bold",
                    color: visibility === filtertype ? "black" : "blue",
                    outline:"none",
                }}
                >
                {display}
            </button>
        )
    }
} 

export default FilterDisplay;