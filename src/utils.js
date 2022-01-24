const getMonthlyPayment = (totalCost, percentRate, term) => {
  const quantityPercentInMonth = percentRate / 100 / 12;
  const termInMoths = term * 12;
  return Math.ceil(totalCost * (quantityPercentInMonth / (1 - Math.pow(1 + quantityPercentInMonth, - termInMoths))));
};

const getRequiredIncom = (monthlyPayment) => Math.ceil(monthlyPayment * 100 / 45);

const getWordDeclension = (value, words) => {
  value = Math.abs(value) % 100;
  const num = value % 10;
  if(value > 10 && value < 20) {
    return words[2];
  }
  if(num > 1 && num < 5) {
    return words[1];
  }
  if(num === 1) {
    return words[0];
  }
  return words[2];
};

export {
  getMonthlyPayment,
  getRequiredIncom,
  getWordDeclension
};
