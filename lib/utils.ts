export const capitalize = (str: string) => {
  let firstLetter = str?.[0];
  if (firstLetter)
    return firstLetter.toUpperCase() + str.substring(1, str.length);
};
