import expect from 'expect';

const additem = (list) => {
    // return list.concat([0]);
    return [...list, 0];
};

const removeitem = (list, index) => {
    // mutation example
    // list.splice(index, 1);

    // no mutation
    // return list.slice(0, index)
    //     .concat(list.slice(index+1));

    // ES6 spread for no mutation    
    return [
        ...list.slice(0,index),
        ...list.slice(index+1)
    ];
};

const changeitem = (list, index) => {
    // list[index]++;

    // no mutation
    // return list.slice(0, index)
    //     .concat(list[index]+1)
    //     .concat(list.slice(index+1))

    // es6 no mutation
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index+1)
    ];

};

const testadditem = () => {
    const before=[];
    const after =[0];

    Object.freeze(before);

    expect(
        additem(before)
    ).toEqual(after);
};

const testremoveitem = () => {
    const before=[1,2,3];
    const after=[1,3];

    Object.freeze(before);

    expect(
        removeitem(before, 1)
    ).toEqual(after);
}

const testchangeitem = () => {
    const before=[1,3];
    const after=[1,4];

    Object.freeze(before);

    expect(
        changeitem(before, 1)
    ).toEqual(after);
}

testadditem();
testremoveitem();
testchangeitem();

console.log("all test passed");