export const calcDays = (date) => {
  return Math.floor(new Date(date).getTime() / 1000 / 60 / 60 / 24);
};
