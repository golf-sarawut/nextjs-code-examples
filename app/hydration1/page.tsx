"use client";

import { useState } from "react";

export default function Hydration1() {
  const [randomNumber, setRandomNumber] = useState<number>(Math.random());

  return (
    <div className="flex flex-col gap-[15px] p-[15px]">
      <p>Random number: {randomNumber}</p>
      <button
        className="w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setRandomNumber(Math.random())}
      >
        Generate new random number
      </button>
    </div>
  );
}
