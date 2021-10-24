export const elementTemplate = document.querySelector("#element").content;
export const popupViewerImage = document.querySelector(".popup__viewer_image");
export const popupViewerTitle = document.querySelector(".popup__viewer_title");
export const popupImage = document.querySelector(".popup_image");
export const popupInput = document.querySelector(".popup__text");
export const profileEdit = document.querySelector(".profile__edit-button");
export const popupProfile = document.querySelector(".popup_profile");
export const profileAvatar = document.querySelector(".profile__image");
export const profileContainer = document.querySelector(".popup__container_profile");
export const nameInput = profileContainer.querySelector(".popup__text_name");
export const jobInput = profileContainer.querySelector(".popup__text_job");
export const profileName = document.querySelector(".profile__title");
export const profileJob = document.querySelector(".profile__subtitle");
export const cardContainer = document.querySelector(".elements");
export const createPopupOpenButton = document.querySelector(".profile__add-button");
export const popupCreate = document.querySelector(".popup_create");
export const placeInput = document.querySelector(".popup__text_place");
export const urlInput = document.querySelector(".popup__text_url");
export const popupInputTextPlace = document.querySelector(".popup__text_place");
export const popupInputTextUrl = document.querySelector(".popup__text_url");
export const avatarEditButton = document.querySelector('.profile__image-edit-button');
export const popupAvatarEdit = document.querySelector('.popup_avatar');
export const formCreate = document.forms.create;
export const formProfile = document.forms.profile;
export const formAvatar = document.forms.avatar;

// Validation settings //
export const validateObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  inputErrorClass: "popup__text_invalid",
  errorClass: "error_active",
};