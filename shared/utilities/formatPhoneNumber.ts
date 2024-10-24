const formatPhoneNumber = (phoneNumber: string) => {
  let formatedNumber = phoneNumber
    .replace(/(\d{4})(\d{3})(\d{4})/, "$1-$2-$3")
    .replaceAll("-", " ");

  return formatedNumber;
};

export default formatPhoneNumber;
