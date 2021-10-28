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
        return {
            profileName: this.profileTitle.innerText,
            profileJob: this.profileSubtitle.innerText
        }
    }

    setUserInfo(data) {
        this.profileTitle.innerText = data.popup_name;
        this.profileSubtitle.innerText = data.popup_job;
    }

    setUserAvatar(res) {
        this.profileImage.src = res.avatar;
      }
}