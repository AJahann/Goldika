const convertToPersianDigits = (num: string) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const replacedNumber = num.replace(
    /\d/g,
    (digit: string) => persianDigits[parseInt(digit)],
  );

  if (replacedNumber === "NaN") {
    return "";
  }
  return replacedNumber;
};

export default convertToPersianDigits;
