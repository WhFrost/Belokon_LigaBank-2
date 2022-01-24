const getSuccessPopupViewStatus = (state) => state.offer.isSuccessPopupView;
const getIdFromOffer = (state) => state.offer.id;
const getNameFromOffer = (state) => state.offer.name;
const getPhoneFromOffer = (state) => state.offer.phone;
const getEmailFromOffer = (state) => state.offer.email;

export {
  getSuccessPopupViewStatus,
  getIdFromOffer,
  getNameFromOffer,
  getPhoneFromOffer,
  getEmailFromOffer,
}
