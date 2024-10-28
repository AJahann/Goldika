const convertToPersianDigits = (num: string) => {
  if (num === "NaN") return "";

  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const replacedNumber = num.replace(
    /\d/g,
    (digit: string) => persianDigits[parseInt(digit)],
  );

  return replacedNumber;
};

export default convertToPersianDigits;
