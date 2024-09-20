import convertToPersianDigits from "./convertToPersianDigits";

const formatCardNumberInPersian = (cardNumber: number) => {
  // تبدیل شماره کارت به رشته و سپس به گروه‌های ۴ رقمی جدا کردن
  const formattedCardNumber = cardNumber
    .toString()
    .replace(/(\d{4})(?=\d)/g, "$1-");

  // تبدیل اعداد به فرمت فارسی بدون جدا کننده سه رقمی
  const persianCardNumber = convertToPersianDigits(formattedCardNumber);

  return persianCardNumber;
};

export default formatCardNumberInPersian;
