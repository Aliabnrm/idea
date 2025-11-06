import Counter from "@/src/components/ui/Counter";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-900 gap-6">
      <div className="text-white text-2xl">Home Page</div>
      <Counter />
    </div>
  );
};

export default HomePage;
