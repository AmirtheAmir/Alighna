import { SearchIcon, CommandIcon } from "../../../assets/index";

export default function SearchContainer({
  query,
  setQuery,
  setIsSearching,
  searchWrapRef,
}) {
  return (
    <div
      ref={searchWrapRef}
      className="flex flex-row py-3 pl-3 pr-4.5 group focus-within:ring-2 focus-within:ring-border-active transition-all duration-300 ease-in justify-center items-center rounded-14 bg-bg-surface-primary hover:bg-bg-surface-hover"
    >
      <div className="flex flex-row gap-3 justify-center items-center w-full">
        <SearchIcon className="text-disabled group-focus-within:text-primary h-4.5 w-4.5 shrink-0" />
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsSearching(true);
          }}
          onFocus={() => setIsSearching(true)}
          className="w-full bg-transparent text-primary size-s-600 placeholder:size-s-500 placeholder:text-disabled outline-none"
        />
      </div>

      <div className="flex flex-row items-center gap-0.5 ml-auto">
        <CommandIcon className="text-disabled" />
        <span className="size-s-500 text-disabled">+</span>
        <span className="size-s-500 text-disabled">K</span>
      </div>
    </div>
  );
}
