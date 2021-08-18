let animals = [];

describe("animals array", () => {
  // When you run beforeEach inside a describe block, it repeats only in this scope.

  //   beforeAll(() => {
  //     animals = ["elephant", "zebra", "bear", "tiger"];
  //   });

  beforeEach(() => {
    animals = ["elephant", "zebra", "bear", "tiger"];
    console.log("beforeEach");
  });

  //   afterEach(() => {
  //     console.log("something after each test");
  //   });

  //   afterAll(() => {
  //     console.log("after all tests");
  //   });

  it("should add animal to end of array", () => {
    animals.push("aligator");
    expect(animals[animals.length - 1]).toBe("aligator");
  });

  it("should add animal to beginning of array", () => {
    animals.unshift("monkey");
    expect(animals[0]).toBe("monkey");
  });

  it("should have initial length of 4", () => {
    expect(animals.length).toBe(4);
  });
});

describe("testing something else", () => {
  it("true should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
