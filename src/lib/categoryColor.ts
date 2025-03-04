export function categoryColorHandler(category: string): string {
  const categoryColors: Record<string, string> = {
    lifestyle: "#2ecc71",
    technology: "#3498db",
    health: "#e74c3c",
    travel: "#f1c40f",
  };
  return categoryColors[category.toLowerCase()] || "#000";
}
