import { Breadcrumbs } from "../components/Molecules/Breadcrumbs/index.jsx";
import NewButton from "../components/Atoms/NewButton/NewButton.jsx";
import FilterContainer from "../components/Molecules/FilterContainer/FilterContainer.jsx";
import FullButton from "../components/Atoms/FullButton/FullButton.jsx";
import { employees } from "../data/employees.js";
import GroupedCards from "../components/Molecules/GroupedCards/GroupedCards.jsx";
import SearchIcon from "../assets/icons/search.svg?react";
import { EmployeeCard } from "../components/Molecules/EmployeeCard/index.jsx";
import {
  StatusGroups,
  TypeGroups,
  DepartmentGroups,
  getStatusGroupKey,
  getDepartmentGroupKey,
  getTypeGroupKey,
} from "../data/EmployeeGroups/index.jsx";
import { useState, useMemo } from "react";

function EmployeePage() {
  const [compact, setCompact] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const toggleCompact = () => setCompact((v) => !v);

  const filteredEmployees = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    if (!q) return employees;

    return employees.filter((emp) => {
      const fullName = `${emp.firstName ?? ""} ${emp.lastName ?? ""}`.toLowerCase();
      return fullName.includes(q);
    });
  }, [searchText]);

  
  const groupedByStatus = useMemo(() => {
    return filteredEmployees.reduce((acc, emp) => {
      const key = getStatusGroupKey(emp.status);
      (acc[key] ||= []).push(emp);
      return acc;
    }, {});
  }, [filteredEmployees]);

  const groupedByType = useMemo(() => {
    return filteredEmployees.reduce((acc, emp) => {
      const key = getTypeGroupKey(emp.type);
      (acc[key] ||= []).push(emp);
      return acc;
    }, {});
  }, [filteredEmployees]);

  const groupedByDepartment = useMemo(() => {
    return filteredEmployees.reduce((acc, emp) => {
      const key = getDepartmentGroupKey(emp.department);
      (acc[key] ||= []).push(emp);
      return acc;
    }, {});
  }, [filteredEmployees]);

  return (
    <div className="h-full w-full min-w-0 flex flex-col bg-bg-surface-primary gap-6 p-6 rounded-3xl">
      <div className="w-full flex">
        <Breadcrumbs />
      </div>
      <div className="flex flex-row justify-between items-center ">
        <div className="flex flex-col gap-1 ">
          <h1 className="size-2xl-600 text-primary ">Employees</h1>
          <p className="text-secondary size-m-400 w-full">
            Browse and manage all employees, monitor headcount, and refine the
            list by department and status.
          </p>
        </div>
        <NewButton />
      </div>
      <div className="min-w-auto">
        <div className="flex items-center justify-between min-w-0 w-full">
          <div className="flex items-center gap-2 p-0.5 bg-bg-base rounded-14">
            <FilterContainer
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          <div className="flex items-center gap-4">
            <FullButton compact={compact} toggleCompact={toggleCompact} />
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
      <div className=" overflow-y-scroll custom-scroll pr-2">
        {activeTab === "all" ? (
          <div
            className={
              activeTab === "all"
                ? "grid grid-cols-3 gap-4"
                : "flex flex-wrap gap-4 items-start"
            }
          >
            {filteredEmployees.length === 0 ? (
              <div className="col-span-4 text-muted size-s-500 px-2 py-6">
                No records found.
              </div>
            ) : (
              filteredEmployees.map((emp) => (
                <EmployeeCard
                  key={emp.id}
                  {...emp}
                  compact={compact}
                  view={activeTab}
                  layout="grid"
                />
              ))
            )}
          </div>
        ) : activeTab === "status" ? (
          <GroupedCards
            variant="status"
            groups={StatusGroups}
            groupedData={groupedByStatus}
            view={activeTab}
            compact={compact}
            activeTab={activeTab}
            layout="column"
          />
        ) : activeTab === "type" ? (
          <GroupedCards
            variant="type"
            groups={TypeGroups}
            groupedData={groupedByType}
            view={activeTab}
            compact={compact}
            activeTab={activeTab}
            layout="column"
          />
        ) : (
          <GroupedCards
            variant="department"
            groups={DepartmentGroups}
            groupedData={groupedByDepartment}
            view={activeTab}
            compact={compact}
            activeTab={activeTab}
            layout="column"
          />
        )}
      </div>
    </div>
  );
}

export default EmployeePage;
