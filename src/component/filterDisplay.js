import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


// class FilterDisplay extends React.Component {
//     componentDidMount() {
//         const { store } = this.context;
//         this.unsubscribe = store.subscribe(() => this.forceUpdate());
//     }
//     componentWillUnmount() {
//         this.unsubscribe();
//     }

//     render() {
//         const {store} = this.context;
//         const {display, filtertype} = this.props;
//         const {visibility} = store.getState();
//         return (
//             <button
//                 onClick={() => {
//                     if (visibility !== filtertype) {
//                         store.dispatch({
//                             filter: filtertype,
//                             type : "SET_FILTER"
//                         })
//                     }
//                 }}
//                 style={{
//                     borderStyle: "none",
//                     backgroundColor: "transparent",
//                     cursor: visibility === filtertype ? "not-allowed" : "pointer",
//                     textDecoration: visibility === filtertype ? "none" : "underline",
//                     fontWeight: "bold",
//                     color: visibility === filtertype ? "black" : "blue",
//                     outline: "none",
//                 }}
//             >
//                 {display}
//             </button>
//         );       
//     }
// }

// FilterDisplay.contextTypes = {
//     store : PropTypes.object
// }

const FilterDisplayItem = ({
    activeLink,
    display,
    onClickEvent
}) => (
    <button
        onClick={() => {
            if (!activeLink) {
                onClickEvent();
            }
        }}
        style={{
            borderStyle: "none",
            backgroundColor: "transparent",
            cursor: activeLink ? "not-allowed" : "pointer",
            textDecoration: activeLink ? "none" : "underline",
            fontWeight: "bold",
            color: activeLink ? "black" : "blue",
            outline: "none",
        }}
    >
        {display}
    </button>    
)

const mapStateIntoProps = (state, ownProps) => {
    return {
        activeLink : (state.visibility === ownProps.filtertype)
    }
}
const mapDispatchIntoProps = (dispatch, ownProps) => {
    return {
        onClickEvent: () => {
            dispatch({
                filter: ownProps.filtertype,
                type : "SET_FILTER"
            })            
        }
    }
}

const FilterDisplay = connect(mapStateIntoProps, mapDispatchIntoProps)(FilterDisplayItem);



export default FilterDisplay;