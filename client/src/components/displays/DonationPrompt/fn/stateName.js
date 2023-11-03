import { POLSTATES } from '@Tuples';

const handleStateName = (description) => {
  return (
    description &&
    POLSTATES.filter((st) => st.abbrev === description.state)[0].full
  );
};

export default handleStateName;
