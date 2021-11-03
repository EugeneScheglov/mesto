// IMPORT //
import {
  profileEdit,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  cardContainer,
  createPopupOpenButton,
  formCreate,
  formProfile,
  formAvatar,
  validateObject,
  profileAvatar,
  avatarEditButton,
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import './index.css';

// API //
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-28',
  headers: {
    authorization: '1e53c369-0342-4013-857c-26a049ec0854',
    'Content-Type': 'application/json'
  }
});

// ID Переменная пользователя //
let userId
// Возвращает результат нужных промисов //
api.getAllNeededData()
  .then(([cards, userData]) => {
    userId = userData._id;
    
    userInfo.setUserInfo(userData);
    cardList.renderItems(cards);
  })
  .catch((err) => console.log(err));

//////////////////////////////////////////////////

// Класс Профиля //
const userInfo = new UserInfo({
  profileTitle: profileName,
  profileSubtitle: profileJob,
  profileImage: profileAvatar,
});

const setInfo = () => {
  const userItems = userInfo.getUserInfo();
  nameInput.value = userItems.profileName;
  jobInput.value = userItems.profileJob;
}

//////////////////////////////////////////////////

// Образец Avatarа //
const avatarSample = new PopupWithForm({
  popupSelector: ".popup_avatar",
  handleSubmitForm: (data) => {
    avatarSample.renderLoading(true);
    api.handleUserAvatar(data)
      .then((data) => {
        userInfo.setUserAvatar(data);
        avatarSample.close();
      })
      .catch((err) => console.log(err))
      .finally(_ => avatarSample.renderLoading(false))
  }
});
avatarSample.setEventListeners();
avatarEditButton.addEventListener("click", function (evt) {
  validFormAvatar.resetValidation();
  avatarSample.open();
})

//////////////////////////////////////////////////

// Образец Профиля //
const profileSample = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleSubmitForm: (data) => {
    profileSample.renderLoading(true);
    userInfo.getUserInfo(data);
    api.setUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        profileSample.close();
      })
      .catch((err) => console.log(err))
      .finally(_ => profileSample.renderLoading(false))
  }
});
profileSample.setEventListeners();
profileEdit.addEventListener("click", () => {
  setInfo();
  validFormProfile.resetValidation();
  profileSample.open();
});

//////////////////////////////////////////////////

// Создание карточки из коробки //
const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement, 'append');
  }
}, cardContainer);

//////////////////////////////////////////////////

// Коробка карточки //
const createCard = (item) => {
  const card = new Card({
    data: item,
    api,
    userId,
    openPopupWithDelete: () => {
      deleteSample.setSubmitAction(_ => {
        deleteSample.renderLoadingWhileDeleting(true);
        api.removeCard(item._id)
          .then(_ => {
            card.handleDeleteImage();
            deleteSample.close();
          })
          .catch((err) => console.log(err))
          .finally(_ => deleteSample.renderLoadingWhileDeleting(false))
      })
      deleteSample.open();
    },
    handleCardClick: () => {
      cardImagePopup.open(item);
    },
    likeHandleClick: () => {
      card.handleLikeCard();
    },
  }, '#element');
  return card.generate();
};

//////////////////////////////////////////////////

// Образец с картинкой //
const cardImagePopup = new PopupWithImage('.popup_image');
cardImagePopup.setEventListeners()

// Образец создания карточки //
const createSample = new PopupWithForm({
  popupSelector: ".popup_create",
  handleSubmitForm: (data) => {
    createSample.renderLoading(true);
    const cardObj = {};
    cardObj.name = data.name;
    cardObj.link = data.link;
    api.updateCards(cardObj.name, cardObj.link)
      .then((res) => {
        const card = createCard(res);
        cardList.addItem(card, 'prepend');
        createSample.close();
      })
      .catch((err) => console.log(err))
      .finally(_ => createSample.renderLoading(false))
  }
});
createSample.setEventListeners();
createPopupOpenButton.addEventListener("click", function (evt) {
  validFormCreate.resetValidation();
  createSample.open();
});

// удаление карточки //
const deleteSample = new PopupWithConfirmation({
  popupSelector: ".popup_delete",
});
deleteSample.setEventListeners();

//////////////////////////////////////////////////

// классы для валидации форм //
const validFormCreate = new FormValidator(validateObject, formCreate);
validFormCreate.enableValidation();
const validFormProfile = new FormValidator(validateObject, formProfile);
validFormProfile.enableValidation();
const validFormAvatar = new FormValidator(validateObject, formAvatar);
validFormAvatar.enableValidation();