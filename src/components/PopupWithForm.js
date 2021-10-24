import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({
        popupSelector,
        handleSubmitForm
    }) {
        super(popupSelector);
        this.handleSubmitForm = handleSubmitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__text');
    }

    _getInputValues() {
        this.inputValues = {};
        this._inputList.forEach(input => {
            this.inputValues[input.name] = input.value;
        });
        return this.inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleSubmitForm(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._popupButton.textContent = 'Сохранение...'
        } else {
            this._popupButton.textContent = this._popupButtonTextContent
        }
    }
}