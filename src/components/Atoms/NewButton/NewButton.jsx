import {PlusIcon} from "../../../assets/index";

export default function NewButton({ children = "Add New", onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center flex-row gap-1.5 rounded-14 pl-4 pr-4.5 py-2.5 bg-brand-primary text-unchanged size-s-600 transition duration-300 hover:ring-2 hover:ring-brand-primary hover:text-brand-primary hover:bg-transparent"
    >
      <PlusIcon className="text-current" />
      {children}
    </button>
  );
}