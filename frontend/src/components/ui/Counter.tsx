"use client";

import { useCounterStore } from "@/src/store";
import { useShallow } from "zustand/react/shallow";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore(
    useShallow((s) => ({
      count: s.count,
      increment: s.increment,
      decrement: s.decrement,
      reset: s.reset,
    }))
  );

  return (
    <div className="flex flex-col items-center gap-4 p-4 rounded-md bg-white/10 text-white">
      <div className="text-xl font-medium">Count: {count}</div>
      <div className="flex items-center gap-2">
        <button
          className="px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-700"
          onClick={increment}
        >
          +1
        </button>
        <button
          className="px-3 py-1 rounded bg-rose-600 hover:bg-rose-700"
          onClick={decrement}
        >
          -1
        </button>
        <button
          className="px-3 py-1 rounded bg-slate-600 hover:bg-slate-700"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
