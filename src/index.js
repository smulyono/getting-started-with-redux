import { createStore }  from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const render = () => {
    document.body.innerHTML = "<h1>" + store.getState() + "</h1>";
}
render();
store.subscribe(render);

// click on body
document.addEventListener("click", () => {
    store.dispatch({ type : 'INCREMENT' });
});
