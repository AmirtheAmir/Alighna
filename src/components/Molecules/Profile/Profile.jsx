import { SwitchIcon } from "../../../assets/index";

export default function Profile() {
  return (
    <div className="flex flex-row py-1 pl-1 pr-3 rounded-2xl bg-bg-surface-primary hover:bg-bg-surface-hover transition-all duration-200 ease-in">
      <div className="flex flex-row gap-2">
        <div className="h-11 w-11 rounded-xl flex justify-center items-center border-2 border-border-primary text-primary size-s-600">
          <span>AN</span>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xl text-primary size-m-600">Amelia Nowak</p>
          <p className="text-m text-secondary size-s-500">Project Manager</p>
        </div>
      </div>

      <button
        type="button"
        aria-label="Profile options"
        className="text-disabled ml-auto"
      >
        <SwitchIcon className="h-5 w-5 shrink-0" />
      </button>
    </div>
  );
}
