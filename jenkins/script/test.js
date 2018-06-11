const login = require('./funcion');

test("Tiene que estar el estudiante registrado", () => {
  expect(login("omar")).toBeTruthy();
  //toBeTruthy
});
