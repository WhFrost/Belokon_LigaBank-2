const getCreditTarget = (state) => state.calc.creditTarget;
const getCostTarget = (state) => state.calc.cost;
const getFirstPayment = (state) => state.calc.firstPayment;
const getMinFirstPayment = (state) => state.calc.minFirstPayment;
const getMaxFirstPayment = (state) => state.calc.maxFirstPayment;
const getFirstPaymentPercent = (state) => state.calc.firstPaymentPercent;
const getTerm = (state) => state.calc.term;
const getUseMotherCapital = (state) => state.calc.useMotherCapital;
const getUseInsuranceAuto = (state) => state.calc.useInsuranceAuto;
const getUseInsuranceLife = (state) => state.calc.useInsuranceLife;
const getTotalCost = (state) => state.calc.totalCost;
const getPercentRate = (state) => state.calc.percentRate;
const getPercentRateMod = (state) => state.calc.percentRateMod;
const getOfferStatus = (state) => state.calc.isOfferValid;

export {
  getCreditTarget,
  getCostTarget,
  getFirstPayment,
  getMinFirstPayment,
  getMaxFirstPayment,
  getFirstPaymentPercent,
  getTerm,
  getUseMotherCapital,
  getUseInsuranceAuto,
  getUseInsuranceLife,
  getTotalCost,
  getPercentRate,
  getPercentRateMod,
  getOfferStatus
};
