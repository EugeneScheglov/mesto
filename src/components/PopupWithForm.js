import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({
        popupSelector,
        handleSubmitForm
    }) {
        
        console.log(popupSelector);
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
        console.log(this.inputValues);
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
}