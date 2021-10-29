export default class Card {
  constructor({
    data,
    openPopupWithDelete,
    handleCardClick,
    likeHandleClick,
    api
  }, selector) {
    this._api = api;
    this._text = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._cardId = data._id;
    this._userId = data.owner._id;
    this._myUserId = "e3d187d5758c011e9e594e63";
    this._selector = selector;
    this.handleCardClick = handleCardClick;
    this._likeHandleClick = likeHandleClick;
    this._openPopupWithDelete = openPopupWithDelete;
  }

  _hideDeleteButton() {
    if (this._myUserId !== this._userId) {
      this._deleteButton.hidden = true;
    }
  }

  _hideLikeButton() {
    if (this._likes.find((obj) => this._myUserId === obj._id)) {
      this._element.querySelector('.card__button-like').classList.add('card__button-like_active');
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
    this._cardLikeBox = this._element.querySelector('.card__like-count');
    this._setEventListeners();

    this._cardLikeBox.textContent = this._likes.length;
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
    this._hideLikeButton();
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
        this._openPopupWithDelete();
      });
  }

  handleDeleteImage() {
    this._element.closest(".card").remove();
  }

  _likeSetEventListeners() {
    this._cardLike
      .addEventListener("click", () => {
        this._likeHandleClick();
      });
  }

  handleLikeCard() {
    const likeButton = this._element.querySelector('.card__button-like');
    const likeCount = this._element.querySelector('.card__like-count');

    if(!(likeButton.classList.contains('card__button-like_active'))) {
      this._api.like(this._cardId)
        .then((data) => {
          likeButton.classList.add('card__button-like_active');
          likeCount.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      this._api.dislike(this._cardId)
        .then((data) => {
          likeButton.classList.remove('card__button-like_active');
          likeCount.textContent = data.likes.length;
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
}