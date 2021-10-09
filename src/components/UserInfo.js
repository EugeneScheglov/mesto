export default class UserInfo {
    constructor({
        profileTitle,
        profileSubtitle
    }) {
        this.profileTitle = profileTitle;
        this.profileSubtitle = profileSubtitle;
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
}