import React from 'react';
import { connect } from 'react-redux';

let todoCounter = 0;

const HeaderItem = ({
    label, 
    dispatch
}) => {
    let inputText;
    return (
        <div>
            <input 
                type="text"
                ref ={ node => {
                    inputText=node
                }}/>
            <button onClick={() => {
                dispatch({
                    text : inputText.value,
                    id : todoCounter,
                    type : "ADD_TODO"
                })
                todoCounter++;
                inputText.focus();
                inputText.value='';
            }} >
                {label}
            </button>            
        </div>
    )
}


// with passing null on 2nd param, dispatch get passed into params,
// instead passing explicit (dispatch) => { return {dispatch}}
const Header = connect(null, null)(HeaderItem);

// class Header extends React.Component {
//     render() {
//         const {store} = this.context;
//         const {label} = this.props;
//         return (
//             <div>
//                 <input 
//                     type="text"
//                     ref ={ node => {
//                         this.inputText=node
//                     }}/>
//                 <button onClick={() => {
//                     store.dispatch({
//                         text : this.inputText.value,
//                         id : todoCounter,
//                         type : "ADD_TODO"
//                     })
//                     todoCounter++;
//                     this.inputText.focus();
//                     this.inputText.value='';
//                 }} >
//                     {label}
//                 </button>            
//             </div>
//         );
//     }
// }

// Header.contextTypes = {
//     store : PropTypes.object
// }
export default Header;