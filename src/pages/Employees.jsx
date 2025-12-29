import Breadcrumbs from "../components/Breadcrumbs";
import PlusIcon from "../assets/icons/plus.svg?react";
import SearchIcon from "../assets/icons/search.svg?react";
import MiniIcon from "../assets/icons/mini.svg?react";
import MaxIcon from "../assets/icons/max.svg?react";
import FilterUpIcon from "../assets/icons/sortUp.svg?react";
import FilterDownIcon from "../assets/icons/sortDown.svg?react";
import EmployeeCard from "../components/EmployeeCard.jsx";
import andreas from "../assets/images/andreas.jpg";
import anton from "../assets/images/anton.jpg";
import anna from "../assets/images/anna.jpg";
import alva from "../assets/images/alva.jpeg";
import adam from "../assets/images/adam.jpg";
import amanda from "../assets/images/amanda.jpg";
import eric from "../assets/images/eric.jpg";
import sofia from "../assets/images/sofia.jpg";
import lucas from "../assets/images/lucas.jpg";

function Employees() {
  const employees = [
    {
      id: 1,
      firstName: "Andreas",
      lastName: "Lindström",
      title: "Senior System Designer",
      avatar: andreas,
      status: "suspended",
      department: "Engineering",
      type: "Contractor",
      mode: "Hybrid",
      location: { country: "Sweden", city: "Stockholm" },
      dates: { until: "2025-03-14" },
    },
    {
      id: 2,
      firstName: "Anton",
      lastName: "Sjöberg",
      title: "Frontend Engineer",
      avatar: anton,
      status: "probation",
      department: "Engineering",
      type: "Full-time",
      mode: "Remote",
      location: { country: "Sweden", city: "Gothenburg" },
      dates: { from: "2025-02-12", until: "2025-06-06" },
    },
    {
      id: 3,
      firstName: "Anna",
      lastName: "Bergström",
      title: "HR Assistant",
      avatar: anna,
      status: "terminated",
      department: "Human Resources",
      type: "Full-time",
      mode: "On-site",
      location: { country: "Sweden", city: "Stockholm" },
      dates: { asOf: "2022-11-04" },
    },
    {
      id: 4,
      firstName: "Alva",
      lastName: "Nyström",
      title: "Brand Designer",
      avatar: alva,
      status: "active",
      department: "Marketing",
      type: "Full-time",
      mode: "Remote",
      location: { country: "Germany", city: "Berlin" },
      dates: { since: "2023-01-24" },
    },
    {
      id: 5,
      firstName: "Adam",
      lastName: "Hansen",
      title: "Data Analyst",
      avatar: adam,
      status: "vacation",
      department: "Analytics",
      type: "Part-time",
      mode: "On-site",
      location: { country: "Denmark", city: "Copenhagen" },
      dates: { from: "2025-10-12", until: "2025-09-18" },
    },
    {
      id: 6,
      firstName: "Amanda",
      lastName: "Löfgren",
      title: "Product Designer",
      avatar: amanda,
      status: "active",
      department: "Design",
      type: "Full-time",
      mode: "On-site",
      location: { country: "Australia", city: "Brisbane" },
      dates: { since: "2026-04-18" },
    },
    {
      id: 7,
      firstName: "Erik",
      lastName: "Johansson",
      title: "Backend Engineer",
      avatar: eric,
      status: "active",
      department: "Engineering",
      type: "Full-time",
      mode: "Hybrid",
      location: { country: "Sweden", city: "Uppsala" },
      dates: { since: "2024-09-02" },
    },
    {
      id: 8,
      firstName: "Sofia",
      lastName: "Karlsson",
      title: "UX Writer",
      avatar: sofia,
      status: "notice",
      department: "Design",
      type: "Contractor",
      mode: "Remote",
      location: { country: "Finland", city: "Helsinki" },
      dates: { until: "2025-08-31" },
    },
    {
      id: 9,
      firstName: "Lucas",
      lastName: "Meyer",
      title: "Growth Manager",
      avatar: lucas,
      status: "active",
      department: "Marketing",
      type: "Full-time",
      mode: "Remote",
      location: { country: "Netherlands", city: "Amsterdam" },
      dates: { since: "2024-05-13" },
    },
  ];
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
            <button
              className="flex flex-row rounded-14 items-center hover:bg-bg-elevated-hover duration-150 transition-colors bg-bg-elevated-primary gap-1.5 py-2.5 pl-3 pr-4.5"
              type="button"
            >
              <MaxIcon className="h-4.5 w-4.5 text-muted " />
              <span className="text-primary size-s-600">Full</span>
            </button>
            <button
              className="flex flex-row rounded-14 items-center hover:bg-bg-elevated-hover duration-150 transition-colors bg-bg-elevated-primary gap-1.5 py-2.5 pl-3 pr-4.5"
              type="button"
            >
              <FilterDownIcon className="h-4.5 w-4.5 text-muted" />
              <span className="text-primary size-s-600">Sort</span>
            </button>
            <div className="flex flex-row py-2.5 pl-2.5 pr-4 group focus-within:ring-2 focus-within:ring-border-active transition-all duration-150 ease-in justify-center items-center rounded-14 bg-bg-base hover:bg-bg-elevated-primary gap-2.5">
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
      {/* employee cards */}
      <div className="flex-1 overflow-y-auto custom-scroll">
        <div className=" grid gap-4 items-start grid-cols-4 ">
          {employees.map((emp) => (
            <EmployeeCard
              className=""
              key={emp.id}
              {...emp}
              defaultExpanded={true}
              onClick={() => console.log("open employee", emp.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employees;
