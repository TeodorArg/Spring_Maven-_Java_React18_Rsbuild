import React from 'react';
import { Link } from 'react-router-dom';
import { MenuData } from '../const/MenuData';

//import imageså
import logoSm from '../assets/logo-sm.png';
import logoDark from '../assets/logo-dark.png';

export const Sidebar = () => {
  return (
    <>
      <div
        className={` app-menu w-vertical-menu bg-vertical-menu border-r border-vertical-menu-border fixed bottom-0 top-0 z-[1003] transition-all duration-75 ease-linear group-data-[sidebar-size=md]:w-vertical-menu-md group-data-[sidebar-size=sm]:w-vertical-menu-sm group-data-[sidebar-size=sm]:pt-header group-data-[sidebar=brand]:bg-vertical-menu-brand group-data-[sidebar=brand]:border-vertical-menu-brand md:block print:hidden group-data-[sidebar-size=sm]:absolute hidden`}
      >
        <div className="flex items-center justify-center px-5 text-center h-header group-data-[sidebar-size=sm]:fixed group-data-[sidebar-size=sm]:top-0 group-data-[sidebar-size=sm]:bg-vertical-menu group-data-[sidebar-size=sm]:group-data-[sidebar=brand]:bg-vertical-menu-brand group-data-[sidebar-size=sm]:z-10 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.vertical-menu-sm')_-_1px)]">
          <Link to="/">
            <span className="hidden group-data-[sidebar-size=sm]:block">
              <img src={logoSm} alt="" className="h-6 mx-auto" />
            </span>
            <span className="group-data-[sidebar-size=sm]:hidden">
              <img src={logoDark} alt="" className="h-6 mx-auto" />
            </span>
          </Link>
          <button
            type="button"
            className="hidden p-0 float-end"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>

        <div
          id="scrollbar"
          className="group-data-[sidebar-size=md]:max-h-[calc(100vh_-_theme('spacing.header')_*_1.2)] group-data-[sidebar-size=lg]:max-h-[calc(100vh_-_theme('spacing.header')_*_1.2)]"
        >
          <div>
            <ul id="navbar-nav">
              {MenuData &&
                MenuData.map((item: any) =>
                  item['isTitle'] ? (
                    <li
                      key={item.id}
                      className="px-4 py-1 text-vertical-menu-item group-data-[sidebar=brand]:text-vertical-menu-item-brand uppercase font-medium text-[11px] cursor-default tracking-wider group-data-[sidebar-size=sm]:hidden inline-block group-data-[sidebar-size=md]:block group-data-[sidebar-size=md]:underline group-data-[sidebar-size=md]:text-center"
                    >
                      <span data-key="t-menu">{item.label}</span>
                    </li>
                  ) : (
                    <li key={item.id}>
                      <Link
                        className="relative flex items-center pl-3 pr-5 mx-3 my-1 group/menu-link text-vertical-menu-item-font-size font-normal transition-all duration-75 ease-linear rounded-md py-2.5 text-vertical-menu-item hover:text-vertical-menu-item-hover hover:bg-vertical-menu-item-bg-hover [&.active]:text-vertical-menu-item-active [&.active]:bg-vertical-menu-item-bg-active group-data-[sidebar=brand]:text-vertical-menu-item-brand group-data-[sidebar=brand]:hover:text-vertical-menu-item-hover-brand group-data-[sidebar=brand]:hover:bg-vertical-menu-item-bg-hover-brand group-data-[sidebar=brand]:[&.active]:bg-vertical-menu-item-bg-active-brand group-data-[sidebar=brand]:[&.active]:text-vertical-menu-item-active-brand group-data-[sidebar-size=md]:block group-data-[sidebar-size=md]:text-center group-data-[sidebar-size=sm]:group-hover/sm:w-[calc(theme('spacing.vertical-menu-sm')_*_3.63)] group-data-[sidebar-size=sm]:group-hover/sm:bg-vertical-menu group-data-[sidebar-size=sm]:group-data-[sidebar=brand]:group-hover/sm:bg-vertical-menu-brand group-data-[sidebar-size=sm]:my-0 group-data-[sidebar-size=sm]:rounded-b-none [&.dropdown-button]:before:absolute [&.dropdown-button]:[&.show]:before:content-['\ea4e'] [&.dropdown-button]:before:content-['\ea6e'] [&.dropdown-button]:before:font-remix [&.dropdown-button]:before:right-2 [&.dropdown-button]:before:text-16 group-data-[sidebar-size=sm]:[&.dropdown-button]:before:hidden group-data-[sidebar-size=md]:[&.dropdown-button]:before:hidden"
                        to={item.link}
                      >
                        <span className="min-w-[1.85rem] group-data-[sidebar-size=sm]:h-[1.75rem] inline-block text-start text-[16px] group-data-[sidebar-size=sm]:flex group-data-[sidebar-size=sm]:items-center">
                          {item.icon &&
                            React.cloneElement(item.icon, {
                              className:
                                'h-5 group-data-[sidebar-size=sm]:h-5 group-data-[sidebar-size=sm]:w-5 transition group-hover/menu-link:animate-icons fill-slate-100 group-hover/menu-link:fill-blue-200',
                            })}
                        </span>
                        <span
                          className="group-data-[sidebar-size=sm]:pl-10 align-middle group-data-[sidebar-size=sm]:group-hover/sm:block group-data-[sidebar-size=sm]:hidden"
                          data-key="t-chat"
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ),
                )}
            </ul>
          </div>
        </div>
      </div>

      <div
        id="sidebar-overlay"
        className="absolute inset-0 z-[1002] bg-slate-500/30 hidden"
      ></div>
    </>
  );
};
