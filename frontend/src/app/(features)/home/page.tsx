"use client";
import { useState } from "react";
import Counter from "@/src/components/ui/Counter";
import DeleteModal from "@/src/components/global/modal";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-900 gap-6">
      <div className="text-white text-2xl">Home Page</div>
      <Counter />

      <button
        className="w-[80px] h-[40px] bg-gray-600 text-black"
        onClick={() => setOpen(true)}
      >
        open modal
      </button>

      <DeleteModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default HomePage;
