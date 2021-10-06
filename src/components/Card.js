// import {
//     elementTemplate,
//   } from "../utils/constants.js";

export default class Card {
  constructor(data, selector) {
    this._text = data.name;
    this._image = data.link;
    this._selector = selector;
  }

  _getElement() {
    const cardElement = elementTemplate.querySelector(this._selector).cloneNode(true);

    return cardElement;
  }

  generate() {
    this._element = this._getElement();
    this._likeSetEventListeners();
    this._imageSetEventListeners();
    this._deleteSetEventListeners();

    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__image").alt = this._text;
    this._element.querySelector(".card__info").textContent = this._text;

    return this._element;
  }

  _imageSetEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleOpenPopupImage();
      });
  }

  _handleOpenPopupImage() {
    popupViewerImage.src = this._image;
    popupViewerImage.alt = this._text;
    popupViewerTitle.textContent = this._text;
    openPopup(popupImage);
  }

  _deleteSetEventListeners() {
    this._element
      .querySelector(".card__trash-button")
      .addEventListener("click", () => {
        this._handleDeleteImage();
      });
  }

  _handleDeleteImage() {
    if (this._element.closest(".card")) {
      this._element.remove();
      this._element = null;
    }
  }

  _likeSetEventListeners() {
    this._element
      .querySelector(".card__button-like")
      .addEventListener("click", () => {
        this._likeHandleClick();
      });
  }

  _likeHandleClick() {
    this._element
      .querySelector(".card__button-like")
      .classList.toggle("card__button-like_active");
  }
}