import React from "react";
import { create } from "react-test-renderer";
import HelloWorld from "../src/components/HelloWorld";

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const helloWorld = create(<HelloWorld />);
    expect(helloWorld.toJSON()).toMatchSnapshot();
  });
});