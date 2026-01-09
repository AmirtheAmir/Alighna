import { ListItems } from "../../Atoms/ListItems";
import { DocumentsIcon, AnalyticsIcon } from "../../../assets/index";

export const NavSecondaryArray = [
  { label: "Documents", to: "/documents", Icon: DocumentsIcon },
  { label: "Analytics", to: "/analytics", Icon: AnalyticsIcon },
];

export default function NavigationListSecondary({ onItemClick }) {
  return (
    <div className="flex flex-col gap-2">
      {NavSecondaryArray.map((item) => (
        <ListItems
          key={item.to}
          {...item}
          onClick={onItemClick ? () => onItemClick(item) : undefined}
        />
      ))}
    </div>
  );
}
