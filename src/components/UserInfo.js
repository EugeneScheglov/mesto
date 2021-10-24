export default class UserInfo {
    constructor({
        profileTitle,
        profileSubtitle,
        profileAvatar
    }) {
        this.profileTitle = profileTitle;
        this.profileSubtitle = profileSubtitle;
        this.profileAvatar = profileAvatar;
    }

    getUserInfo() {
        return {
            profileName: this.profileTitle.innerText,
            profileJob: this.profileSubtitle.innerText
        }
    }

    setUserInfo(data) {
        this.profileTitle.innerText = data.popup_name;
        this.profileSubtitle.innerText = data.popup_job;
    }

    setUserAvatar(data) {
        this._profileAvatar.src = data.avatar
      }
}