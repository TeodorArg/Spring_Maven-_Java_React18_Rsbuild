import { Outlet } from 'react-router-dom';
import { Header, Sidebar, Footer } from '@/widgets';
import { Toaster } from '@/shared/index';

export const Layout = () => {
  return (
    <div className="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative">
      <Sidebar />
      <Header />
      <div className="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm">
        <main className="group-data-[sidebar-size=lg]:md:ml-vertical-menu group-data-[sidebar-size=md]:ml-vertical-menu-md group-data-[sidebar-size=sm]:ml-vertical-menu-sm pt-[calc(theme('spacing.header')_*_1)] pb-[calc(theme('spacing.header')_*_0.8)] px-4 group-data-[navbar=bordered]:pt-[calc(theme('spacing.header')_*_1.3)] group-data-[navbar=hidden]:pt-0">
          <div className="max-w-boxed mx-auto">
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
        </main>
        <Toaster />
        <Footer />
      </div>
    </div>
  );
};
