import { NavLink, useLocation } from "react-router-dom";
import RightIcon from "../assets/icons/right.svg?react";
export default function Breadcrumbs() {
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  // "/employees/suspended" → ["employees", "suspended"]

  // Convert URL segments into breadcrumb objects
  const crumbs = segments.map((segment, index) => {
    const to = "/" + segments.slice(0, index + 1).join("/");

    return {
      label: segment,
      to,
    };
  });

  return (
    <div className="flex items-center gap-2 text-tx-disabled">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <>
            <RightIcon />
            {isLast ? (
              <span className="txt-s-600 text-tx-muted hover:text-tx-secondary transition-colors duration-150">
                {capitalize(crumb.label)}
              </span>
            ) : (
              <NavLink
                to={crumb.to}
                className="txt-s-600 text-tx-disabled hover:text-tx-muted transition-colors  duration-150"
              >
                {capitalize(crumb.label)}
              </NavLink>
            )}
          </>
        );
      })}
    </div>
  );
}

// helper to make labels look human
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
