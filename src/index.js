import { createStore }  from 'redux';
import reducer from './reducer';
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './component/counter';

const store = createStore(reducer);

const render = () => {
    ReactDOM.render(
        <Counter 
            value={store.getState()}
            onIncrement={() => {
                store.dispatch({
                    type: "INCREMENT"
                })
            }}
            onDecrement={() => {
                store.dispatch({
                    type: "DECREMENT"
                })
            }}
            />, 
        document.getElementById("root")
    )    
}
render();
store.subscribe(render);

