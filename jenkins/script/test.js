//const login = require('./funcion');

//test('It has to be true', () => {
  //expect(login("jose")).toBeTruthy();
//});
//Example
/*describe('arrayContaining', () => {
  //const expected = ['Alice', 'Bob', 'Eve'];
  var expected = ['Jose','Enrique'];
  it('matches even if received contains additional elements', () => {
    expect(['Jose','Enrique']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['jj', 'jjj']).not.toEqual(expect.arrayContaining(expected));
  });
});*/

/*var variable = "hello_world";
it ('it has to be the same', () => {
  expect(variable).toEqual('hello_world');
})*/


/*expect.extend({
  toBeDivisibleBy(received, argument) {
    const pass = received % argument == 0;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${argument}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be divisible by ${argument}`,
        pass: false,
      };
    }
  },
});

test('even and odd numbers', () => {
  expect(100).toBeDivisibleBy(2);
  expect(101).not.toBeDivisibleBy(2);
});*/
const login = require('./funcion');

test("Tiene que estar el estudiante registrado", () => {
  expect(login("jesus")).toBeTruthy();
  //toBeTruthy
});
 //-------- Mock function
/* function forEach(items, callback) {
   for (let index = 0; index < items.length; index++) {
     callback(items[index]);
   }
 }
 const mockCallback = jest.fn();
forEach([0, 1], mockCallback);
test("The mock function is called twice", () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});
test("The first argument of the first call to the function was 0", () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
});
test("The return value of the first call to the function was 42", () => {
  expect(mockCallback.mock.returnValues[1][0]).toBe(1);
});*/
/*const someMockFunction = jest.fn();
const miMock = jest.fn();
const a = new miMock();
const b = {};
const bound = miMock.bind(b);
bound();

//console.log(miMock.mock.instances);


test("The function was called exactly once", () => {
  expect(someMockFunction.mock.calls.length).toBe(1);
});*/
