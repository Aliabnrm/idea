import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[110px] border border-t-gray-200 bg-gray-50">
      <div className="flex items-center justify-center gap-2 text-gray-500">
        <span>ساخته شده با</span>
        <Heart className="text-red-500" />
        <span>برای سلامتی شما</span>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        © {new Date().getFullYear()} جیم - اپلیکیشن فیتنس هوشمند
      </div>
    </div>
  );
};

export default Footer;
