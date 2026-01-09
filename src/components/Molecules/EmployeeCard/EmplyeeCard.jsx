import { useMemo, useState, useEffect, useRef } from "react";
import { MoreIcon, DownIcon } from "../../../assets";
import EmployeeMoreMenu from "../../MoreMenu";

const STATUS_STYLES = {
  active: {
    label: "Active",
    dot: "bg-green-primary",
    pill: "bg-green-background text-green-primary size-s-600",
  },
  probation: {
    label: "Probation",
    dot: "bg-green-primary",
    pill: "bg-green-background text-green-primary size-s-600",
  },
  vacation: {
    label: "Vacation",
    dot: "bg-cyan-primary",
    pill: "bg-cyan-background text-cyan-primary size-s-600",
  },
  sick: {
    label: "Sick leave",
    dot: "bg-yellow-primary",
    pill: "bg-yellow-background text-yellow-primary size-s-600",
  },
  suspended: {
    label: "Suspended",
    dot: "bg-yellow-primary",
    pill: "bg-yellow-background text-yellow-primary size-s-600",
  },
  notice: {
    label: "Notice Period",
    dot: "bg-yellow-primary",
    pill: "bg-yellow-background text-yellow-primary size-s-600",
  },
  terminated: {
    label: "Terminated",
    dot: "bg-red-primary",
    pill: "bg-red-background text-red-primary size-s-600",
  },
};

function formatDate(value) {
  if (!value) return "";
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getDateRows(status, dates) {
  if (!status) return [];
  const s = status.toLowerCase();
  if (s === "active") {
    return [{ leftLabel: "Since", leftValue: formatDate(dates?.since) }];
  }
  if (s === "terminated") {
    return [{ leftLabel: "As of", leftValue: formatDate(dates?.asOf) }];
  }
  if (s === "suspended" || s === "notice") {
    return [{ leftLabel: "Until", leftValue: formatDate(dates?.until) }];
  }
  if (s === "vacation" || s === "sick" || s === "probation") {
    return [
      {
        leftLabel: "From",
        leftValue: formatDate(dates?.from),
        rightLabel: "Until",
        rightValue: formatDate(dates?.until),
      },
    ];
  }
  return [];
}

export default function EmployeeCard({
  firstName,
  lastName,
  title,
  avatar,
  status = "active",
  department,
  type,
  mode,
  location,
  dates,
  defaultExpanded = true,
  onClick,
  compact = false,
  layout = "column",
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  useEffect(() => {
    setExpanded(!compact);
  }, [compact]);

  const statusKey = status?.toLowerCase();
  const statusStyle = STATUS_STYLES[statusKey] ?? STATUS_STYLES.active;
  const dateRows = useMemo(
    () => getDateRows(statusKey, dates),
    [statusKey, dates]
  );
  const fullName = `${firstName ?? ""} ${lastName ?? ""}`.trim();
  const place = [location?.country, location?.city].filter(Boolean).join(" , ");
  const toggle = (e) => {
    e.stopPropagation();
    setExpanded((v) => !v);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const moreBtnRef = useRef(null);

  const openMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(true);
  };

  const closeMenu = () => setMenuOpen(false);
  return (
    <div
      onClick={onClick}
      className={[
        layout === "grid" ? "w-full" : "w-105",
        "rounded-20 flex flex-col gap-4 bg-bg-elevated-primary border-border-secondary border-2 px-2 pt-2 pb-4",
      ].join(" ")}
    >
      <div className="flex items-start justify-between flex-col gap-4 ">
        <div className="flex items-center flex-row justify-between pr-2 py-1 pl-1 w-full rounded-xl">
          <div className="flex flex-row gap-2 items-center">
            <div className="h-12 w-12 ">
              {avatar ? (
                <span className="h-full w-full rounded-xl flex justify-center items-center border-2 border-border-primary text-primary size-s-600">
                  {avatar}
                </span>
              ) : null}
            </div>
            <div className="flex flex-col">
              <div className=" size-l-600 text-primary">{fullName}</div>
              <div className="size-s-500 text-secondary">{title}</div>
            </div>
          </div>
          <button
            type="button"
            ref={moreBtnRef}
            onClick={openMenu}
            className="flex items-center justify-center"
            aria-label="Open employee menu"
          >
            <MoreIcon className="text-primary cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="h-0.5 w-full bg-border-secondary" />
      <div className="flex flex-col gap-4">
        {/* top rows */}
        <div className="flex flex-col gap-4">
          {/* status */}
          <div className="flex items-center px-2 justify-between">
            <span className="text-muted size-xs-500">Status</span>
            <div
              className={[
                "flex items-center  py-2 pl-3 pr-4.5 gap-1.5 rounded-full size-s-600",
                statusStyle.pill,
              ].join(" ")}
            >
              <span
                className={["h-3 w-3 rounded-full", statusStyle.dot].join(" ")}
              />
              {statusStyle.label}
            </div>
          </div>
          <div className="flex items-center flex-row px-2 justify-between">
            <span className="size-xs-500 text-muted">Department</span>
            <span className="size-s-600 text-primary">{department}</span>
          </div>
        </div>
        <div className=" flex items-center gap-2 justify-center flex-col">
          <button
            type="button"
            onClick={toggle}
            className="flex items-center justify-center"
            aria-label={expanded ? "Collapse card" : "Expand card"}
          >
            <DownIcon
              className={[
                " text-muted transition-transform duration-300",
                expanded ? "rotate-0" : "rotate-180",
              ].join(" ")}
            />
          </button>
        </div>
        {!compact && expanded ? (
          <div className="flex flex-col gap-4 h-auto">
            <div className="grid grid-cols-3  gap-auto">
              <div className="flex items-center justify-between col-span-3 px-2">
                <span className="size-xs-500 text-muted">Type</span>
                <span className="size-s-600 text-primary">{type}</span>
                <span className="px-4.5 py-2  items-center rounded-full ring-2 ring-border-tertiary size-s-600 text-primary">
                  {mode}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between px-2">
              <span className="size-xs-500 text-muted">Location</span>
              <span className="size-s-600 text-primary">{place}</span>
            </div>
            {dateRows.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 px-2"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="size-xs-500 text-muted">
                    {row.leftLabel}
                  </span>
                  <span className="size-s-600 text-primary ">
                    {row.leftValue}
                  </span>
                </div>
                {row.rightLabel ? (
                  <div className="flex items-center justify-between w-full">
                    <span className="size-xs-500 text-muted">
                      {row.rightLabel}
                    </span>
                    <span className="size-s-600 text-primary">
                      {row.rightValue}
                    </span>
                  </div>
                ) : null}
              </div>
            ))}
            <EmployeeMoreMenu
              open={menuOpen}
              onClose={closeMenu}
              anchorRef={moreBtnRef}
              statusKey={statusKey}
              email={"adam.hensen@gmail.com"} // or pass a prop like `email`
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
