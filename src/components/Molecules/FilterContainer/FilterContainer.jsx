export default function FilterContainer({ activeTab, setActiveTab }) {
    const tabBtn = (key) =>
      `rounded-xl px-4.5 py-1.5 size-s-600 transition-colors duration-300 ${
        activeTab === key
          ? "bg-bg-elevated-primary text-primary"
          : "text-secondary hover:text-primary hover:bg-bg-elevated-primary"
      }`;
    return (
      <div className="flex items-center gap-2 p-0.5 bg-bg-base rounded-14">
        <button type="button" onClick={() => setActiveTab("all")} className={tabBtn("all")}>
          All
        </button>
        <button type="button" onClick={() => setActiveTab("status")} className={tabBtn("status")}>
          Status
        </button>
        <button type="button" onClick={() => setActiveTab("type")} className={tabBtn("type")}>
          Type
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("department")}
          className={tabBtn("department")}
        >
          Department
        </button>
      </div>
    );
  }
  