import { NavLink } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  NavigationListPrimary,
  NavigationListSecondary,
  NavigationListSupplementary,
  NavPrimaryArray,
  NavSecondaryArray,
  NavSupplementaryArray,
} from "../../Molecules/NavigationList";
import { SidebarIcon, LogoIcon } from "../../../assets";
import { ListItems } from "../../Atoms/ListItems";
import { Profile } from "../../Molecules/Profile";
import { SearchContainer } from "../../Molecules/SearchContainer";

export default function SideBar() {
  const navLogo = { label: "Alighna", to: "/", Icon: LogoIcon };
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const searchWrapRef = useRef(null);
  const searchableNav = useMemo(() => {
    return [...NavPrimaryArray, ...NavSecondaryArray, ...NavSupplementaryArray];
  }, []);
  const filteredNav = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
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
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const handleResultClick = () => {
    setIsSearching(false);
    setQuery("");
  };

  return (
    <div className="w-full h-full border-border-primary border-2 py-2 rounded-3xl justify-between flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col px-2 gap-2">
          <Profile />
          <SearchContainer
            query={query}
            setQuery={setQuery}
            setIsSearching={setIsSearching}
            searchWrapRef={searchWrapRef}
          />
        </div>
        <div className="flex flex-col px-2 gap-2">
          {isSearching && query.trim() ? (
            <div className="flex flex-col gap-2">
              {filteredNav.length ? (
                filteredNav.map((item) => (
                  <ListItems
                    key={item.to}
                    {...item}
                    onClick={handleResultClick}
                  />
                ))
              ) : (
                <div className="py-2 w-full items-center justify-center size-s-500 text-muted flex">
                  <h1 className="size-xs-600">No Results</h1>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavigationListPrimary />
              <div className="h-0.5 w-full bg-border-primary" />
              <NavigationListSecondary />
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col px-2 gap-2">
        {!isSearching && <NavigationListSupplementary />}
        <div className="flex flex-row px-2 pb-2 justify-between items-center">
          <NavLink to={navLogo.to} className="flex items-center">
            <navLogo.Icon className="text-current" />
          </NavLink>
          <SidebarIcon className="text-disabled cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
