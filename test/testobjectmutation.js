import expect from 'expect';

const toggleTodo = (todo) => {
    // todo.completed = !todo.completed;

    // simple non-mutation
    // return {
    //     id : todo.id,
    //     text : todo.text,
    //     completed : !todo.competed
    // }

    // es6 assign
    return Object.assign({}, todo, {
        completed : !todo.completed
    });

    // es7 with babel-preset-stage2
    // return {
    //     ...todo,
    //     completed : !todo.completed
    // }
    // return todo;
};

const testToggleTodo = () => {
    const before = {
        id : 0,
        text : "todo 1",
        completed : false
    };
    const after ={
        id : 0,
        text : "todo 1",
        completed : true
    };

    Object.freeze(before);

    expect(
        toggleTodo(before)
    ).toEqual(after);
};

testToggleTodo();

console.log("all test object mutation passed!");