export const Footer = () => {
  return (
    <footer className="md:left-vertical-menu group-data-[sidebar-size=sm]:md:left-vertical-menu-sm  absolute right-0 bottom-0 px-4 h-14 left-0 border-t py-3 flex items-center">
      <div className="w-full">
        <div className="grid items-center grid-cols-1 text-center lg:grid-cols-2 text-slate-400  lg:text-left">
          <div>{new Date().getFullYear()} © Tailwick.</div>
          <div className="hidden lg:block">
            <div className="text-right">TeodorArg</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
