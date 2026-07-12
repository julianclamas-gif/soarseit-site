export function titleize(slug: string) {
  return slug
    .split("-")
    .map((w) => {
      const upper = ["ai", "ci", "cd", "ctf"];
      if (upper.includes(w)) return w.toUpperCase();
      if (w === "and") return "&";
      return w.charAt(0).toUpperCase() + w.slice(1);
    })
    .join(" ");
}
