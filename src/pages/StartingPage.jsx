export default function StartingPage() {
  return (
    <div className="h-full bg-bg-surface-primary  overflow-y-auto rounded-3xl flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2 w-1/3">
        <div className="flex flew-row gap-2 items-center">
          <span className="text-primary size-3xl-400">Welcome to</span>
          <span className="text-primary size-3xl-600">Alighna</span>
        </div>
        <div>
          <h2 className="text-secondary size-xl-400 text-center">
            Manage your people, projects, and performance in one clear, unified
            workspace.
          </h2>
        </div>
      </div>
    </div>
  );
}
