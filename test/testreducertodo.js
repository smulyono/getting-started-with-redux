import expect from 'expect';

const reducertodo = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO' :
            return [
                ...state,
                {
                    id : action.id,
                    text : action.text,
                    completed : false
                }
            ];
        case 'TOGGLE_TODO' : 
            return state.map((todo) => {
                if (todo.id != action.id) {
                    return todo;
                }
                return {
                    ...todo, 
                    completed : !todo.completed
                }
                // return Object.assign({}, todo, {
                //     completed : !todo.completed
                // })
            });
        default : 
            return state;
    }
};

const testAddTodo = () => {
    const before = [
        {
            id : 0,
            text : 'new todo',
            completed : false            
        },
        {
            id : 1,
            text : 'new todo 2',
            completed : false            
        }
    ];
    const action = {
        type : 'TOGGLE_TODO',
        id : 1
    };
    const after = [
        {
            id : 0,
            text : 'new todo',
            completed : false            
        },
        {
            id : 1,
            text : 'new todo 2',
            completed : true            
        }
    ];

    Object.freeze(before);
    Object.freeze(action);

    expect(
        reducertodo(before, action)
    ).toEqual(after);
};

const testToggleTodo = () => {
    const before = [];
    const action = {
        type : 'ADD_TODO',
        id : 0,
        text : 'new todo'
    };
    const after = [
        {
            id : 0,
            text : 'new todo',
            completed : false
        }
    ];

    Object.freeze(before);
    Object.freeze(action);

    expect(
        reducertodo(before, action)
    ).toEqual(after);

};

testAddTodo();
testToggleTodo();

console.log("All test reducer todo passed!");