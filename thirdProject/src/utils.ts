export function parseStringToDate(dateString: string): Date {
  const formattedDateString = dateString
    .split('/')
    .reverse()
    .join('-');

  return new Date(formattedDateString);
}
