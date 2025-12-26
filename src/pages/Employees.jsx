import Breadcrumbs from "../components/Breadcrumbs";
import PlusIcon from "../assets/icons/plus.svg?react";
import SearchIcon from "../assets/icons/search.svg?react";
import MiniIcon from "../assets/icons/mini.svg?react";
import MaxIcon from "../assets/icons/max.svg?react";
import FilterUpIcon from "../assets/icons/sortUp.svg?react";
import FilterDownIcon from "../assets/icons/sortDown.svg?react";

function Employees() {
  return (
    <div className="h-full flex flex-col bg-bg-surface-primary gap-6 p-6 rounded-3xl">
      {/* employee page url */}
      <div>
        {/* <RightIcon className="text-disabled" /> */}
        <Breadcrumbs />
      </div>
      {/* title text */}
      <div className="flex flex-row w-full justify-between items-center ">
        <div className="flex flex-col gap-1 ">
          <h1 className="size-2xl-600 text-primary ">Employees</h1>
          <p className="text-secondary size-m-400 w-full">
            Browse and manage all employees, monitor headcount, and refine the
            list by department and status.
          </p>
        </div>
        {/* Action button */}
        <button
          type="button"
          className=" flex items-center flex-row gap-1.5 rounded-14 pl-4 pr-4.5 py-2.5 bg-brand-primary text-unchanged size-s-600 transition duration-150 hover:ring-2 hover:ring-brand-primary  hover:text-brand-primary hover:bg-transparent"
        >
          <PlusIcon className="text-current" />
          Add New
        </button>
      </div>
      {/* filter bar */}
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          {/* Left: filter tabs */}
          <div className="flex items-center gap-2 p-1 bg-bg-base rounded-14">
            <button
              className="hover:text-primary hover:bg-bg-elevated-primary rounded-xl text-secondary transition-colors duration-150 px-4.5 py-1.5 size-s-600"
              type="button"
            >
              All
            </button>
            <button
              className="hover:text-primary hover:bg-bg-elevated-primary rounded-xl text-secondary transition-colors duration-150 px-4.5 py-1.5 size-s-600"
              type="button"
            >
              Status
            </button>
            <button
              className="hover:text-primary hover:bg-bg-elevated-primary rounded-xl text-secondary transition-colors duration-150 px-4.5 py-1.5 size-s-600"
              type="button"
            >
              Type
            </button>
            <button
              className="hover:text-primary hover:bg-bg-elevated-primary rounded-xl text-secondary transition-colors duration-150 px-4.5 py-1.5 size-s-600"
              type="button"
            >
              Department
            </button>
          </div>
          {/* Right: controls */}
          <div className="flex items-center gap-4">
            <button className="flex flex-row rounded-14 items-center hover:bg-bg-elevated-hover duration-150 transition-colors bg-bg-elevated-primary gap-1.5 py-2.5 pl-3 pr-4.5" type="button">
              <MaxIcon className="h-4.5 w-4.5 text-secondary" />
              <span className="text-primary size-s-600">Full</span>
            </button>
            <button className="flex flex-row rounded-14 items-center hover:bg-bg-elevated-hover duration-150 transition-colors bg-bg-elevated-primary gap-1.5 py-2.5 pl-3 pr-4.5" type="button">
              <FilterDownIcon className="h-4.5 w-4.5 text-secondary" />
              <span className="text-primary size-s-600">Sort</span>
            </button>
            <div
              className="flex flex-row py-2.5 pl-2.5 pr-4 group focus-within:ring-2 focus-within:ring-border-active transition-all duration-150 ease-in justify-center items-center rounded-14 bg-bg-base hover:bg-bg-elevated-primary gap-2.5"
            >
              <SearchIcon className="text-disabled group-focus-within:text-primary shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="w-full text-primary size-s-600 placeholder:size-s-500 placeholder:text-muted outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employees;
