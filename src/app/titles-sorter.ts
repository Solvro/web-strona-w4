export const AcademicTitlesOrder = ["prof", "dr hab", "dr", "mgr"];

export function getGeneralAcademicTitle(
  title: string,
): (typeof AcademicTitlesOrder)[number] | "" {
  const parts = title.split(/ |\./).filter(Boolean);
  if (!parts.length) return "";

  function matchingTitles(
    prefix: string[],
  ): (typeof AcademicTitlesOrder)[number][] {
    return prefix.filter((p) => AcademicTitlesOrder.indexOf(p) !== -1);
  }

  let previousTitles = matchingTitles(parts.slice(0, 1));
  if (!previousTitles.length) return "";

  for (let i = 2; i < parts.length && previousTitles.length; ++i) {
    const titles = matchingTitles(parts.slice(0, i));
    if (!titles.length) return i === 1 ? "" : previousTitles[0];
    previousTitles = titles;
  }

  return previousTitles[0];
}
