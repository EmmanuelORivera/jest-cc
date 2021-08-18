const axios = require("axios");
const fetchData = require("../02-async/async");

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it("mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.results[0].value).toBe(42);
  expect(mockCallback.mock.results[1].value).toBe(43);
});

it("mock return", () => {
  const mock = jest.fn();

  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("Hello World");

  const results = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results).toBeTruthy();
  expect(results2).toBeFalsy();
  expect(results3).toBe("Hello World");
});

it("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Clean the room",
    },
  });
  const results = await fetchData(1);

  expect(results.todo).toBe("Clean the room");
});
