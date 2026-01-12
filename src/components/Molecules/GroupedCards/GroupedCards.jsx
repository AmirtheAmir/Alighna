import { MouseDrag } from "../../UI/MouseDrag";
import { EmployeeCard } from "../EmployeeCard";
import Styles from "./ScrollNoneStyle.module.css"
export default function GroupedCards({
  groups,
  groupedData,
  variant = "status",
  compact,
  activeTab,
}) {
  const dragRef = MouseDrag();

  return (
    <div
      ref={dragRef}
      className={`flex flex-row gap-2 overflow-x-scroll overflow-hidden ${Styles.scrollbarNone} cursor-grab active:cursor-grabbing items-start`}
    >
      {groups.map((group) => {
        const items = groupedData[group.key] ?? [];
        return (
          <div
            key={group.key}
            className="rounded-3xl bg-bg-base p-2 flex flex-col gap-4"
          >
            {variant === "status" ? (
              <div className="flex items-center gap-2 px-4 py-2">
                <span className={`h-2.5 w-2.5 rounded-full ${group.dot}`} />
                <span className="size-m-600 text-disabled">{group.title}</span>
                <span className="size-m-800 text-disabled">{items.length}</span>
              </div>
            ) : variant === "type" ? (
              <div className="gap-2 flex flex-row items-center">
                <span className="inline-flex items-center rounded-full ring ring-border-primary px-4.5 py-2 size-m-600 text-disabled">
                  {group.title}
                </span>
                <span className="size-m-600 text-disabled">{items.length}</span>
              </div>
            ) : (
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
                  <EmployeeCard
                    key={emp.id}
                    {...emp}
                    compact={compact}
                    view={activeTab}
                  />
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
