export function truncate(text: string, maxLength: number) {
  const l = text.length;
  let result = text.replaceAll(/<[^>]*>/g, "").slice(0, Math.max(0, maxLength));
  if (l > maxLength) {
    result += "...";
  }

  return result;
}
