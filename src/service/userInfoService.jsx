class UserInfoService {
    constructor() {
        this.userInfo = null;
    }

    setUserInfo(userInfo) {
        console.log(userInfo);
        this.userInfo = userInfo;
    }

    getUserInfo() {
        console.log(this.userInfo);
        return this.userInfo;
    }
}

export default UserInfoService;