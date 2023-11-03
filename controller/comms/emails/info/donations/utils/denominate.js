module.exports = {
  denominate: (bill) => {
    return `<a href='${bill.congressdotgov_url}'>${bill.bill}</a> - ${bill.short_title}`;
  },
};
