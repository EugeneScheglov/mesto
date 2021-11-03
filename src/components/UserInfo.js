export default class UserInfo {
    constructor({
        profileTitle,
        profileSubtitle,
        profileImage
    }) {
        this.profileTitle = profileTitle;
        this.profileSubtitle = profileSubtitle;
        this.profileImage = profileImage;
    }

    getUserInfo() {
        this._userData = {
            profileName: this.profileTitle.textContent,
            profileJob: this.profileSubtitle.textContent,
        }
        return this._userData;
    }

    setUserInfo(data) {
        this.profileTitle.textContent = data.name;
        this.profileSubtitle.textContent = data.about;
        this.setUserAvatar(data);
    }

    setUserAvatar(data) {
        this.profileImage.src = data.avatar;
    }
}