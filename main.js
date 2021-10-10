/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils/constants.js
var elementTemplate = document.querySelector("#element").content;
var popupViewerImage = document.querySelector(".popup__viewer_image");
var popupViewerTitle = document.querySelector(".popup__viewer_title");
var popupImage = document.querySelector(".popup_image");
var popupInput = document.querySelector(".popup__text");
var profileEdit = document.querySelector(".profile__edit-button");
var popupProfile = document.querySelector(".popup_profile");
var profileContainer = document.querySelector(".popup__container_profile");
var nameInput = profileContainer.querySelector(".popup__text_name");
var jobInput = profileContainer.querySelector(".popup__text_job");
var profileName = document.querySelector(".profile__title");
var profileJob = document.querySelector(".profile__subtitle");
var cardContainer = document.querySelector(".elements");
var createPopupOpenButton = document.querySelector(".profile__add-button");
var popupCreate = document.querySelector(".popup_create");
var placeInput = document.querySelector(".popup__text_place");
var urlInput = document.querySelector(".popup__text_url");
var popupInputTextPlace = document.querySelector(".popup__text_place");
var popupInputTextUrl = document.querySelector(".popup__text_url");
var formCreate = document.forms.create;
var formProfile = document.forms.profile; // Фото карты //

var initialCards = [{
  name: "Архыз",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
}, {
  name: "Челябинская область",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
}, {
  name: "Иваново",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
}, {
  name: "Камчатка",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
}, {
  name: "Холмогорский район",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
}, {
  name: "Байкал",
  link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
}]; // Validation settings //

var validateObject = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_invalid",
  inputErrorClass: "popup__text_invalid",
  errorClass: "error_active"
};
;// CONCATENATED MODULE: ./src/components/Card.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, selector) {
    var data = _ref.data,
        handleCardClick = _ref.handleCardClick;

    _classCallCheck(this, Card);

    this._text = data.name;
    this._image = data.link;
    this._selector = selector;
    this.handleCardClick = handleCardClick;
  }

  _createClass(Card, [{
    key: "_getElement",
    value: function _getElement() {
      var cardElement = document.querySelector(this._selector).content.querySelector(".card").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "generate",
    value: function generate() {
      this._element = this._getElement();
      this._cardImage = this._element.querySelector(".card__image");
      this._cardTitle = this._element.querySelector(".card__info");
      this._cardLike = this._element.querySelector(".card__button-like");

      this._setEventListeners();

      this._cardImage.src = this._image;
      this._cardImage.alt = this._text;
      this._cardTitle.textContent = this._text;
      return this._element;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      this._likeSetEventListeners();

      this._imageSetEventListeners();

      this._deleteSetEventListeners();
    }
  }, {
    key: "_imageSetEventListeners",
    value: function _imageSetEventListeners() {
      var _this = this;

      this._cardImage.addEventListener("click", function () {
        _this.handleCardClick();
      });
    }
  }, {
    key: "_deleteSetEventListeners",
    value: function _deleteSetEventListeners() {
      var _this2 = this;

      this._element.querySelector(".card__trash-button").addEventListener("click", function () {
        _this2._handleDeleteImage();
      });
    }
  }, {
    key: "_handleDeleteImage",
    value: function _handleDeleteImage() {
      if (this._element.closest(".card")) {
        this._element.remove();

        this._element = null;
      }
    }
  }, {
    key: "_likeSetEventListeners",
    value: function _likeSetEventListeners() {
      var _this3 = this;

      this._cardLike.addEventListener("click", function () {
        _this3._likeHandleClick();
      });
    }
  }, {
    key: "_likeHandleClick",
    value: function _likeHandleClick() {
      this._cardLike.classList.toggle("card__button-like_active");
    }
  }]);

  return Card;
}();


;// CONCATENATED MODULE: ./src/components/FormValidator.js
function FormValidator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FormValidator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function FormValidator_createClass(Constructor, protoProps, staticProps) { if (protoProps) FormValidator_defineProperties(Constructor.prototype, protoProps); if (staticProps) FormValidator_defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(validateObject, formElement) {
    FormValidator_classCallCheck(this, FormValidator);

    this._validateObject = validateObject;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._validateObject.submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validateObject.inputSelector));
  }

  FormValidator_createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      this._errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.add(this._validateObject.inputErrorClass);
      this._errorElement.innerText = errorMessage;

      this._errorElement.classList.add(this._validateObject.errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      this._errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.remove(this._validateObject.inputErrorClass);

      this._errorElement.classList.remove(this._validateObject.errorClass);

      this._errorElement.textContent = "";
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      !inputElement.validity.valid ? this._showInputError(inputElement, inputElement.validationMessage) : this._hideInputError(inputElement);
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return this._inputList.some(function (input) {
        return !input.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._buttonElement.classList.add(this._validateObject.inactiveButtonClass);

        this._buttonElement.setAttribute("disabled", true);
      } else {
        this._buttonElement.classList.remove(this._validateObject.inactiveButtonClass);

        this._buttonElement.removeAttribute("disabled", false);
      }
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this = this;

      this._toggleButtonState();

      this._inputList.forEach(function (inputElement) {
        _this._hideInputError(inputElement);
      });
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      this._toggleButtonState();

      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this2._checkInputValidity(inputElement);

          _this2._toggleButtonState();
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });

      this._setEventListeners();
    }
  }]);

  return FormValidator;
}();


;// CONCATENATED MODULE: ./src/components/Section.js
function Section_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Section_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Section_createClass(Constructor, protoProps, staticProps) { if (protoProps) Section_defineProperties(Constructor.prototype, protoProps); if (staticProps) Section_defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, container) {
    var items = _ref.items,
        renderer = _ref.renderer;

    Section_classCallCheck(this, Section);

    this._renderedItems = items;
    this._renderer = renderer;
    this._container = container;
  }

  Section_createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._renderedItems.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }]);

  return Section;
}();


;// CONCATENATED MODULE: ./src/components/Popup.js
function Popup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Popup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Popup_createClass(Constructor, protoProps, staticProps) { if (protoProps) Popup_defineProperties(Constructor.prototype, protoProps); if (staticProps) Popup_defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    Popup_classCallCheck(this, Popup);

    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  Popup_createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');

      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove("popup_opened");

      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popup.addEventListener('mousedown', function (evt) {
        if (evt.target.classList.contains('popup_opened')) {
          _this.close();
        }

        if (evt.target.classList.contains('popup__close')) {
          _this.close();
        }
      });
    }
  }]);

  return Popup;
}();


;// CONCATENATED MODULE: ./src/components/PopupWithImage.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function PopupWithImage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PopupWithImage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PopupWithImage_createClass(Constructor, protoProps, staticProps) { if (protoProps) PopupWithImage_defineProperties(Constructor.prototype, protoProps); if (staticProps) PopupWithImage_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    PopupWithImage_classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._popupImage = _this._popup.querySelector('.popup__viewer_image');
    _this._popupText = _this._popup.querySelector('.popup__viewer_title');
    return _this;
  }

  PopupWithImage_createClass(PopupWithImage, [{
    key: "open",
    value: function open(data) {
      this._popupImage.src = data.link;
      this._popupImage.alt = data.name;
      this._popupText.textContent = data.name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(Popup);


;// CONCATENATED MODULE: ./src/components/PopupWithForm.js
function PopupWithForm_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PopupWithForm_typeof = function _typeof(obj) { return typeof obj; }; } else { PopupWithForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PopupWithForm_typeof(obj); }

function PopupWithForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PopupWithForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PopupWithForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) PopupWithForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) PopupWithForm_defineProperties(Constructor, staticProps); return Constructor; }

function PopupWithForm_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { PopupWithForm_get = Reflect.get; } else { PopupWithForm_get = function _get(target, property, receiver) { var base = PopupWithForm_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return PopupWithForm_get(target, property, receiver || target); }

function PopupWithForm_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = PopupWithForm_getPrototypeOf(object); if (object === null) break; } return object; }

function PopupWithForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PopupWithForm_setPrototypeOf(subClass, superClass); }

function PopupWithForm_setPrototypeOf(o, p) { PopupWithForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PopupWithForm_setPrototypeOf(o, p); }

function PopupWithForm_createSuper(Derived) { var hasNativeReflectConstruct = PopupWithForm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PopupWithForm_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PopupWithForm_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PopupWithForm_possibleConstructorReturn(this, result); }; }

function PopupWithForm_possibleConstructorReturn(self, call) { if (call && (PopupWithForm_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PopupWithForm_assertThisInitialized(self); }

function PopupWithForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PopupWithForm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function PopupWithForm_getPrototypeOf(o) { PopupWithForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PopupWithForm_getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  PopupWithForm_inherits(PopupWithForm, _Popup);

  var _super = PopupWithForm_createSuper(PopupWithForm);

  function PopupWithForm(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector,
        handleSubmitForm = _ref.handleSubmitForm;

    PopupWithForm_classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this.handleSubmitForm = handleSubmitForm;
    _this._form = _this._popup.querySelector('.popup__form');
    _this._inputList = _this._form.querySelectorAll('.popup__text');
    return _this;
  }

  PopupWithForm_createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this.inputValues = {};

      this._inputList.forEach(function (input) {
        _this2.inputValues[input.name] = input.value;
      });

      return this.inputValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      PopupWithForm_get(PopupWithForm_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this3.handleSubmitForm(_this3._getInputValues());
      });
    }
  }, {
    key: "close",
    value: function close() {
      PopupWithForm_get(PopupWithForm_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._form.reset();
    }
  }]);

  return PopupWithForm;
}(Popup);


;// CONCATENATED MODULE: ./src/components/UserInfo.js
function UserInfo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UserInfo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UserInfo_createClass(Constructor, protoProps, staticProps) { if (protoProps) UserInfo_defineProperties(Constructor.prototype, protoProps); if (staticProps) UserInfo_defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var profileTitle = _ref.profileTitle,
        profileSubtitle = _ref.profileSubtitle;

    UserInfo_classCallCheck(this, UserInfo);

    this.profileTitle = profileTitle;
    this.profileSubtitle = profileSubtitle;
  }

  UserInfo_createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        profileName: this.profileTitle.innerText,
        profileJob: this.profileSubtitle.innerText
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this.profileTitle.innerText = data.popup_name;
      this.profileSubtitle.innerText = data.popup_job;
    }
  }]);

  return UserInfo;
}();


;// CONCATENATED MODULE: ./src/pages/index.js
// IMPORT'S //







 // Функционал Профиля //

var userInfo = new UserInfo({
  profileTitle: profileName,
  profileSubtitle: profileJob
});

var setInfo = function setInfo() {
  var userItems = userInfo.getUserInfo();
  nameInput.value = userItems.profileName;
  jobInput.value = userItems.profileJob;
}; // Экземпляр Профиля //


var profileSample = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleSubmitForm: function handleSubmitForm(data) {
    userInfo.setUserInfo(data);
    profileSample.close();
  }
});
profileSample.setEventListeners();
profileEdit.addEventListener("click", function () {
  setInfo();
  validFormProfile.resetValidation();
  profileSample.open();
}); // Создание карточки //

var createCard = function createCard(item) {
  var card = new Card({
    data: item,
    handleCardClick: function handleCardClick() {
      cardImagePopup.open(item);
    }
  }, '#element');
  return card.generate();
};

var cardImagePopup = new PopupWithImage('.popup_image');
cardImagePopup.setEventListeners();
var cardList = new Section({
  items: initialCards,
  renderer: function renderer(item) {
    var cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, cardContainer);
cardList.renderItems(); // классы для валидации форм //

var validFormCreate = new FormValidator(validateObject, formCreate);
validFormCreate.enableValidation();
var validFormProfile = new FormValidator(validateObject, formProfile);
validFormProfile.enableValidation(); // Добавление Нового Места //

var createSample = new PopupWithForm({
  popupSelector: ".popup_create",
  handleSubmitForm: function handleSubmitForm(data) {
    var cardObj = {};
    cardObj.name = data.name;
    cardObj.link = data.link;
    var cardElement = createCard(cardObj);
    cardList.addItem(cardElement);
    createSample.close();
  }
});
createSample.setEventListeners();
createPopupOpenButton.addEventListener("click", function (evt) {
  validFormCreate.resetValidation();
  createSample.open();
});
/******/ })()
;