"use client";
import { Button } from "antd";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-primary-soft gap-6 px-6 sticky top-0 z-50">
      <div className="flex w-full flex-col mt-20 px-4">
        <span className="text-5xl font-black text-gray-700 text-center leading-tight">
          خوش آمدید به
        </span>
        <span className="text-5xl text-gradient-primary text-center">جیم</span>
        <span className="m-auto text-[20px] w-[200px] text-center mt-4 font-medium text-gray-400">
          اپلیکیشن هوشمند فیتنس که برنامه تمرینی و تغذیه‌ای شخصی‌سازی شده برای
          شما طراحی می‌کند
        </span>
        <Button className="mt-10 w-full h-[52px]! bg-gradient-primary text-white! text-[24px]! font-semibold border-none! rounded-xl! px-6 py-5">
          شروع رایگان
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
