import { ChevronsLeft, ChevronsRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

//import images
import userProfile from '../assets/user-profile.png';
import logoSm from '../assets/logo-sm.png';
import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';

export const Header = () => {
  const handleTopbarHamburgerIcon = () => {
    var windowSize = document.documentElement.clientWidth;
    let sidebarOverlay = document.getElementById('sidebar-overlay') as any;

    if (windowSize < 768) {
      document.body.classList.add('overflow-hidden');
      if (sidebarOverlay.classList.contains('hidden')) {
        sidebarOverlay.classList.remove('hidden');
        (document as Document | any)
          .querySelector('.app-menu')
          .classList.remove('hidden');
      } else {
        sidebarOverlay.classList.add('hidden');
        (document as Document | any)
          .querySelector('.app-menu')
          .classList.add('hidden');
      }
      // dispatch(changeLeftsidebarSizeType('lg'));
    } else {
      // dispatch(
      //   changeLeftsidebarSizeType(layoutSidebarSizeType === 'sm' ? 'lg' : 'sm'),
      // );
    }
  };

  return (
    <header
      id="page-topbar"
      className="ltr:md:left-vertical-menu group-data-[sidebar-size=md]:ltr:md:left-vertical-menu-md group-data-[sidebar-size=sm]:ltr:md:left-vertical-menu-sm group-data-[layout=horizontal]:ltr:left-0 fixed right-0 z-[1000] left-0 print:hidden group-data-[navbar=bordered]:m-4 group-data-[navbar=bordered]:[&.is-sticky]:mt-0 transition-all ease-linear duration-300 group-data-[navbar=hidden]:hidden group-data-[navbar=scroll]:absolute group/topbar group-data-[layout=horizontal]:z-[1004]"
    >
      <div className="layout-width">
        <div className="flex items-center px-4 mx-auto bg-topbar border-b-2 border-topbar group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:border-topbar-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:border-topbar-brand shadow-md h-header shadow-slate-200/50 group-data-[navbar=bordered]:rounded-md group-data-[navbar=bordered]:group-[.is-sticky]/topbar:rounded-t-none group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:border-zink-700 dark:shadow-none group-data-[topbar=dark]:group-[.is-sticky]/topbar:dark:shadow-zink-500 group-data-[topbar=dark]:group-[.is-sticky]/topbar:dark:shadow-md group-data-[navbar=bordered]:shadow-none group-data-[layout=horizontal]:group-data-[navbar=bordered]:rounded-b-none group-data-[layout=horizontal]:shadow-none group-data-[layout=horizontal]:dark:group-[.is-sticky]/topbar:shadow-none">
          <div className="flex items-center w-full group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl navbar-header group-data-[layout=horizontal]:ltr:xl:pr-3">
            <div className="items-center justify-center hidden px-5 text-center h-header group-data-[layout=horizontal]:md:flex group-data-[layout=horizontal]:ltr::pl-0">
              <Link to="/">
                <span className="hidden">
                  <img src={logoSm} alt="" className="h-6 mx-auto" />
                </span>
                <span className="group-data-[topbar=dark]:hidden group-data-[topbar=brand]:hidden">
                  <img src={logoDark} alt="" className="h-6 mx-auto" />
                </span>
              </Link>
              <Link
                to="/"
                className="hidden group-data-[topbar=dark]:block group-data-[topbar=brand]:block"
              >
                <span className="group-data-[topbar=dark]:hidden group-data-[topbar=brand]:hidden">
                  <img src={logoSm} alt="" className="h-6 mx-auto" />
                </span>
                <span className="group-data-[topbar=dark]:block group-data-[topbar=brand]:block">
                  <img src={logoLight} alt="" className="h-6 mx-auto" />
                </span>
              </Link>
            </div>

            <button
              onClick={handleTopbarHamburgerIcon}
              type="button"
              className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all size-[37.5px] duration-75 ease-linear bg-topbar rounded-md btn hover:bg-slate-100 group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:border-topbar-dark group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:border-topbar-brand group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:dark:border-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[layout=horizontal]:flex group-data-[layout=horizontal]:md:hidden hamburger-icon"
              id="topnav-hamburger-icon"
            >
              <ChevronsLeft className="w-5 h-5 group-data-[sidebar-size=sm]:hidden" />
              <ChevronsRight className="hidden w-5 h-5 group-data-[sidebar-size=sm]:block" />
            </button>

            <div className="relative hidden ltr:ml-3 lg:block group-data-[layout=horizontal]:hidden group-data-[layout=horizontal]:lg:block">
              <input
                type="text"
                className="py-2 pr-4 text-sm text-topbar-item bg-topbar border border-topbar-border rounded pl-8 placeholder:text-slate-400 form-control focus-visible:outline-0 min-w-[300px] focus:border-blue-400 group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:border-topbar-border-dark group-data-[topbar=dark]:placeholder:text-slate-500 group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:border-topbar-border-brand group-data-[topbar=brand]:placeholder:text-blue-300 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:border-zink-500 group-data-[topbar=dark]:dark:text-zink-100"
                placeholder="Search for ..."
                autoComplete="off"
              />
              <Search className="inline-block size-4 absolute left-2.5 top-2.5 text-topbar-item fill-slate-100 group-data-[topbar=dark]:fill-topbar-item-bg-hover-dark group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=brand]:fill-topbar-item-bg-hover-brand group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:text-zink-200 group-data-[topbar=dark]:dark:fill-zink-600" />
            </div>

            <div className="flex gap-3 ms-auto">
              <div className="relative flex items-center h-header">
                <button
                  className="inline-block p-0 transition-all duration-200 ease-linear bg-topbar rounded-full text-topbar-item dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                >
                  <div className="bg-pink-100 rounded-full">
                    <img
                      src={userProfile}
                      alt=""
                      className="size-[37.5px] rounded-full"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
