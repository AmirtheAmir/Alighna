import SwitchIcon from "../assets/icons/switch.svg?react";
import SearchIcon from "../assets/icons/search.svg?react";
import CommandIcon from "../assets/icons/command.svg?react";
import UsersIcon from "../assets/icons/users.svg?react";
import dashboardIcon from "../assets/icons/dashboard.svg?react";
import documentsIcon from "../assets/icons/documents.svg?react";
import projectsIcon from "../assets/icons/projects.svg?react";
import analyticsIcon from "../assets/icons/analytics.svg?react";
import attendanceIcon from "../assets/icons/attendance.svg?react";
import SettingsIcon from "../assets/icons/settings.svg?react";
import SidebarIcon from "../assets/icons/sidebar.svg?react";
import HelpIcon from "../assets/icons/help.svg?react";
import InboxIcon from "../assets/icons/inbox.svg?react";
import LogoIcon from "../assets/icons/logo.svg?react";

import ameliaImg from "../assets/images/amelia.jpg";

import { NavLink } from "react-router-dom";
import { useEffect, useState, useRef, useMemo } from "react";

function Sidebar() {
  const navTop = [
    { label: "Dashboard", to: "/dashboard", Icon: dashboardIcon },
    { label: "Employees", to: "/employees", Icon: UsersIcon },
    { label: "Projects", to: "/projects", Icon: projectsIcon },
    { label: "Attendance", to: "/attendance", Icon: attendanceIcon },
  ];

  const navBottom = [
    { label: "Documents", to: "/documents", Icon: documentsIcon },
    { label: "Analytics", to: "/analytics", Icon: analyticsIcon },
  ];

  const navSupplement = [
    { label: "Inbox", to: "/inbox", Icon: InboxIcon },
    { label: "Settings", to: "/settings", Icon: SettingsIcon },
    { label: "Help", to: "/help", Icon: HelpIcon },
  ];

  const navLogo = { label: "Alighna", to: "/", Icon: LogoIcon };

  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const searchWrapRef = useRef(null);

  const searchableNav = useMemo(() => {
    return [...navTop, ...navBottom];
  }, [navTop, navBottom]);

  const filteredNav = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q === "") return [];

    return searchableNav.filter((item) => item.label.toLowerCase().includes(q));
  }, [query, searchableNav]);

  useEffect(() => {
    const onMouseDown = (e) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target)) {
        setIsSearching(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div className="w-full h-full border-br-base border-2 py-2 rounded-3xl justify-between flex flex-col">
      {/* top container */}
      <div className="flex flex-col gap-4">
        {/* profile account & search container*/}
        <div className="flex flex-col px-2 gap-2">
          {/* profile account & swith button container */}
          <div className="flex flex-row py-1 pl-1 pr-3 rounded-2xl bg-background-surface hover:bg-background-surface-hover transition-all duration-200 ease-in">
            {/* profile account */}
            <div className="flex flex-row gap-2  ">
              <img
                src={ameliaImg}
                alt="Amelia Nowak"
                className="h-11 w-11 rounded-xl"
              />
              <div className="flex flex-col  justify-center ">
                <p className=" text-xl text-tx-primary txt-m-600">
                  Amelia Nowak
                </p>
                <p className="text-m text-tx-secondary txt-s-500">
                  Project Manager
                </p>
              </div>
            </div>
            {/* switch button */}
            <button
              type="button"
              aria-label="Profile options"
              className="text-tx-disabled ml-auto "
            >
              <SwitchIcon className="h-5 w-5 shrink-0" />
            </button>
          </div>
          {/* search container */}
          <div className="flex flex-row py-3 pl-3 pr-4.5 group focus-within:ring-2 focus-within:ring-br-filled transition-all duration-150 ease-in justify-center items-center rounded-xl2 bg-background-surface hover:bg-background-surface-hover">
            {/* search icon & text */}
            <div
              ref={searchWrapRef}
              className="flex flex-row gap-3 justify-center items-center "
            >
              <SearchIcon className="text-tx-disabled group-focus-within:text-tx-primary h-5 w-5 shrink-0" />
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsSearching(true);
                }}
                onFocus={() => setIsSearching(true)}
                className="w-full bg-transparent text-tx-primary txt-s-600 placeholder:txt-s-500 placeholder:text-tx-disabled outline-none"
              />
            </div>
            {/* right shortcut */}
            <div className="flex flex-row gap-0.5 ml-auto">
              <CommandIcon className=" text-tx-disabled" />
              <span className="txt-s-500 text-tx-disabled">+</span>
              <span className="txt-s-500 text-tx-disabled">F</span>
            </div>
          </div>
        </div>
        {/* list items */}
        <div className="flex flex-col px-2 gap-2">
          {isSearching && query.trim() ? (
            //  SEARCH MODE: show only filtered results
            <div className="flex flex-col gap-1">
              {filteredNav.length > 0 ? (
                filteredNav.map(({ label, to, Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => {
                      // After user chooses a result, we reset search UI.
                      // Why? Because they navigated to a page, so sidebar should go back to normal.
                      setIsSearching(false);
                      setQuery("");
                    }}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl2 p-3 transition duration-150 ease-in 
              ${
                isActive
                  ? "bg-background-surface ring-2 ring-br-clicked text-tx-primary"
                  : "text-tx-disabled hover:bg-background-surface-hover hover:text-tx-primary"
              }`
                    }
                  >
                    <Icon className="text-current" />
                    <span className="txt-s-500">{label}</span>
                  </NavLink>
                ))
              ) : (
                <div className="px-3 py-2 txt-s-500 text-tx-disabled">
                  No results
                </div>
              )}
            </div>
          ) : (
            // DEFAULT MODE: your normal nav sections
            <>
              <div className="flex flex-col gap-1">
                {navTop.map(({ label, to, Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl2 p-3 transition duration-150 ease-in 
              ${
                isActive
                  ? "bg-background-surface ring-2 ring-br-clicked text-tx-primary"
                  : "text-tx-disabled hover:bg-background-surface-hover hover:text-tx-primary"
              }`
                    }
                  >
                    <Icon className="text-current" />
                    <span className="txt-s-500">{label}</span>
                  </NavLink>
                ))}
              </div>
              <div className="h-0.5 w-full bg-br-base" />
              <div className="flex flex-col gap-1">
                {navBottom.map(({ label, to, Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl2 p-3 transition duration-150 ease-in 
              ${
                isActive
                  ? "bg-background-surface ring-2 ring-br-clicked text-tx-primary"
                  : "text-tx-disabled hover:bg-background-surface-hover hover:text-tx-primary"
              }`
                    }
                  >
                    <Icon className="text-current" />
                    <span className="txt-s-500">{label}</span>
                  </NavLink>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {/* bottom container */}
      <div className="flex flex-col px-2 gap-2">
        <div className="flex flex-col gap-1">
          {navSupplement.map(({ label, to, Icon }) => (
            <NavLink
              key={to}
              to={to}
              // end={to === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl2 p-3 transition duration-150 ease-in 
         ${
           isActive
             ? "bg-background-surface ring-2 ring-br-clicked text-tx-primary"
             : "text-tx-disabled hover:bg-background-surface-hover hover:text-tx-primary"
         }`
              }
            >
              <Icon className="text-current" />
              <span className="txt-s-500">{label}</span>
            </NavLink>
          ))}
        </div>
        {/* logo container */}
        <div className="flex flex-row px-2 pb-2 justify-between items-center ">
          <NavLink
            to={navLogo.to}
            // end={to === "/"}
            className="
              flex items-center gap-2"
          >
            <navLogo.Icon className="text-current" />
            <span className="text-primary logo-text">{navLogo.label}</span>
          </NavLink>
          <SidebarIcon className="text-tx-disabled cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
