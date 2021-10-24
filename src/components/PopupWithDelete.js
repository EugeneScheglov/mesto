import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
    constructor({
        popupSelector,
        deleteApiRequest
    }) {
        super(popupSelector);
        this._deleteApiRequest = deleteApiRequest;
        this._form = this._popup.querySelector('.popup__form');
    }

    open(cardId, deleteImage) {
        super.open()
        this._cardId = cardId;
        this._deleteImage = deleteImage;

    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._deleteApiRequest(this._cardId, this._deleteImage);
        });
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action
    }

    renderLoadingWhileDeleting(isLoading) {
        if (isLoading) {
            this._popupButton.textContent = 'Сохранение...'
        } else {
            this._popupButton.textContent = this._popupButtonTextContent
        }
    }
}