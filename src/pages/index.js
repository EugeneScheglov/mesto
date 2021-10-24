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
  avatarEditButton
} from "../utils/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
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

// Avatar //
const avatarSample = new PopupWithForm({
  popupSelector: ".popup_avatar",
  handleSubmitForm: (data) => {
    api.handleUserAvatar(data)
      .then((data) => {
        userInfo.setUserAvatar(data)
        avatarSample.close()
      })
    userInfo.setUserAvatar(data)
    avatarSample.close()
  }
});
avatarSample.setEventListeners()
avatarEditButton.addEventListener("click", function (evt) {
  validFormAvatar.resetValidation();
  avatarSample.open();
})


// инфо пользователя с сервера //
api.getUserInfo()
  .then(res => {
    profileName.textContent = res.name;
    profileJob.textContent = res.about;
    profileAvatar.src = res.avatar;
  })
  .then(() => {
    // карточки с сервера //
    api.getInitialCards()
      .then(arrayCards => {
        cardList.renderItems(arrayCards);
      })
      .catch(err => {
        console.error(err);
      })
  })
  .catch(err => {
    console.error(err);
  });

// Функционал Профиля //
const userInfo = new UserInfo({
  profileTitle: profileName,
  profileSubtitle: profileJob,
  profileImage: profileAvatar
});

const setInfo = () => {
  const userItems = userInfo.getUserInfo();
  nameInput.value = userItems.profileName;
  jobInput.value = userItems.profileJob;
}

// Экземпляр Профиля //
const profileSample = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleSubmitForm: (data) => {
    userInfo.setUserInfo(data);
    api.updateUserInfo(profileName, profileJob);
    profileSample.close();
  }
});
profileSample.setEventListeners();

profileEdit.addEventListener("click", () => {
  setInfo();
  validFormProfile.resetValidation();
  profileSample.open();
});

// Создание карточки //
const createCard = (item) => {
  const card = new Card({
    data: item,
    openPopupWithDelete: (deleteImage) => {
      deleteSample.open(item.id, deleteImage);
    },
    handleCardClick: () => {
      cardImagePopup.open(item);
    }
  }, '#element');
  return card.generate();
};

// Создание карточки из коробки //
const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    const cardLikesCount = cardElement.querySelector('.card__like-count');
    cardLikesCount.textContent = item.likes.length;
    cardList.addItem(cardElement, 'append');
  }
}, cardContainer);

// карточки с сервера //
api.getInitialCards()
  .then(arrayCards => {
    console.log(arrayCards);
    cardList.renderItems(arrayCards);
  })
  .catch(err => {
    console.error(err);
  })

//Экземепляр с картинкой //
const cardImagePopup = new PopupWithImage('.popup_image');
cardImagePopup.setEventListeners()

// Добавление Нового Места //
const createSample = new PopupWithForm({
  popupSelector: ".popup_create",
  handleSubmitForm: (data) => {
    const cardObj = {};
    cardObj.name = data.name;
    cardObj.link = data.link;
    api.updateCards(cardObj.name, cardObj.link)
      .then((res) => {
        const card = createCard(res);
        cardList.addItem(card, 'prepend');
        createSample.close();
      })
  }
});
createSample.setEventListeners();
createPopupOpenButton.addEventListener("click", function (evt) {
  validFormCreate.resetValidation();
  createSample.open();
});

// удаления карточки //
const deleteSample = new PopupWithDelete({
  popupSelector: ".popup_delete",
  deleteApiRequest: (cardId, deleteImage) => {
    api.removeCard(cardId)
      .then(() => {
        deleteImage();
        deleteSample.close();
      })
  }
});
deleteSample.setEventListeners();

// классы для валидации форм //
const validFormCreate = new FormValidator(validateObject, formCreate);
validFormCreate.enableValidation();
const validFormProfile = new FormValidator(validateObject, formProfile);
validFormProfile.enableValidation();
const validFormAvatar = new FormValidator(validateObject, formAvatar);
validFormAvatar.enableValidation();