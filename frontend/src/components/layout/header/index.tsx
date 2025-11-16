import { Dumbbell } from "lucide-react";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between border-b-gray-200 gap-4 h-[60px] text-gray-400 font-bold test-[24px] bg-white shadow-md pr-5">
      <div className="flex flex-row items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
          <Dumbbell
            width={24}
            height={24}
            className="cursor-pointer text-white"
          />
        </div>
        <span className="text-[24px] font-bold text-gradient-primary">جیم</span>
      </div>
      {/* <Menu
        width={30}
        height={30}
        className="cursor-pointer text-gradient-primary"
      /> */}
    </div>
  );
};

export default Header;
