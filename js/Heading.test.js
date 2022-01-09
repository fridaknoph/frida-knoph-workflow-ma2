//4//

import { expect } from "@jest/globals";
import  Heading  from "./Heading.js";


test("string exists", function () {
    expect(Heading()).toContain("<h1>Workflow 2</h1>");
  });