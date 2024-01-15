import { useState } from 'react';

export const Example = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  const handleReset = () => setCount(0)

  return (
    <div className='flex gap-1 font-medium leading-8'>
      <button className="bg-accent text-background px-3 rounded-0.5x" onClick={handleClick}>
        Clicked {count} times
      </button>
      <button className='text-accent px-3 rounded-0.5x' onClick={handleReset}>Reset</button>
    </div>
  );
}
