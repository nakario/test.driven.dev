// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { ReactElement } from "react";

const tdd = "TDD";

const Index = (): ReactElement => (
  <div>
    <p>Hello {tdd}!</p>
    <p>
      This website is developed in{" "}
      <a href="https://github.com/nakario/test.driven.dev">this GitHub repo</a>.
    </p>
  </div>
);

export default Index;
