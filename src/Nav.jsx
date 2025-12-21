import "./App";

const nav = () => {
  return (
    <>
      <nav className="w-full h-24 bg-slate-200 flex items-center justify-center shadow-2xl font-inter">
        <div className="flex gap-16 text-   xl font-semibold list-none ">
          <a class="p-2 px-4 group" href="#">
            Home
            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
          <a class="p-2 px-4 group" href="#">
            About
            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
          <a class="p-2 px-4 group" href="#">
            Services
            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
          <a class="p-2 px-4 group" href="#">
            Contact
            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>
      </nav>
    </>
  );
};

export default nav;
