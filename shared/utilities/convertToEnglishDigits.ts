const convertToEnglishDigits = (persianNumber: string) => {
  const cleanedValue = persianNumber.replace(/[^۰-۹0-9]/g, "");

  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";

  return cleanedValue.replace(/[۰-۹]/g, (digit) => {
    return englishDigits[persianDigits.indexOf(digit)] || digit;
  });
};

export default convertToEnglishDigits;
