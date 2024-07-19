import { useEffect } from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

//import images
import userProfile from '../assets/user-profile.png';

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
      document.documentElement.setAttribute('data-sidebar-size', 'lg');
    } else {
      const currentSidebarSize =
        document.documentElement.getAttribute('data-sidebar-size');
      const newSidebarSize = currentSidebarSize === 'sm' ? 'lg' : 'sm';
      document.documentElement.setAttribute(
        'data-sidebar-size',
        newSidebarSize,
      );
    }
  };

  useEffect(() => {
    const handleResizeLayout = () => {
      var windowSize = document.documentElement.clientWidth;

      if (windowSize < 768) {
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
      } else if (windowSize <= 1024) {
        document.documentElement.setAttribute('data-sidebar-size', 'sm');
      } else {
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
      }
    };

    const outerSideElement = () => {
      var windowSize = document.documentElement.clientWidth;
      var sidebarOverlay = document.getElementById('sidebar-overlay') as any;
      if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
          if (!sidebarOverlay.classList.contains('hidden')) {
            if (windowSize <= 768) {
              document?.querySelector('.app-menu')?.classList.add('hidden');
              document.body.classList.remove('overflow-hidden');
              sidebarOverlay.classList.add('hidden');
            } else {
              document.documentElement.setAttribute('data-sidebar-size', 'lg');
            }
          }
        });
      }
    };

    window.addEventListener('resize', handleResizeLayout);
    window.addEventListener('click', outerSideElement);
    handleResizeLayout();

    return () => {
      window.removeEventListener('click', outerSideElement);
      window.removeEventListener('resize', handleResizeLayout);
    };
  }, []);

  return (
    <header
      id="page-topbar"
      className="md:left-vertical-menu group-data-[sidebar-size=sm]:md:left-vertical-menu-sm fixed right-0 z-[1000] left-0 print:hidden m-4 transition-all ease-linear duration-300 group-data-[navbar=hidden]:hidden"
    >
      <div className="layout-width">
        <div className="flex items-center px-4 mx-auto bg-topbar border-b-2 border-topbar shadow-md h-header shadow-slate-200/50 rounded-md">
          <div className="flex items-center w-full navbar-header">
            <button
              onClick={handleTopbarHamburgerIcon}
              type="button"
              className="inline-flex relative justify-center items-center p-0 text-topbar-item transition-all size-[37.5px] duration-75 ease-linear bg-topbar rounded-md btn hover:bg-slate-100 hamburger-icon"
              id="topnav-hamburger-icon"
            >
              <ChevronsLeft className="w-5 h-5 group-data-[sidebar-size=sm]:hidden" />
              <ChevronsRight className="hidden w-5 h-5 group-data-[sidebar-size=sm]:block" />
            </button>

            <div className="flex gap-3 ms-auto">
              <div className="relative flex items-center h-header">
                <button
                  className="inline-block p-0 transition-all duration-200 ease-linear bg-topbar rounded-full text-topbar-item dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover"
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
