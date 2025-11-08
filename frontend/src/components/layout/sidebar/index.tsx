const listItems = [
  { id: 1, label: "Project", icon: "" },
  { id: 2, label: "Payment", icon: "" },
];
const Sidebar = () => {
  return (
    <div className="flex w-[250px] flex-col gap-4 bg-[#0F172A] py-6 px-8 h-screen">
      {listItems?.map((item) => (
        <div
          key={item?.id}
          className="flex flex-row gap-2 items-center justify-start"
        >
          <span>{item?.icon}</span>
          <span className="text-gray-400 font-medium cursor-pointer hover:text-[#415480]">
            {item?.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
