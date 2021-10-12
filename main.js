/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils/constants.js
var elementTemplate = document.querySelector("#element").content;
var popupViewerImage = document.querySelector(".popup__viewer_image");
var popupViewerTitle = document.querySelector(".popup__viewer_title");
var popupImage = document.querySelector(".popup_image");
var profileAvatar = document.querySelector(".profile__image");
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
        openPopupWithDelete = _ref.openPopupWithDelete,
        handleCardClick = _ref.handleCardClick;

    _classCallCheck(this, Card);

    this._text = data.name;
    this._image = data.link;
    this._cardId = data._id;
    this._userId = data.owner._id;
    this._myUserId = "e3d187d5758c011e9e594e63";
    this._selector = selector;
    this.handleCardClick = handleCardClick;
    this._openPopupWithDelete = openPopupWithDelete;
  }

  _createClass(Card, [{
    key: "_hideDeleteButton",
    value: function _hideDeleteButton() {
      if (this._myUserId !== this._userId) {
        this._deleteButton.hidden = true;
      }
    }
  }, {
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
      this._deleteButton = this._element.querySelector(".card__trash-button");

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

      this._hideDeleteButton();
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

      this._deleteButton.addEventListener("click", function () {
        _this2._openPopupWithDelete(_this2.handleDeleteImage);
      });
    }
  }, {
    key: "handleDeleteImage",
    value: function handleDeleteImage() {
      if (this._element.closest(".card")) {
        this._element.remove();
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
    var renderer = _ref.renderer;

    Section_classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = container;
  }

  Section_createClass(Section, [{
    key: "addItem",
    value: function addItem(element, method) {
      this._container[method](element);
    }
  }, {
    key: "renderItems",
    value: function renderItems(renderedItems) {
      var _this = this;

      renderedItems.forEach(function (item) {
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


;// CONCATENATED MODULE: ./src/components/PopupWithDelete.js
function PopupWithDelete_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PopupWithDelete_typeof = function _typeof(obj) { return typeof obj; }; } else { PopupWithDelete_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PopupWithDelete_typeof(obj); }

function PopupWithDelete_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PopupWithDelete_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PopupWithDelete_createClass(Constructor, protoProps, staticProps) { if (protoProps) PopupWithDelete_defineProperties(Constructor.prototype, protoProps); if (staticProps) PopupWithDelete_defineProperties(Constructor, staticProps); return Constructor; }

function PopupWithDelete_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { PopupWithDelete_get = Reflect.get; } else { PopupWithDelete_get = function _get(target, property, receiver) { var base = PopupWithDelete_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return PopupWithDelete_get(target, property, receiver || target); }

function PopupWithDelete_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = PopupWithDelete_getPrototypeOf(object); if (object === null) break; } return object; }

function PopupWithDelete_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PopupWithDelete_setPrototypeOf(subClass, superClass); }

function PopupWithDelete_setPrototypeOf(o, p) { PopupWithDelete_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PopupWithDelete_setPrototypeOf(o, p); }

function PopupWithDelete_createSuper(Derived) { var hasNativeReflectConstruct = PopupWithDelete_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PopupWithDelete_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PopupWithDelete_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PopupWithDelete_possibleConstructorReturn(this, result); }; }

function PopupWithDelete_possibleConstructorReturn(self, call) { if (call && (PopupWithDelete_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PopupWithDelete_assertThisInitialized(self); }

function PopupWithDelete_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PopupWithDelete_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function PopupWithDelete_getPrototypeOf(o) { PopupWithDelete_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PopupWithDelete_getPrototypeOf(o); }



var PopupWithDelete = /*#__PURE__*/function (_Popup) {
  PopupWithDelete_inherits(PopupWithDelete, _Popup);

  var _super = PopupWithDelete_createSuper(PopupWithDelete);

  function PopupWithDelete(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector,
        deleteApiRequest = _ref.deleteApiRequest;

    PopupWithDelete_classCallCheck(this, PopupWithDelete);

    _this = _super.call(this, popupSelector);
    _this._deleteApiRequest = deleteApiRequest;
    _this._form = _this._popup.querySelector('.popup__form');
    return _this;
  }

  PopupWithDelete_createClass(PopupWithDelete, [{
    key: "open",
    value: function open(cardId, deleteImage) {
      PopupWithDelete_get(PopupWithDelete_getPrototypeOf(PopupWithDelete.prototype), "open", this).call(this);

      this._cardId = cardId;
      this._deleteImage = deleteImage;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      PopupWithDelete_get(PopupWithDelete_getPrototypeOf(PopupWithDelete.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this2._deleteApiRequest(_this2._cardId, _this2._deleteImage);
      });
    }
  }]);

  return PopupWithDelete;
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


;// CONCATENATED MODULE: ./src/components/Api.js
function Api_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Api_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Api_createClass(Constructor, protoProps, staticProps) { if (protoProps) Api_defineProperties(Constructor.prototype, protoProps); if (staticProps) Api_defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(url) {
    Api_classCallCheck(this, Api);

    this.url = url;
  }

  Api_createClass(Api, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch(this.url + '/users/me', {
        headers: {
          authorization: '1e53c369-0342-4013-857c-26a049ec0854'
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error ".concat(res.status));
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: "getCards",
    value: function getCards() {
      return fetch(this.url + '/cards', {
        headers: {
          authorization: '1e53c369-0342-4013-857c-26a049ec0854'
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error ".concat(res.status));
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: "updateUserInfo",
    value: function updateUserInfo(name, about) {
      return fetch(this.url + '/users/me', {
        method: 'PATCH',
        headers: {
          authorization: '1e53c369-0342-4013-857c-26a049ec0854',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.textContent,
          about: about.textContent
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error ".concat(res.status));
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: "updateCards",
    value: function updateCards(name, link) {
      return fetch(this.url + '/cards', {
        method: 'POST',
        headers: {
          authorization: '1e53c369-0342-4013-857c-26a049ec0854',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error ".concat(res.status));
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: "removeCard",
    value: function removeCard(cardId) {
      return fetch(this.url + "/cards/".concat(cardId), {
        method: 'DELETE',
        headers: {
          authorization: '1e53c369-0342-4013-857c-26a049ec0854'
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error ".concat(res.status));
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: "like",
    value: function like(id) {
      return fetch(this._url + "/cards/likes/".concat(id), {
        method: 'PUT',
        headers: {
          authorization: '1e53c369-0342-4013-857c-26a049ec0854'
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error ".concat(res.status));
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: "dislike",
    value: function dislike(id) {
      return fetch(this._url + "/cards/likes/".concat(id), {
        method: 'DELETE',
        headers: {
          authorization: '1e53c369-0342-4013-857c-26a049ec0854'
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error ".concat(res.status));
        }
      }).catch(function (err) {
        console.error(err);
      });
    } // getAllNeededData() {
    //     return Promise.all([this.getInitialCards(), this.getUserInfo()])
    // }

  }]);

  return Api;
}();


;// CONCATENATED MODULE: ./src/pages/index.js
// IMPORT //









 // API //

var api = new Api('https://nomoreparties.co/v1/cohort-28', profileName, profileJob); // инфо пользователя с сервера //

api.getUserInfo().then(function (res) {
  profileName.textContent = res.name;
  profileJob.textContent = res.about;
  profileAvatar.src = res.avatar;
}).then(function () {
  // карточки с сервера //
  api.getCards().then(function (arrayCards) {
    cardList.renderItems(arrayCards);
  }).catch(function (err) {
    console.error(err);
  });
}).catch(function (err) {
  console.error(err);
}); // Функционал Профиля //

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
    api.updateUserInfo(profileName, profileJob);
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
    openPopupWithDelete: function openPopupWithDelete(deleteImage) {
      deleteSample.open(item._id, deleteImage);
    },
    handleCardClick: function handleCardClick() {
      cardImagePopup.open(item);
    }
  }, '#element');
  return card.generate();
}; // Создание карточки из коробки //


var cardList = new Section({
  renderer: function renderer(item) {
    var cardElement = createCard(item);
    var cardLikesCount = cardElement.querySelector('.card__like-count');
    cardLikesCount.textContent = item.likes.length;
    cardList.addItem(cardElement, 'append');
  }
}, cardContainer); // карточки с сервера //

api.getCards().then(function (arrayCards) {
  console.log(arrayCards);
  cardList.renderItems(arrayCards);
}).catch(function (err) {
  console.error(err);
}); //Экземепляр с картинкой //

var cardImagePopup = new PopupWithImage('.popup_image');
cardImagePopup.setEventListeners(); // Добавление Нового Места //

var createSample = new PopupWithForm({
  popupSelector: ".popup_create",
  handleSubmitForm: function handleSubmitForm(data) {
    var cardObj = {};
    cardObj.name = data.name;
    cardObj.link = data.link;
    api.updateCards(cardObj.name, cardObj.link).then(function (res) {
      var card = createCard(res);
      cardList.addItem(card, 'prepend');
      createSample.close();
    });
  }
});
createSample.setEventListeners();
createPopupOpenButton.addEventListener("click", function (evt) {
  validFormCreate.resetValidation();
  createSample.open();
}); // удаления карточки //

var deleteSample = new PopupWithDelete({
  popupSelector: ".popup_delete",
  deleteApiRequest: function deleteApiRequest(cardId, deleteImage) {
    api.removeCard(cardId).then(function () {
      deleteImage();
      deleteSample.close();
    });
  }
});
deleteSample.setEventListeners(); // классы для валидации форм //

var validFormCreate = new FormValidator(validateObject, formCreate);
validFormCreate.enableValidation();
var validFormProfile = new FormValidator(validateObject, formProfile);
validFormProfile.enableValidation();
/******/ })()
;