const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Ola Mundo, falamos aqui da Consolare!");
  });
});
