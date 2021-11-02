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
        this._userItems = {
            profileName: this.profileTitle.textContent,
            profileJob: this.profileSubtitle.textContent
        }
        return this._userItems;
    }

    setUserInfo(data) {
        this.profileTitle.textContent = data.userName;
        this.profileSubtitle.textContent = data.userAbout;
    }

    setUserAvatar(data) {
        this.profileImage.src = data.avatar;
    }
}