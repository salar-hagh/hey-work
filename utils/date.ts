export function centuryFromNow(year: string) {
  let currentYear = parseInt(year);
  let centuryStart = currentYear - 100;
  let centuryEndf = currentYear;
  let array = [];

  for (let i = 0; centuryStart <= centuryEndf; centuryEndf--) {
    array.push({
      label: centuryEndf.toString(),
      value: centuryEndf.toString(),
    });
  }

  return array;
}
