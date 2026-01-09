
export const DepartmentGroups = [
    { key: "Design", title: "Design", dot: "bg-cyan-primary" },
    { key: "Engineering", title: "Engineering", dot: "bg-green-primary" },
    { key: "Marketing", title: "Marketing", dot: "bg-yellow-primary" },
    { key: "Analytics", title: "Analytics", dot: "bg-green-primary" },
    { key: "Human Resources", title: "Human Resources", dot: "bg-red-primary" },
  ];
  
  export function getDepartmentGroupKey(department) {
    return (department ?? "").trim() || "Other";
  }
  