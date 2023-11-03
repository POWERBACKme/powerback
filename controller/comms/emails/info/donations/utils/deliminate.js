module.exports = {
  deliminate: (donee) => {
    return `${donee.roles[0].short_title} ${donee.first_name} ${donee.last_name} from ${donee.roles[0].state}`;
  },
};
