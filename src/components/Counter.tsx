import { useState } from "react";
import { Button } from "react-daisyui";

export const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <Button
      size="md"
      color="accent"
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      Count is {count}
    </Button>
  );
};
