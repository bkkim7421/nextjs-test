"use client";

import { useState } from "react";
import styles from "./styles.module.css";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  return (
    <main>
      <span>The count is {count}!</span>
      <span>Hello World!</span>
      <br />
      <button
        type="button"
        onClick={() => {
          setCount((prev) => ++prev);
        }}
        style={{
          border: "none",
          padding: "8px 14px",
          borderRadius: "8px",
          backgroundColor: "magenta",
          color: "white",
          cursor: "pointer",
        }}
      >
        click me!
      </button>
    </main>
  );
}
