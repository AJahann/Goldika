// utils.js

export const PetoEn = function (string = '0') {
  return string.replace(/[\u06F0-\u06F9]/g, (d) => d.charCodeAt() - 1776);
};

export const EntoFa = function (string = '0') {
  return string.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
};

export const separateNumbers = function (string = '0') {
  string = PetoEn(string);
  const numbers = string.match(/\d+/g);
  if (!numbers) return [];

  const separatedNumbers = [];
  numbers.forEach((number) => {
    const separatedNumber = [];
    let currentIndex = 0;
    separatedNumber.push(number.substr(currentIndex, 4));
    currentIndex += 4;
    separatedNumber.push(number.substr(currentIndex, 3));
    currentIndex += 3;
    separatedNumber.push(number.substr(currentIndex, 4));

    separatedNumbers.push(separatedNumber.join(' '));
  });

  return separatedNumbers[0];
};

export const formatNumberToPersian = (number = '') => {
  if (number === '') {
    return '';
  }
  return EntoFa(Number(number).toLocaleString('fa')); // ۳,۲۳۴
};

export const removeNonNumericCharacters = (str) => {
  return str.replace(/[^\d]/g, '');
};

export const separateNumbersTo4Groups = (string) => {
  string = String(string);
  const numbers = string.match(/\d+/g);
  if (!numbers) {
    return '';
  }

  const combinedNumbers = numbers.join('');
  const maxNumbers = Math.min(combinedNumbers.length, 16);
  const formattedNumbers = combinedNumbers.substr(0, maxNumbers);

  const separatedNumbers = [];
  for (let i = 0; i < formattedNumbers.length; i += 4) {
    separatedNumbers.push(formattedNumbers.substr(i, 4));
  }

  return EntoFa(separatedNumbers.join('-'));
};

export const combineNumbersFromGroups = (string = '') => {
  const strippedString = string.replace(/-/g, '');
  return strippedString || '';
};

export const countDecimals = function (val) {
  if (Math.floor(val.valueOf()) === val.valueOf()) return 0;

  var str = val.toString();
  if (str.indexOf('.') !== -1 && str.indexOf('-') !== -1) {
    return str.split('-')[1] || 0;
  } else if (str.indexOf('.') !== -1) {
    return str.split('.')[1].length || 0;
  }
  return str.split('-')[1] || 0;
};
