import Female from '@Images/placeholder/portrait_female.webp';
import Male from '@Images/placeholder/portrait_male.webp';
import API from '@API';

export const substituteSrc = (e, handleError) => {
  if (e.target.attributes[2].value === 'M') return (e.target.src = Male);
  else if (e.target.attributes[2].value === 'F')
    return (e.target.src = Female);
  else handleError(new Error());
  API.notifyImgErr(e.target.name).catch((err) => handleError(err));
};
