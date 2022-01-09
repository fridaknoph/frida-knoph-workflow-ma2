//2//

import { expect } from "@jest/globals";
import { spaceReplace } from "./spaceReplace.js";

test('removing all spaces from characters, and replacing with an -', function () {
    expect(spaceReplace("a b c")).toBe("a-b-c");
  });
