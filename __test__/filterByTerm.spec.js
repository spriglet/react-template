


describe("Filter Function",function(){
  const filterByTerm = require("../src/filterByTerm");
  test("it should filter by a search term (link)", () => {
    // actual test
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];
    const output1 = [{ id: 3, url: "https://www.link3.dev" }];
    const output2 = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ];
    expect(filterByTerm(input,"link")).toEqual(output1);
    expect(filterByTerm(input,"LINK")).toEqual(output1);
    expect(filterByTerm(input,"uRl")).toEqual(output2);
    expect(filterByTerm(input,"WTF")).toEqual([]);
  });
});