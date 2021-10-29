import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor({
        popupSelector,
    }) {
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');

        this._popupButton = this._form.querySelector('.popup__submit');
        this._popupButtonTextContent = this._popupButton.textContent;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', evt => {
            evt.preventDefault();
            this._handleSubmitCallback();
        })
    }

    setSubmitAction(action) {
        this._handleSubmitCallback = action;
    }

    renderLoadingWhileDeleting(isLoading) {
        if (isLoading) {
            this._popupButton.textContent = 'Удаление...'
        } else {
            this._popupButton.textContent = this._popupButtonTextContent
        }
    }
}