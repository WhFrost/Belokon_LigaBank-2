const getMonthlyPayment = (totalCost, percentRate, term) => {
  return totalCost * (percentRate / (1 - Math.pow(1 + percentRate, - term)))
}

export {
  getMonthlyPayment
}
