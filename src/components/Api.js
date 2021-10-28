export default class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getUserInfo() {
        return fetch(this._url + '/users/me', {
                method: 'GET',
                headers: this._headers
            })
            .then(this._checkResponse)
    }

    getInitialCards() {
        return fetch(this._url + '/cards', {
                method: 'GET',
                headers: this._headers
            })
            .then(this._checkResponse)
    }

    updateUserInfo(name, about) {
        return fetch(this._url + '/users/me', {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: name.textContent,
                    about: about.textContent
                })
            })
            .then(this._checkResponse)
    }

    updateCards(name, link) {
        return fetch(this._url + '/cards', {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name: name,
                    link: link
                })
            })
            .then(this._checkResponse)
    }

    like(id) {
        return fetch(this._url + `/cards/likes/${id}`, {
                method: 'PUT',
                headers: this._headers
            })
            .then(this._checkResponse)
    }

    dislike(id) {
        return fetch(this._url + `/cards/likes/${id}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(this._checkResponse)
    }

    removeCard(_id) {
        return fetch(this._url + `/cards/${_id}`, {
                method: 'DELETE',
                headers: this._headers
                
            })
            .then(this._checkResponse)
    }

    handleUserAvatar(data) {
        return fetch(this._url + `/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar: data.userAvatar,
                })
            })
            .then(this._checkResponse)
    }

    getAllNeededData() {
        return Promise.all([this.getInitialCards(), this.getUserInfo()])
    }
}