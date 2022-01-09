//3//

import { expect } from "@jest/globals";
import { returnPerson } from "./returnPerson.js";

test('Returning a name and an age', function () {
        expect(returnPerson()).toEqual({
        name: "Albert",
        age: 13,
    }
    );
  });
