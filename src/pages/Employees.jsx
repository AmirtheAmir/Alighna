import Breadcrumbs from "../components/Breadcrumbs";
import PlusIcon from "../assets/icons/plus.svg?react";
import SearchIcon from "../assets/icons/search.svg?react";
import MiniIcon from "../assets/icons/mini.svg?react";
import MaxIcon from "../assets/icons/max.svg?react";
import EmployeeCard from "../components/EmployeeCard.jsx";
import { useState, useMemo } from "react";
// import andreas from "../assets/images/andreas.jpg";
// import anton from "../assets/images/anton.jpg";
// import anna from "../assets/images/anna.jpg";
// import alva from "../assets/images/alva.jpeg";
// import adam from "../assets/images/adam.jpg";
// import amanda from "../assets/images/amanda.jpg";
// import eric from "../assets/images/eric.jpg";
// import sofia from "../assets/images/sofia.jpg";
// import lucas from "../assets/images/lucas.jpg";

function Employees() {
  const [compact, setCompact] = useState(false);
  const toggleCompact = () => setCompact((v) => !v);

  const [searchText, setSearchText] = useState("");

  const [activeTab, setActiveTab] = useState("all");

  const employees = [
    {
      id: 1,
      firstName: "Andreas",
      lastName: "Lindström",
      title: "Senior System Designer",
      avatar: "AL",
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
      avatar: "AS",
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
      avatar: "AB",
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
      avatar: "AN",
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
      avatar: "AH",
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
      avatar: "AL",
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
      avatar: "EJ",
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
      avatar: "SK",
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
      avatar: "LM",
      status: "active",
      department: "Marketing",
      type: "Full-time",
      mode: "Remote",
      location: { country: "Netherlands", city: "Amsterdam" },
      dates: { since: "2024-05-13" },
    },
  ];

  const filteredEmployees = employees.filter((emp) => {
    const q = searchText.trim().toLowerCase();
    if (!q) return true; // no search => show all

    const fullName = `${emp.firstName ?? ""} ${
      emp.lastName ?? ""
    }`.toLowerCase();
    return fullName.includes(q);
  });

  const STATUS_GROUPS = [
    { key: "working", title: "Working", dot: "bg-green-primary" },
    { key: "vacation", title: "On Vacation", dot: "bg-cyan-primary" },
    { key: "leave", title: "On Leave", dot: "bg-yellow-primary" },
    { key: "terminated", title: "Terminated", dot: "bg-red-primary" },
  ];

  function getGroupKey(status) {
    const s = (status ?? "").toLowerCase();

    if (s === "vacation") return "vacation";
    if (s === "terminated") return "terminated";
    // treat these as “leave”
    if (s === "sick" || s === "suspended" || s === "notice") return "leave";
    // active + probation = working (your choice)
    return "working";
  }

  const groupedByStatus = filteredEmployees.reduce((acc, emp) => {
    const groupKey = getGroupKey(emp.status);
    (acc[groupKey] ||= []).push(emp);
    return acc;
  }, {});

  const TYPE_GROUPS = [
    { key: "full-time", title: "Full-time", dot: "bg-green-primary" },
    { key: "part-time", title: "Part-time", dot: "bg-cyan-primary" },
    { key: "contractor", title: "Contractor", dot: "bg-yellow-primary" },
  ];

  function getTypeKey(type) {
    const t = (type ?? "").toLowerCase().trim();
    if (t.includes("part")) return "part-time";
    if (t.includes("contract")) return "contractor";
    return "full-time";
  }

  const groupedByType = useMemo(() => {
    return filteredEmployees.reduce((acc, emp) => {
      const key = getTypeKey(emp.type);
      (acc[key] ||= []).push(emp);
      return acc;
    }, {});
  }, [filteredEmployees]);

  const DEPARTMENT_GROUPS = [
    { key: "Design", title: "Design", dot: "bg-cyan-primary" },
    { key: "Engineering", title: "Engineering", dot: "bg-green-primary" },
    { key: "Marketing", title: "Marketing", dot: "bg-yellow-primary" },
    { key: "Analytics", title: "Analytics", dot: "bg-green-primary" },
    { key: "Human Resources", title: "Human Resources", dot: "bg-red-primary" },
  ];

  function getDepartmentKey(dept) {
    const d = (dept ?? "").trim();
    // If department is unknown or new, you can return "Other"
    return d || "Other";
  }

  const groupedByDepartment = useMemo(() => {
    return filteredEmployees.reduce((acc, emp) => {
      const key = getDepartmentKey(emp.department);
      (acc[key] ||= []).push(emp);
      return acc;
    }, {});
  }, [filteredEmployees]);

  function ColumnView({ groups, groupedData, variant = "status" }) {
    return (
      <div className="grid grid-cols-3 gap-2 overflow-x-auto items-start">
        {groups.map((group) => {
          const items = groupedData[group.key] ?? [];
          console.log("TAB:", variant, "GROUP:", group.key, "COUNT:", items.length);

          return (
            <div
              key={group.key}
              className="rounded-3xl bg-bg-base p-2 flex flex-col gap-4"
            >
              {variant === "status" ? (
                // ✅ STATUS: dot + title + count
                <div className="flex items-center gap-2 px-4 py-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${group.dot}`} />
                  <span className="size-m-600 text-disabled">{group.title}</span>
                  <span className="size-m-800 text-disabled">
                    {items.length}
                  </span>
                </div>
              ) : variant === "type" ? (
                // ✅ TYPE: bordered pill title only (no dot, no count)
                <div className="gap-2 flex flex-row items-center ">
                  <span className="inline-flex items-center rounded-full ring ring-border-primary px-4.5 py-2 size-m-600 text-disabled">
                    {group.title}
                  </span>
                  <span className="size-m-600 text-disabled">{items.length}</span>
                </div>
              ) : (
                // ✅ DEPARTMENT: simple label only (no dot, no count)
                <div className="px-4 py-2 gap-2 flex flex-row">
                  <span className="size-m-600 text-disabled">{group.title}</span>
                  <span className="size-m-600 text-disabled">{items.length}</span>
                </div>
              )}
              <div className="flex flex-col shrink-0 gap-4">
                {items.length === 0 ? (
                  <div className="text-muted size-s-500 py-2">No employees</div>
                ) : (
                  items.map((emp) => (
                    <EmployeeCard key={emp.id} {...emp} compact={compact} view={activeTab}/>
                  ))
                )}
              </div>
              <button
                type="button"
                className="px-4 py-2 flex items-center gap-2 transition duration-300 text-muted hover:text-primary size-s-600"
              >
                <span className="text-lg leading-none">+</span> Add New
              </button>
            </div>
          );
        })}
      </div>
    );
  }
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
          className=" flex items-center flex-row gap-1.5 rounded-14 pl-4 pr-4.5 py-2.5 bg-brand-primary text-unchanged size-s-600 transition duration-300 hover:ring-2 hover:ring-brand-primary  hover:text-brand-primary hover:bg-transparent"
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
              type="button"
              onClick={() => setActiveTab("all")}
              className={`rounded-xl px-4.5 py-1.5 size-s-600 transition-colors duration-300
    ${
      activeTab === "all"
        ? "bg-bg-elevated-primary text-primary"
        : "text-secondary hover:text-primary hover:bg-bg-elevated-primary"
    }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("status")}
              className={`rounded-xl px-4.5 py-1.5 size-s-600 transition-colors duration-300
    ${
      activeTab === "status"
        ? "bg-bg-elevated-primary text-primary"
        : "text-secondary hover:text-primary hover:bg-bg-elevated-primary"
    }`}
            >
              Status
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("type")}
              className={`rounded-xl px-4.5 py-1.5 size-s-600 transition-colors duration-300
                ${
                  activeTab === "type"
                    ? "bg-bg-elevated-primary text-primary"
                    : "text-secondary hover:text-primary hover:bg-bg-elevated-primary"
                }`}
            >
              Type
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("department")}
              className={`rounded-xl px-4.5 py-1.5 size-s-600 transition-colors duration-300
                ${
                  activeTab === "department"
                    ? "bg-bg-elevated-primary text-primary"
                    : "text-secondary hover:text-primary hover:bg-bg-elevated-primary"
                }`}
            >
              Department
            </button>
          </div>
          {/* Right: controls */}
          <div className="flex items-center gap-4">
            <button
              className="flex flex-row rounded-14 items-center hover:bg-bg-elevated-hover duration-300 transition-colors bg-bg-elevated-primary gap-1.5 py-2.5 px-4.5"
              type="button"
              onClick={toggleCompact}
            >
              {compact ? (
                <>
                  <MaxIcon className="h-4.5 w-4.5 text-muted" />
                  <span className="text-primary  size-s-600">Mini</span>
                </>
              ) : (
                <>
                  <MiniIcon className="h-4.5 w-4.5 text-muted" />
                  <span className="text-primary  size-s-600">Full</span>
                </>
              )}
              {/* <MaxIcon className="h-4.5 w-4.5 text-muted " /> */}
            </button>
            <div className="flex flex-row py-2.5 pl-2.5 pr-4 group focus-within:ring-2 focus-within:ring-border-active transition-all duration-300 ease-in justify-center items-center rounded-14 bg-bg-base hover:bg-bg-elevated-primary gap-2.5">
              <SearchIcon className="text-disabled group-focus-within:text-primary shrink-0" />
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full text-primary size-s-600 placeholder:size-s-500 placeholder:text-muted outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      {/* employee cards */}
      <div className="flex-1 overflow-y-auto custom-scroll pr-2">
        {activeTab === "all" ? (
          <div className="grid gap-4 items-start grid-cols-3">
            {filteredEmployees.length === 0 ? (
              <div className="col-span-4 text-muted size-s-500 px-2 py-6">
                No records found.
              </div>
            ) : (
              filteredEmployees.map((emp) => (
                <EmployeeCard key={emp.id} {...emp} compact={compact} view={activeTab}/>
              ))
            )}
          </div>
        ) : activeTab === "status" ? (
          <ColumnView
            variant="status"
            groups={STATUS_GROUPS}
            groupedData={groupedByStatus} view={activeTab}
          />
        ) : activeTab === "type" ? (
          <ColumnView
            variant="type"
            groups={TYPE_GROUPS}
            groupedData={groupedByType} view={activeTab}
          />
        ) : (
          // department
          <ColumnView
            variant="department"
            groups={DEPARTMENT_GROUPS}
            groupedData={groupedByDepartment} view={activeTab}
          />
        )}
        {/* <div className=" grid gap-4 items-start grid-cols-4 ">
          {filteredEmployees.length === 0 ? (
            <div className="col-span-4 text-muted size-s-500 px-2 py-6">
              No records found.
            </div>
          ) : (
            filteredEmployees.map((emp) => (
              <EmployeeCard key={emp.id} {...emp} compact={compact} />
            ))
          )}
        </div> */}
      </div>
    </div>
  );
}

export default Employees;
