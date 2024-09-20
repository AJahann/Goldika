const convertToPersianDigits = (num: string) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num.replace(/\d/g, (digit: string) => persianDigits[parseInt(digit)]);
};

export default convertToPersianDigits;
