import {MiniIcon } from "../../../assets/index";
import {MaxIcon  } from "../../../assets/index";
export default function FullButton({ compact, toggleCompact }) {
    return (
      <button
        className="flex flex-row rounded-14 items-center hover:bg-bg-elevated-hover duration-300 transition-colors bg-bg-elevated-primary gap-1.5 py-2.5 px-4.5"
        type="button"
        onClick={toggleCompact}
      >
        {compact ? (
          <>
            <MaxIcon className="h-4.5 w-4.5 text-muted" />
            <span className="text-primary size-s-600">Mini</span>
          </>
        ) : (
          <>
            <MiniIcon className="h-4.5 w-4.5 text-muted" />
            <span className="text-primary size-s-600">Full</span>
          </>
        )}
      </button>
    );
  }