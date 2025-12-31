import { NavLink, useLocation } from "react-router-dom";
import RightIcon from "../assets/icons/right.svg?react";
export default function Breadcrumbs() {
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const to = "/" + segments.slice(0, index + 1).join("/");

    return {
      label: segment,
      to,
    };
  });

  return (
    <div className="flex items-center gap-2 text-disabled">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;
        return (
          <>
            <RightIcon />
            {isLast ? (
              <span className="size-s-600 text-muted hover:text-secondary transition-colors duration-150">
                {capitalize(crumb.label)}
              </span>
            ) : (
              <NavLink
                to={crumb.to}
                className="size-s-600 text-disabled hover:text-muted transition-colors duration-150"
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
