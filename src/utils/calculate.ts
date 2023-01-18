export const calculateLengthDescription = (value: string) => {
  let counterCharacters = 100;
  const re = `(<mark>)|(</mark>)`;
  const textWithoutHTML = value
    .slice(0, 100)
    .replace(new RegExp(re, 'g'), '')
    .replace(new RegExp(/\<.*/, 'g'), '');

  counterCharacters =
    counterCharacters + (counterCharacters - textWithoutHTML.length);

  return counterCharacters;
};

export const reduceTitle = (value: string) => {
  return value.slice(0, 38);
};

export const reduceDescription = (value: string) => {
  return value.slice(0, 100);
};
