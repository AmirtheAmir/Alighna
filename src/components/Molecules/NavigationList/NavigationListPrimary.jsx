import { ListItems } from "../../Atoms/ListItems";
import {
  DashboardIcon,
  UsersIcon,
  ProjectsIcon,
  AttendanceIcon,
} from "../../../assets/index";

export const NavPrimaryArray = [
  { label: "Dashboard", to: "/dashboard", Icon: DashboardIcon },
  { label: "Employees", to: "/employees", Icon: UsersIcon },
  { label: "Projects", to: "/projects", Icon: ProjectsIcon },
  { label: "Attendance", to: "/attendance", Icon: AttendanceIcon },
];

export default function NavigationListPrimary({ onItemClick }) {
  return (
    <div className="flex flex-col gap-2">
      {NavPrimaryArray.map((item) => (
        <ListItems
          key={item.to}
          {...item}
          onClick={onItemClick ? () => onItemClick(item) : undefined}
        />
      ))}
    </div>
  );
}
