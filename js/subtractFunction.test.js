//1//

import { expect } from "@jest/globals";
import subtract  from "./subtractFunction.js";

test('subtracting 2 - 1 to equals 1', function () {
    expect(subtract(2, 1)).toBe(1);
  });