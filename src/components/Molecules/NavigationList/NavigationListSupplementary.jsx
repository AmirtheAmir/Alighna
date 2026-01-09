import { ListItems } from "../../Atoms/ListItems";
import { InboxIcon, SettingsIcon, HelpIcon } from "../../../assets/index";

export const NavSupplementaryArray = [
  { label: "Inbox", to: "/inbox", Icon: InboxIcon },
  { label: "Settings", to: "/settings", Icon: SettingsIcon },
  { label: "Help", to: "/help", Icon: HelpIcon },
];

export default function NavigationListSupplementary({ onItemClick }) {
  return (
    <div className="flex flex-col gap-2">
      {NavSupplementaryArray.map((item) => (
        <ListItems
          key={item.to}
          {...item}
          onClick={onItemClick ? () => onItemClick(item) : undefined}
        />
      ))}
    </div>
  );
}
