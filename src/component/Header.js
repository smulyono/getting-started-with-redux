import React from 'react';
import PropTypes from 'prop-types';

let todoCounter = 0;

class Header extends React.Component {
    render() {
        const {store} = this.context;
        const {label} = this.props;
        return (
            <div>
                <input 
                    type="text"
                    ref ={ node => {
                        this.inputText=node
                    }}/>
                <button onClick={() => {
                    store.dispatch({
                        text : this.inputText.value,
                        id : todoCounter,
                        type : "ADD_TODO"
                    })
                    todoCounter++;
                    this.inputText.focus();
                    this.inputText.value='';
                }} >
                    {label}
                </button>            
            </div>
        );
    }
}

Header.contextTypes = {
    store : PropTypes.object
}
export default Header;