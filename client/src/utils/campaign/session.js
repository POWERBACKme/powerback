export const session = () => {
  const d = new Date();
  let s = (d.getFullYear() - 1787) / 2; // # of sessions since the First
  if (s % 2 !== 0) s = Math.floor(s); // round down if dividend was odd
  else if (d.getMonth() === 0) if (d.getDate() < 4) s--;
  return s;
};
