// utils.js

export const PetoEn = function (string) {
  return string.replace(/[\u06F0-\u06F9]/g, (d) => d.charCodeAt() - 1776);
};

export const EntoFa = function (string) {
  return string.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
};

export const separateNumbers = function (string) {
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

export const formatNumberToPersian = (number) => {
  if (number === '') {
    return '';
  }
  return EntoFa(Number(number).toLocaleString('fa'));
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

export const combineNumbersFromGroups = (string) => {
  const strippedString = string.replace(/-/g, '');
  return strippedString || '';
};
