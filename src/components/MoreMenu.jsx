import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import ArchiveIcon from "../assets/icons/archive.svg?react";
import StatusIcon from "../assets/icons/status.svg?react";
import CopyIcon from "../assets/icons/copy.svg?react";
import DateIcon from "../assets/icons/date.svg?react";
import DepartmentIcon from "../assets/icons/departments.svg?react";
import ExportIcon from "../assets/icons/export.svg?react";
import LocationIcon from "../assets/icons/location.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";
import MessageIcon from "../assets/icons/message.svg?react";
import ModeIcon from "../assets/icons/mode.svg?react";
import NameIcon from "../assets/icons/name.svg?react";
import ProfileIcon from "../assets/icons/profile.svg?react";
import SaveIcon from "../assets/icons/save.svg?react";
import TypeIcon from "../assets/icons/type.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import RightIcon from "../assets/icons/right.svg?react";

function getDisabledKeysByStatus(statusKey) {
  const s = (statusKey ?? "").toLowerCase();

  const disabledForLeave = new Set([
    "remove",

    // add/remove keys freely
  ]);

  const disabledForTerminated = new Set([
    "sendMessage",
    "name",
    "email",
    "department",
    "location",
    "status",
    "workType",
    "workMode",
    "startDate",
    // add/remove keys freely
  ]);
  if (s === "vacation" || s === "sick leave" || s === "sick")
    return disabledForLeave;
  if (s === "terminated") return disabledForTerminated;

  return new Set(); // default: nothing disabled
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export default function MoreMenu({
  open,
  onClose,
  anchorRef, // ref to the MoreIcon button
  statusKey,
  email,
}) {
  const menuRef = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 0, placement: "right" });

  const disabledKeys = useMemo(
    () => getDisabledKeysByStatus(statusKey),
    [statusKey]
  );

  const items = useMemo(
    () => [
      {
        section: "primary",
        rows: [
          { key: "fullProfile", label: "Full Profile", Icon: ProfileIcon },
          {
            key: "copyEmail",
            label: "Copy Email",
            Icon: CopyIcon,
            subLabel: email,
          },
          { key: "sendMessage", label: "Send Message", Icon: MessageIcon },
        ],
      },
      {
        section: "edit",
        rows: [
          {
            key: "name",
            label: "Name & Lastname",
            Icon: NameIcon,
            Right: RightIcon,
          },
          { key: "email", label: "Email", Icon: MailIcon, Right: RightIcon },
          {
            key: "status",
            label: "Status",
            Icon: StatusIcon,
            Right: RightIcon,
          },
          {
            key: "department",
            label: "Department",
            Icon: DepartmentIcon,
            Right: RightIcon,
          },
          {
            key: "workType",
            label: "Work Type",
            Icon: TypeIcon,
            Right: RightIcon,
          },
          {
            key: "workMode",
            label: "Work Mode",
            Icon: ModeIcon,
            Right: RightIcon,
          },
          {
            key: "location",
            label: "Location",
            Icon: LocationIcon,
            Right: RightIcon,
          },
          {
            key: "startDate",
            label: "Date",
            Icon: DateIcon,
            Right: RightIcon,
          },
        ],
      },
      {
        section: "secondary",
        rows: [
          { key: "archive", label: "Archive", Icon: ArchiveIcon },
          { key: "exportPdf", label: "Export Data as PDF", Icon: ExportIcon },
          {
            key: "remove",
            label: "Remove From List",
            Icon: TrashIcon,
            danger: true,
          },
        ],
      },
    ],
    [email]
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Close on click outside
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e) => {
      const menuEl = menuRef.current;
      const anchorEl = anchorRef?.current;

      if (!menuEl || !anchorEl) return;

      const clickedMenu = menuEl.contains(e.target);
      const clickedAnchor = anchorEl.contains(e.target);

      if (!clickedMenu && !clickedAnchor) onClose?.();
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [open, onClose, anchorRef]);

  useLayoutEffect(() => {
    if (!open) return;

    const anchorEl = anchorRef?.current;
    const menuEl = menuRef.current;
    if (!anchorEl || !menuEl) return;

    const GAP = 8; // px
    const viewportW = window.innerWidth;
    const viewportH = window.innerHeight;

    const a = anchorEl.getBoundingClientRect();

    // Ensure the menu has measurable size
    const menuW = menuEl.offsetWidth || 280;
    const menuH = menuEl.offsetHeight || 400;

    // Prefer right side
    let left = a.right + GAP;
    let placement = "right";

    // If would overflow right, flip left
    if (left + menuW > viewportW - 8) {
      left = a.left - GAP - menuW;
      placement = "left";
    }

    // Clamp horizontally a bit (safety)
    left = clamp(left, 8, viewportW - menuW - 8);

    // Vertical: align near the top of the anchor, but clamp
    let top = a.top;
    top = clamp(top, 8, viewportH - menuH - 8);

    setPos({ top, left, placement });
  }, [open, anchorRef, items.length]);

  if (!open) return null;

  const divider = "h-0.5 w-full bg-border-primary mt-2 rounded-full ";

  function rowClass({ disabled, danger }) {
    if (disabled) {
      return "text-disabled cursor-not-allowed";
    }
    if (danger) {
      return "text-red-primary hover:bg-bg-surface-hover rounded-10 cursor-pointer";
    }
    return "text-primary hover:bg-bg-surface-hover rounded-10 cursor-pointer";
  }

  return (
    <div
      ref={menuRef}
      className="fixed z-50 w-61 rounded-2xl px-2 py-2.5
  border border-primary/10
  bg-bg-surface-primary/5
  backdrop-blur-xl
  shadow-[0_12px_40px_rgba(0,0,0,0.45)]
  ring-1 ring-white/10
  gap-2 flex flex-col overflow-hidden"
      style={{ top: pos.top, left: pos.left }}
      role="menu"
      aria-label="Employee actions"
      onClick={(e) => e.stopPropagation()} // don’t bubble into card
    >
      {items.map((group, gi) => (
        <div key={group.section}>
          <div className="flex flex-col gap-1">
            {group.rows.map((r) => {
              const disabled = disabledKeys.has(r.key);
              return (
                <div
                  key={r.key}
                  className={[
                    "p-2 flex items-center justify-between select-none",
                    rowClass({ disabled, danger: r.danger }),
                  ].join(" ")}
                  role="menuitem"
                  aria-disabled={disabled}
                >
                  <div className="flex items-center flex-col gap-1 min-w-0">
                    <div className="flex flex-row gap-4 w-full">
                      {r.Icon ? <r.Icon className="shrink-0" /> : null}
                      <div className="flex flex-col min-w-0">
                        <span className="size-xs-500 truncate">{r.label}</span>
                      </div>
                    </div>
                    {r.subLabel ? (
                      <span className="size-2xs-600 px-1 text-secondary truncate">
                        {r.subLabel}
                      </span>
                    ) : null}
                  </div>
                  {r.Right ? (
                    <r.Right className="shrink-0 text-secondary" />
                  ) : null}
                </div>
              );
            })}
          </div>
          {gi !== items.length - 1 ? <div className={divider} /> : null}
        </div>
      ))}

      {/* Optional bottom "Save Changes" area like your mock, but disabled-looking */}
      <div className="">
        <div className="w-full rounded-10 bg-primary py-2.5 flex-row text-bg-surface-primary size-xs-600 flex items-center justify-center gap-2">
          <SaveIcon className="shrink-0" />
          <span className="">Save Changes</span>
        </div>
      </div>
    </div>
  );
}
