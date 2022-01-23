const getMonthlyPayment = (totalCost, percentRate, term) => {
  const quantityPercentInMonth = percentRate / 100 / 12;
  const termInMoths = term * 12;
  return Math.ceil(totalCost * (quantityPercentInMonth / (1 - Math.pow(1 + quantityPercentInMonth, - termInMoths))))
}

const getRequiredIncom = (monthlyPayment) => {
  return Math.ceil(monthlyPayment * 100 / 45);
}

export {
  getMonthlyPayment,
  getRequiredIncom
}
