'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const textStyle = {
    fontSize: '72px',
    fontWeight: '900',
    color: 'magenta'
  };

  return (
    <main>
      <span
        style={textStyle}
      >
        The count is {count}!
      </span>
      <br/>
      <button type="button"
        onClick={() => {
          setCount((prev) => ++prev);
        }}
        style={{
          border: 'none',
          padding: '8px 14px',
          borderRadius: '8px',
          backgroundColor: 'magenta',
          color: 'white'
        }}>
        click me!
      </button>
    </main>
  )
}
