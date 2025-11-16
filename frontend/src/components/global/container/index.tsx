export default function AppContainer({ children }: { children: React.ReactNode }) {
    return (
      <div className="w-full max-w-[768px] mx-auto">
        {children}
      </div>
    );
  }
  