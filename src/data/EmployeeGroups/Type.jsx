
export const TypeGroups = [
    { key: "full-time", title: "Full-time", dot: "bg-green-primary" },
    { key: "part-time", title: "Part-time", dot: "bg-cyan-primary" },
    { key: "contractor", title: "Contractor", dot: "bg-yellow-primary" },
  ];
  
  export function getTypeGroupKey(type) {
    const t = (type ?? "").toLowerCase().trim();
  
    if (t.includes("part")) return "part-time";
    if (t.includes("contract")) return "contractor";
  
    return "full-time";
  }
  