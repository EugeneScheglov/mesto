export const elementTemplate = document.querySelector("#element").content;
export const popupViewerImage = document.querySelector(".popup__viewer_image");
export const popupViewerTitle = document.querySelector(".popup__viewer_title");
export const popupImage = document.querySelector(".popup_image");
export const popupInput = document.querySelector(".popup__text");
export const profileEdit = document.querySelector(".profile__edit-button");
export const popupProfile = document.querySelector(".popup_profile");
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
export const formCreate = document.forms.create;
export const formProfile = document.forms.profile;

// Фото карты //

export const initialCards = [{
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];


// Validation settings //
export const validateObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  inputErrorClass: "popup__text_invalid",
  errorClass: "error_active",
};