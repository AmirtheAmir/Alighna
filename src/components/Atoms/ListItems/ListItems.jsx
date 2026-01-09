import { NavLink } from "react-router-dom";

export default function ListItem({ to, label, Icon, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-14 p-3 transition duration-300 ease-in",
          isActive
            ? "bg-bg-surface-primary ring-2 ring-border-active text-primary"
            : "text-disabled hover:bg-bg-surface-hover hover:text-primary",
        ].join(" ")
      }
    >
      <Icon className="text-current shrink-0" />
      <span className="size-s-500">{label}</span>
    </NavLink>
  );
}
