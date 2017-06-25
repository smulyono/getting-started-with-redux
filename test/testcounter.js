import counter from '../src/reducer';
import expect from 'expect';

expect(
    counter(0, {"type" : ""})
).toEqual(0);

expect(
    counter(2, {"type" : "INCREMENT"})
).toEqual(3);

console.log("test passed");