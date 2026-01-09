
export const StatusGroups = [
    { key: "working", title: "Working", dot: "bg-green-primary" },
    { key: "vacation", title: "On Vacation", dot: "bg-cyan-primary" },
    { key: "leave", title: "On Leave", dot: "bg-yellow-primary" },
    { key: "terminated", title: "Terminated", dot: "bg-red-primary" },
  ];
  
  export function getStatusGroupKey(status) {
    const s = (status ?? "").toLowerCase();
  
    if (s === "vacation") return "vacation";
    if (s === "terminated") return "terminated";
    if (s === "sick" || s === "suspended" || s === "notice") return "leave";
  
    return "working";
  }
  