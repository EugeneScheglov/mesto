export default class Card {
  constructor({
    data,
    openPopupWithDelete,
    handleCardClick
  }, selector) {
    this._text = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._userId = data.owner._id;
    this._myUserId = "e3d187d5758c011e9e594e63";
    this._selector = selector;
    this.handleCardClick = handleCardClick;
    this._openPopupWithDelete = openPopupWithDelete;
  }

  _hideDeleteButton() {
    if (this._myUserId !== this._userId) {
      this._deleteButton.hidden = true;
    }

  }

  _getElement() {
    const cardElement =
      document
      .querySelector(this._selector).content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  generate() {
    this._element = this._getElement();
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__info");
    this._cardLike = this._element.querySelector(".card__button-like");
    this._deleteButton = this._element.querySelector(".card__trash-button");
    this._setEventListeners();

    this._cardImage.src = this._image;
    this._cardImage.alt = this._text;
    this._cardTitle.textContent = this._text;

    return this._element;
  }

  _setEventListeners() {
    this._likeSetEventListeners();
    this._imageSetEventListeners();
    this._deleteSetEventListeners();
    this._hideDeleteButton();
  }

  _imageSetEventListeners() {
    this._cardImage
      .addEventListener("click", () => {
        this.handleCardClick();
      });
  }

  _deleteSetEventListeners() {
    this._deleteButton
      .addEventListener("click", () => {
        this._openPopupWithDelete(this.handleDeleteImage);
      });
  }

  handleDeleteImage() {
    if (this._element.closest(".card")) {
      this._element.remove();
    }
  }

  _likeSetEventListeners() {
    this._cardLike
      .addEventListener("click", () => {
        this._likeHandleClick();
      });
  }

  _likeHandleClick() {
    this._cardLike
      .classList.toggle("card__button-like_active");
  }
}