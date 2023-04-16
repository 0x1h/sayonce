export const addNextDay = (date: Date) => {
  const nextDay = new Date(date.setDate(date.getDate() + 1));

  return nextDay;
};
