import React from "react";
import sinon from "sinon";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Options from "../Options";

const options = [{ key: 'test', label: 'Test' }, { key: 'test', label: 'Test' },]

describe("Button: Options Unit Tests", () => {
  it("renders the button", () => {
    const { container } = render(<Options value="test" options={[{ key: 'test', label: 'Test', weight: 0, active: false }]} sendUpdate={() => null} />);
  });

});