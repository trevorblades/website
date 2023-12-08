import React, { useState } from "react";
import { Button } from "react-daisyui";

export const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <Button
      size="md"
      color="secondary"
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      Count is {count} {import.meta.env.PUBLIC_THIS_IS_TEST}
    </Button>
  );
};
