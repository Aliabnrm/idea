"use client";

import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

type CounterState = {
  count: number;
};

type CounterActions = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterState & CounterActions>()(
  devtools(
    subscribeWithSelector(
      persist(
        (set) => ({
          count: 0,
          increment: () => set((state) => ({ count: state.count + 1 })),
          decrement: () => set((state) => ({ count: state.count - 1 })),
          reset: () => set({ count: 0 }),
        }),
        {
          name: "counter-store",
          version: 1,
          migrate: (persistedState: unknown) => {
            const state = (persistedState as Partial<CounterState>) || {};
            return { count: state.count ?? 0 };
          },
          partialize: (state) => ({ count: state.count }),
          storage: createJSONStorage(() => {
            if (typeof window !== "undefined") return localStorage;
            return undefined as unknown as Storage;
          }),
        }
      )
    ),
    { name: "counter-store" }
  )
);
